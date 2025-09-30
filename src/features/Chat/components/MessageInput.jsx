import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper } from '@mui/material';
import { Send, AttachFile, EmojiEmotions } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const MessageInput = ({ onSendMessage }) => {
  const theme = useTheme();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        bgcolor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 1,
        }}
      >
        <IconButton size='small' color='primary' sx={{ mb: 0.5 }}>
          <AttachFile />
        </IconButton>

        <TextField
          fullWidth
          multiline
          maxRows={4}
          variant='outlined'
          placeholder='Type a message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          size='small'
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              bgcolor: theme.palette.action.hover,
              '& fieldset': {
                border: `1px solid ${theme.palette.divider}`,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />

        <IconButton size='small' color='primary' sx={{ mb: 0.5 }}>
          <EmojiEmotions />
        </IconButton>

        <IconButton
          size='small'
          color='primary'
          onClick={handleSend}
          disabled={!message.trim()}
          sx={{
            mb: 0.5,
            bgcolor: message.trim()
              ? theme.palette.primary.main
              : 'transparent',
            color: message.trim()
              ? theme.palette.primary.contrastText
              : 'inherit',
            '&:hover': {
              bgcolor: message.trim()
                ? theme.palette.primary.dark
                : theme.palette.action.hover,
            },
          }}
        >
          <Send />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default MessageInput;
