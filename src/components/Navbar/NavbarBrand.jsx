import React from 'react';
import { Typography } from '@mui/material';

const NavbarBrand = () => {
  return (
    <Typography
      variant='h2'
      component='div'
      sx={{ flexGrow: 1, fontSize: 18, fontWeight: 'bold' }}
    >
      Chat App
    </Typography>
  );
};

export default NavbarBrand;
