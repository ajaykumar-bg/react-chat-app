import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TypingIndicator = ({ user }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        mb: 1,
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Avatar
        src={user?.avatar}
        alt={user?.name}
        sx={{ width: 32, height: 32, mr: 1 }}
      />

      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          boxShadow: 1,
        }}
      >
        <Typography variant='body2' color='textSecondary'>
          {user?.name} is typing
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.25 }}>
          {[1, 2, 3].map((dot) => (
            <Box
              key={dot}
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                bgcolor: theme.palette.text.secondary,
                animation: `typing 1.4s ease-in-out ${dot * 0.2}s infinite`,
                '@keyframes typing': {
                  '0%, 60%, 100%': {
                    transform: 'translateY(0)',
                    opacity: 0.5,
                  },
                  '30%': {
                    transform: 'translateY(-6px)',
                    opacity: 1,
                  },
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TypingIndicator;
