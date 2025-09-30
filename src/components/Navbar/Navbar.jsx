import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavbarBrand from './NavbarBrand';
import UserMenu from './UserMenu';
import CompanyLogo from './CompanyLogo';

const Navbar = () => {
  return (
    <>
      <AppBar position='static' sx={{ mb: 2, borderRadius: 0 }}>
        <Toolbar>
          {/* Brand */}
          <NavbarBrand />

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {/* User Menu */}
            <UserMenu />

            {/* Company Logo */}
            <CompanyLogo />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
