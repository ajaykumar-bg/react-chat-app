import React from 'react';
import { Box, Chip } from '@mui/material';
import { Wifi, WifiOff } from '@mui/icons-material';

const ConnectionStatus = ({ isConnected }) => {
  return (
    <Box sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1000 }}>
      <Chip
        icon={isConnected ? <Wifi /> : <WifiOff />}
        label={isConnected ? 'Connected' : 'Offline'}
        color={isConnected ? 'success' : 'error'}
        variant='outlined'
        size='small'
        sx={{
          bgcolor: 'background.paper',
          '& .MuiChip-icon': {
            color: isConnected ? 'success.main' : 'error.main',
          },
        }}
      />
    </Box>
  );
};

export default ConnectionStatus;
