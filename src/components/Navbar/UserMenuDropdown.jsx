import React from 'react';
import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Logout, AccountCircle, Settings, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserMenuDropdown = ({ anchorEl, open, onClose, user }) => {
  const navigate = useNavigate();

  const handleMyProfile = () => {
    navigate('/my-profile');
    onClose();
  };

  const handleSettings = () => {
    navigate('/settings');
    onClose();
  };

  const handleLogout = () => {
    // In a real app, this would clear auth tokens and redirect to login
    console.log('Logout clicked');
    onClose();
    // You can add actual logout logic here
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { minWidth: 220 },
      }}
    >
      {/* User Info */}
      <MenuItem disabled>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText>
          <Typography variant='body2' sx={{ fontWeight: 500 }}>
            {user.name}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {user.email}
          </Typography>
        </ListItemText>
      </MenuItem>
      <Divider />

      {/* My Profile */}
      <MenuItem onClick={handleMyProfile}>
        <ListItemIcon>
          <Person fontSize='small' />
        </ListItemIcon>
        <ListItemText>My Profile</ListItemText>
      </MenuItem>

      {/* Settings */}
      <MenuItem onClick={handleSettings}>
        <ListItemIcon>
          <Settings fontSize='small' />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>

      <Divider />

      {/* Logout */}
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  );
};

export default UserMenuDropdown;
