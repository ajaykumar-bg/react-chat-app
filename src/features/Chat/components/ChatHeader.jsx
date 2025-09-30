import React from 'react';
import { Box, Typography, Avatar, IconButton, Badge } from '@mui/material';
import { Phone, Videocam, MoreVert, Search } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { getStatusColor, formatLastSeen } from '../chat.utils';

const ChatHeader = ({ user }) => {
  const theme = useTheme();

  const getStatusIndicator = () => (
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        bgcolor: getStatusColor(user.status),
        border: `2px solid ${theme.palette.background.paper}`,
      }}
    />
  );

  return (
    <>
      <Box
        sx={{
          p: 2,
          bgcolor: theme.palette.background.paper,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Badge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={getStatusIndicator()}
          >
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 45, height: 45 }}
            />
          </Badge>

          <Box>
            <Typography variant='h6' fontWeight='medium'>
              {user.name}
            </Typography>
            <Typography variant='caption' color='textSecondary'>
              {user.status === 'online'
                ? 'Online'
                : `Last seen ${formatLastSeen(user.lastSeen)}`}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size='small' color='primary'>
            <Search />
          </IconButton>
          <IconButton size='small' color='primary'>
            <Phone />
          </IconButton>
          <IconButton size='small' color='primary'>
            <Videocam />
          </IconButton>
          <IconButton size='small'>
            <MoreVert />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default ChatHeader;
