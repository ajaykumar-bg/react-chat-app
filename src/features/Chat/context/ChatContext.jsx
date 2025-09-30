import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from 'react';
import webSocketService from '../services/WebSocketService';

// Initial state
const initialState = {
  users: [],
  messages: {},
  selectedUser: null,
  isConnected: false,
  isTyping: {},
  searchTerm: '',
};

// Action types
const ActionTypes = {
  SET_USERS: 'SET_USERS',
  SET_MESSAGES: 'SET_MESSAGES',
  ADD_MESSAGE: 'ADD_MESSAGE',
  UPDATE_MESSAGE_STATUS: 'UPDATE_MESSAGE_STATUS',
  SELECT_USER: 'SELECT_USER',
  SET_CONNECTION_STATUS: 'SET_CONNECTION_STATUS',
  SET_TYPING_STATUS: 'SET_TYPING_STATUS',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  UPDATE_USER_LAST_MESSAGE: 'UPDATE_USER_LAST_MESSAGE',
  MARK_MESSAGES_AS_READ: 'MARK_MESSAGES_AS_READ',
};

// Reducer
const chatReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ActionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    case ActionTypes.ADD_MESSAGE:
      const { userId, message } = action.payload;
      return {
        ...state,
        messages: {
          ...state.messages,
          [userId]: [...(state.messages[userId] || []), message],
        },
      };

    case ActionTypes.UPDATE_MESSAGE_STATUS:
      const { messageId, status } = action.payload;
      const updatedMessages = { ...state.messages };

      Object.keys(updatedMessages).forEach((userId) => {
        updatedMessages[userId] = updatedMessages[userId].map((msg) =>
          msg.id === messageId ? { ...msg, status } : msg
        );
      });

      return {
        ...state,
        messages: updatedMessages,
      };

    case ActionTypes.SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };

    case ActionTypes.SET_CONNECTION_STATUS:
      return {
        ...state,
        isConnected: action.payload,
      };

    case ActionTypes.SET_TYPING_STATUS:
      return {
        ...state,
        isTyping: {
          ...state.isTyping,
          [action.payload.userId]: action.payload.isTyping,
        },
      };

    case ActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case ActionTypes.UPDATE_USER_LAST_MESSAGE:
      const {
        userId: updateUserId,
        lastMessage,
        lastMessageTime,
      } = action.payload;
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === updateUserId
            ? { ...user, lastMessage, lastMessageTime }
            : user
        ),
      };

    case ActionTypes.MARK_MESSAGES_AS_READ:
      const readUserId = action.payload;
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === readUserId ? { ...user, unreadCount: 0 } : user
        ),
      };

    default:
      return state;
  }
};

// Create context
const ChatContext = createContext();

// Custom hook to use chat context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

// Chat provider component
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Initialize WebSocket connection
  useEffect(() => {
    webSocketService.connect();

    // Setup event listeners
    const unsubscribeMessage = webSocketService.onMessage((message) => {
      dispatch({
        type: ActionTypes.ADD_MESSAGE,
        payload: {
          userId: message.senderId,
          message,
        },
      });

      // Update user's last message
      dispatch({
        type: ActionTypes.UPDATE_USER_LAST_MESSAGE,
        payload: {
          userId: message.senderId,
          lastMessage: message.text,
          lastMessageTime: message.timestamp,
        },
      });
    });

    const unsubscribeStatus = webSocketService.onMessageStatus(
      (statusUpdate) => {
        dispatch({
          type: ActionTypes.UPDATE_MESSAGE_STATUS,
          payload: statusUpdate,
        });
      }
    );

    const unsubscribeConnection = webSocketService.onConnection(
      (isConnected) => {
        dispatch({
          type: ActionTypes.SET_CONNECTION_STATUS,
          payload: isConnected,
        });
      }
    );

    // Cleanup on unmount
    return () => {
      unsubscribeMessage();
      unsubscribeStatus();
      unsubscribeConnection();
      webSocketService.disconnect();
    };
  }, []);

  // Actions
  const setUsers = useCallback((users) => {
    dispatch({
      type: ActionTypes.SET_USERS,
      payload: users,
    });
  }, []);

  const setMessages = useCallback((messages) => {
    dispatch({
      type: ActionTypes.SET_MESSAGES,
      payload: messages,
    });
  }, []);

  const sendMessage = useCallback(
    (messageText) => {
      if (!state.selectedUser || !messageText.trim()) return;

      const message = {
        id: Date.now(),
        senderId: 'me',
        text: messageText,
        timestamp: new Date(),
        type: 'text',
        status: 'sent',
      };

      // Add message to local state
      dispatch({
        type: ActionTypes.ADD_MESSAGE,
        payload: {
          userId: state.selectedUser.id,
          message,
        },
      });

      // Update user's last message
      dispatch({
        type: ActionTypes.UPDATE_USER_LAST_MESSAGE,
        payload: {
          userId: state.selectedUser.id,
          lastMessage: messageText,
          lastMessageTime: new Date(),
        },
      });

      // Send via WebSocket
      webSocketService.sendMessage({
        ...message,
        recipientId: state.selectedUser.id,
      });
    },
    [state.selectedUser]
  );

  const selectUser = useCallback((user) => {
    dispatch({
      type: ActionTypes.SELECT_USER,
      payload: user,
    });

    // Mark messages as read
    if (user) {
      dispatch({
        type: ActionTypes.MARK_MESSAGES_AS_READ,
        payload: user.id,
      });
    }
  }, []);

  const setSearchTerm = useCallback((term) => {
    dispatch({
      type: ActionTypes.SET_SEARCH_TERM,
      payload: term,
    });
  }, []);

  const setTypingStatus = useCallback((userId, isTyping) => {
    dispatch({
      type: ActionTypes.SET_TYPING_STATUS,
      payload: { userId, isTyping },
    });

    // Send typing status via WebSocket
    webSocketService.sendTyping(userId, isTyping);
  }, []);

  const value = {
    ...state,
    setUsers,
    setMessages,
    sendMessage,
    selectUser,
    setSearchTerm,
    setTypingStatus,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContext;
