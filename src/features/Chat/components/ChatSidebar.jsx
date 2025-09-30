import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  Divider,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import ChatSidebarHeader from './ChatSidebarHeader';
import UserListItem from './UserListItem';
import { searchUsers } from '../chat.utils';

const ChatSidebar = ({
  users,
  selectedUser,
  searchTerm,
  onUserSelect,
  onSearchChange,
}) => {
  const theme = useTheme();
  const filteredUsers = searchUsers(users, searchTerm);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.paper,
      }}
    >
      <ChatSidebarHeader />

      <Box sx={{ p: 2, pb: 1 }}>
        <TextField
          fullWidth
          variant='outlined'
          placeholder='Search conversations...'
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search color='action' />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              bgcolor: theme.palette.action.hover,
            },
          }}
        />
      </Box>

      <Divider />

      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {filteredUsers.length > 0 ? (
          <List sx={{ p: 0 }}>
            {filteredUsers.map((user) => (
              <UserListItem
                key={user.id}
                user={user}
                isSelected={selectedUser?.id === user.id}
                onClick={() => onUserSelect(user)}
              />
            ))}
          </List>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              p: 2,
            }}
          >
            <Typography variant='body2' color='textSecondary' align='center'>
              No conversations found
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatSidebar;
