import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

const MessageList = ({ messages, selectedUser, isTyping }) => {
  const theme = useTheme();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'auto',
        p: 2,
        bgcolor:
          theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
        backgroundImage:
          theme.palette.mode === 'dark'
            ? 'none'
            : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f0f0f0" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      {messages.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: theme.palette.text.secondary,
          }}
        >
          No messages yet. Start the conversation!
        </Box>
      ) : (
        <>
          {messages.map((message, index) => {
            const isFirstMessage = index === 0;
            const isLastMessage = index === messages.length - 1;
            const prevMessage = !isFirstMessage ? messages[index - 1] : null;
            const nextMessage = !isLastMessage ? messages[index + 1] : null;

            const isSameUser = prevMessage?.senderId === message.senderId;
            const isNextSameUser = nextMessage?.senderId === message.senderId;

            return (
              <MessageBubble
                key={message.id}
                message={message}
                showAvatar={!isNextSameUser || isLastMessage}
                showTimestamp={!isSameUser || isFirstMessage}
                isGrouped={isSameUser}
              />
            );
          })}

          {isTyping && selectedUser && <TypingIndicator user={selectedUser} />}

          <div ref={messagesEndRef} />
        </>
      )}
    </Box>
  );
};

export default MessageList;
