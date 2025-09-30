import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Badge,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { formatMessageTime, getStatusColor } from '../chat.utils';

const UserListItem = ({ user, isSelected, onClick }) => {
  const theme = useTheme();

  const getStatusIndicator = () => (
    <Box
      sx={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        bgcolor: getStatusColor(user.status),
        border: `2px solid ${theme.palette.background.paper}`,
      }}
    />
  );

  return (
    <ListItem
      button
      onClick={onClick}
      selected={isSelected}
      sx={{
        py: 1.5,
        px: 2,
        borderBottom: `1px solid ${theme.palette.divider}`,
        bgcolor: isSelected ? theme.palette.action.selected : 'transparent',
        '&:hover': {
          bgcolor: isSelected
            ? theme.palette.action.selected
            : theme.palette.action.hover,
        },
        cursor: 'pointer',
      }}
    >
      <ListItemAvatar>
        <Badge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={getStatusIndicator()}
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 50, height: 50 }}
          />
        </Badge>
      </ListItemAvatar>

      <ListItemText
        primary={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 0.5,
            }}
          >
            <Typography
              variant='subtitle1'
              fontWeight={user.unreadCount > 0 ? 'bold' : 'medium'}
              color={isSelected ? 'primary' : 'textPrimary'}
              noWrap
            >
              {user.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {user.unreadCount > 0 && (
                <Chip
                  label={user.unreadCount}
                  size='small'
                  color='primary'
                  sx={{
                    height: 20,
                    minWidth: 20,
                    '& .MuiChip-label': {
                      fontSize: '0.75rem',
                      px: 1,
                    },
                  }}
                />
              )}
              <Typography variant='caption' color='textSecondary'>
                {formatMessageTime(user.lastMessageTime)}
              </Typography>
            </Box>
          </Box>
        }
        secondary={
          <Typography
            variant='body2'
            color='textSecondary'
            noWrap
            fontWeight={user.unreadCount > 0 ? 'medium' : 'normal'}
          >
            {user.lastMessage}
          </Typography>
        }
        sx={{ m: 0 }}
      />
    </ListItem>
  );
};

export default UserListItem;
