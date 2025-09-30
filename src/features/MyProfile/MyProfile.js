import React from 'react';
import { Box, Typography } from '@mui/material';
import { useUser } from '../../context/UserContext';

const MyProfile = () => {
  const { user } = useUser();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        My Profile
      </Typography>
      My Profile Goes Here - {user?.name}
    </Box>
  );
};

export default MyProfile;
