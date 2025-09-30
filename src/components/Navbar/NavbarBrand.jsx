import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavbarBrand = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Typography
      variant='h2'
      component='div'
      onClick={handleClick}
      sx={{
        flexGrow: 1,
        fontSize: 18,
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.8,
        },
        transition: 'opacity 0.2s ease',
      }}
    >
      Chat App
    </Typography>
  );
};

export default NavbarBrand;
