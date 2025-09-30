import React, { useEffect } from 'react';
import { Grid, Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';
import ConnectionStatus from './components/ConnectionStatus';
import { ChatProvider, useChat } from './context/ChatContext';
import { mockUsers, mockMessages } from './chat.constants';
import { sortUsersByLastMessage } from './chat.utils';

const ChatContent = () => {
  const theme = useTheme();
  const {
    users,
    selectedUser,
    messages,
    searchTerm,
    isTyping,
    isConnected,
    setUsers,
    setMessages,
    selectUser,
    sendMessage,
    setSearchTerm,
  } = useChat();

  useEffect(() => {
    // Only initialize if users array is empty to prevent re-initialization
    if (users.length === 0) {
      setUsers(sortUsersByLastMessage(mockUsers));
      setMessages(mockMessages);
      // Auto-select first user
      if (mockUsers.length > 0) {
        selectUser(mockUsers[0]);
      }
    }
  }, [users.length, setUsers, setMessages, selectUser]);

  return (
    <Box sx={{ height: 'calc(100vh - 120px)', p: 2, position: 'relative' }}>
      <ConnectionStatus isConnected={isConnected} />
      <Paper
        elevation={3}
        sx={{
          height: '100%',
          overflow: 'hidden',
          borderRadius: 2,
        }}
      >
        <Grid container sx={{ height: '100%' }}>
          <Grid
            size={{ xs: 12, md: 4, lg: 3 }}
            sx={{
              borderRight: `1px solid ${theme.palette.divider}`,
              height: '100%',
            }}
          >
            <ChatSidebar
              users={users}
              selectedUser={selectedUser}
              searchTerm={searchTerm}
              onUserSelect={selectUser}
              onSearchChange={setSearchTerm}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 9 }} sx={{ height: '100%' }}>
            <ChatWindow
              selectedUser={selectedUser}
              messages={messages[selectedUser?.id] || []}
              onSendMessage={sendMessage}
              isTyping={isTyping[selectedUser?.id] || false}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const Chat = () => {
  return (
    <ChatProvider>
      <ChatContent />
    </ChatProvider>
  );
};

export default Chat;
