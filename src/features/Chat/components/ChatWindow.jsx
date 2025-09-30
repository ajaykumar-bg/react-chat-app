import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow = ({ selectedUser, messages, onSendMessage, isTyping }) => {
  const theme = useTheme();

  if (!selectedUser) {
    return (
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.background.default,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            bgcolor: 'transparent',
          }}
        >
          <Typography variant='h5' color='textSecondary' gutterBottom>
            Welcome to Chat
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            Select a conversation to start messaging
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.default,
      }}
    >
      <ChatHeader user={selectedUser} />

      <Box
        sx={{
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MessageList
          messages={messages}
          selectedUser={selectedUser}
          isTyping={isTyping}
        />
        <MessageInput onSendMessage={onSendMessage} />
      </Box>
    </Box>
  );
};

export default ChatWindow;
