# Chat Feature

A WhatsApp-like chat application built with React and Material-UI, featuring real-time messaging capabilities using WebSocket.

## Features

### Core Features

- **Real-time messaging** with WebSocket support
- **User list** with online status indicators
- **Message status** indicators (sent, delivered, read)
- **Typing indicators** for active conversations
- **Search functionality** to find conversations
- **Connection status** indicator
- **Responsive design** with Material-UI Grid v2

### UI Components

- **ChatSidebar**: User list with search and status
- **ChatWindow**: Main chat interface
- **MessageList**: Scrollable message display
- **MessageBubble**: Individual message with status
- **MessageInput**: Text input with send functionality
- **TypingIndicator**: Shows when users are typing
- **ConnectionStatus**: WebSocket connection indicator

### Architecture

- **Context API** for state management (ChatContext)
- **WebSocket Service** for real-time communication
- **Mock data** for development and testing
- **Modular components** for maintainability

## File Structure

```
Chat/
├── index.js                    # Main export
├── Chat.jsx                   # Main chat component
├── chat.constants.js          # Mock data and constants
├── chat.utils.js              # Utility functions
├── components/
│   ├── ChatSidebar.jsx        # User list sidebar
│   ├── ChatSidebarHeader.jsx  # Sidebar header
│   ├── ChatWindow.jsx         # Main chat window
│   ├── ChatHeader.jsx         # Chat header with user info
│   ├── MessageList.jsx        # Message container
│   ├── MessageBubble.jsx      # Individual message
│   ├── MessageInput.jsx       # Message input field
│   ├── UserListItem.jsx       # User list item
│   ├── TypingIndicator.jsx    # Typing indicator
│   └── ConnectionStatus.jsx   # Connection status
├── context/
│   └── ChatContext.jsx        # Chat state management
└── services/
    └── WebSocketService.js    # WebSocket communication
```

## Usage

### Navigation

Access the chat feature through the navigation menu at `/chat`.

### Sending Messages

1. Select a user from the sidebar
2. Type your message in the input field
3. Press Enter or click the send button
4. Watch for delivery and read status indicators

### Features Available

- **Online Status**: Green dot for online users
- **Unread Messages**: Badge showing unread count
- **Message Status**: Icons showing sent/delivered/read
- **Search**: Filter conversations by user name
- **Typing**: Real-time typing indicators
- **Connection**: Status indicator in top-right corner

## WebSocket Integration

The chat uses a WebSocket service that:

- Connects to `ws://localhost:3001` by default
- Falls back to simulation mode if server unavailable
- Handles reconnection automatically
- Manages message delivery status
- Supports typing indicators

### Mock WebSocket Server

For development, the app includes mock data and simulated WebSocket behavior:

- Automatic message delivery simulation
- Simulated typing indicators
- Connection status simulation

## Responsive Design

- **Mobile**: Single column, user list toggles
- **Tablet**: 4/8 column split
- **Desktop**: 3/9 column split with full features

## Dependencies

- **@mui/material**: UI components
- **@mui/icons-material**: Icons
- **socket.io-client**: WebSocket client
- **date-fns**: Date formatting
- **react-router-dom**: Navigation

## Development

### Adding New Message Types

1. Extend `MessageBubble.jsx` for new message rendering
2. Update `chat.constants.js` for mock data
3. Modify WebSocket service for new message handling

### Customizing UI

- Modify theme colors in `theme.js`
- Adjust component styles in individual component files
- Update responsive breakpoints in Grid components

### WebSocket Server Setup

```javascript
// Example WebSocket server events
socket.on('sendMessage', (message) => {
  // Handle incoming message
  socket.to(message.recipientId).emit('message', message);
});

socket.on('typing', (data) => {
  // Handle typing indicator
  socket.to(data.recipientId).emit('userTyping', data);
});
```

## Future Enhancements

- **File attachments** (images, documents)
- **Voice messages** recording and playback
- **Group chats** with multiple participants
- **Message reactions** (emojis)
- **Message search** within conversations
- **Push notifications** for new messages
- **User presence** detailed status
- **Message encryption** for security
- **Chat themes** and customization
