import React from 'react';
import { Box, Typography, Avatar, IconButton, Badge } from '@mui/material';
import { MoreVert, Add } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { currentUser } from '../chat.constants';

const ChatSidebarHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Badge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: '#4caf50',
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            />
          }
        >
          <Avatar
            src={currentUser.avatar}
            alt={currentUser.name}
            sx={{ width: 40, height: 40 }}
          />
        </Badge>
        <Typography variant='h6' fontWeight='medium'>
          Chats
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size='small' sx={{ color: 'inherit', mr: 0.5 }}>
          <Add />
        </IconButton>
        <IconButton size='small' sx={{ color: 'inherit' }}>
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatSidebarHeader;
