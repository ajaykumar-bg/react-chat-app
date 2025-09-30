import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { Done, DoneAll, Schedule } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { formatMessageTime } from '../chat.utils';
import { mockUsers, currentUser } from '../chat.constants';

const MessageBubble = ({ message, showAvatar, showTimestamp, isGrouped }) => {
  const theme = useTheme();
  const isOwnMessage = message.senderId === 'me';

  // Get sender info
  const sender = isOwnMessage
    ? currentUser
    : mockUsers.find((user) => user.id === message.senderId);

  const getStatusIcon = () => {
    if (!isOwnMessage) return null;

    switch (message.status) {
      case 'sent':
        return (
          <Schedule
            sx={{ fontSize: 14, color: theme.palette.text.secondary }}
          />
        );
      case 'delivered':
        return (
          <Done sx={{ fontSize: 14, color: theme.palette.text.secondary }} />
        );
      case 'read':
        return (
          <DoneAll sx={{ fontSize: 14, color: theme.palette.primary.main }} />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
        mb: isGrouped ? 0.5 : 1.5,
        alignItems: 'flex-end',
      }}
    >
      {!isOwnMessage && (
        <Avatar
          src={sender?.avatar}
          alt={sender?.name}
          sx={{
            width: 32,
            height: 32,
            mr: 1,
            visibility: showAvatar ? 'visible' : 'hidden',
          }}
        />
      )}

      <Box
        sx={{
          maxWidth: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isOwnMessage ? 'flex-end' : 'flex-start',
        }}
      >
        {showTimestamp && (
          <Typography
            variant='caption'
            color='textSecondary'
            sx={{
              mb: 0.5,
              mx: 1,
              textAlign: isOwnMessage ? 'right' : 'left',
            }}
          >
            {formatMessageTime(message.timestamp)}
          </Typography>
        )}

        <Paper
          elevation={1}
          sx={{
            p: 1.5,
            bgcolor: isOwnMessage
              ? theme.palette.primary.main
              : theme.palette.background.paper,
            color: isOwnMessage
              ? theme.palette.primary.contrastText
              : theme.palette.text.primary,
            borderRadius: 2,
            borderTopLeftRadius: !isOwnMessage && isGrouped ? 0.5 : 2,
            borderTopRightRadius: isOwnMessage && isGrouped ? 0.5 : 2,
            borderBottomLeftRadius: !isOwnMessage && showAvatar ? 0.5 : 2,
            borderBottomRightRadius: isOwnMessage && showAvatar ? 0.5 : 2,
            position: 'relative',
            wordWrap: 'break-word',
          }}
        >
          <Typography variant='body2'>{message.text}</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              mt: 0.5,
              gap: 0.5,
            }}
          >
            <Typography
              variant='caption'
              sx={{
                fontSize: '0.7rem',
                color: isOwnMessage
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.secondary,
                opacity: 0.8,
              }}
            >
              {formatMessageTime(message.timestamp)}
            </Typography>
            {getStatusIcon()}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default MessageBubble;
