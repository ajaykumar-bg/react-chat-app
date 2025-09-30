import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Divider,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Edit as EditIcon,
  PhotoCamera,
  Person,
  Phone,
  Info,
  Notifications,
  Security,
  Help,
  Logout,
  Check as CheckIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useUser } from '../../context/UserContext';

const MyProfile = () => {
  const { user } = useUser();
  const theme = useTheme();
  const [editingName, setEditingName] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [tempName, setTempName] = useState(user?.name || '');
  const [tempAbout, setTempAbout] = useState('Hey there! I am using WhatsApp.');

  const handleSaveName = () => {
    // In a real app, you would save to backend here
    setEditingName(false);
  };

  const handleSaveAbout = () => {
    // In a real app, you would save to backend here
    setEditingAbout(false);
  };

  const handleCancelEdit = () => {
    setEditingName(false);
    setEditingAbout(false);
    setTempName(user?.name || '');
    setTempAbout('Hey there! I am using WhatsApp.');
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        bgcolor: theme.palette.background.default,
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          p: 2,
          mb: 2,
        }}
      >
        <Typography variant='h5' fontWeight='medium'>
          Profile
        </Typography>
      </Box>

      {/* Profile Photo Section */}
      <Card
        elevation={0}
        sx={{ mb: 2, bgcolor: theme.palette.background.paper }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
          }}
        >
          <Box sx={{ position: 'relative', mb: 2 }}>
            <Avatar
              src={user?.avatar || 'https://i.pravatar.cc/150?img=10'}
              alt={user?.name}
              sx={{
                width: 120,
                height: 120,
                border: `3px solid ${theme.palette.primary.main}`,
                mb: 2,
              }}
            />
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                bgcolor: theme.palette.primary.main,
                color: 'white',
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
                width: 36,
                height: 36,
              }}
            >
              <PhotoCamera fontSize='small' />
            </IconButton>
          </Box>
          <Chip label='Online' color='success' size='small' sx={{ mt: 1 }} />
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card
        elevation={0}
        sx={{ mb: 2, bgcolor: theme.palette.background.paper }}
      >
        <CardContent>
          <Typography variant='body2' color='textSecondary' sx={{ mb: 2 }}>
            Personal Info
          </Typography>

          {/* Name */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Person sx={{ mr: 2, color: 'text.secondary' }} />
              <Box sx={{ flex: 1 }}>
                {editingName ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TextField
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      variant='standard'
                      fullWidth
                      autoFocus
                    />
                    <IconButton
                      size='small'
                      onClick={handleSaveName}
                      color='primary'
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton size='small' onClick={handleCancelEdit}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography variant='body1' fontWeight='medium'>
                        {tempName}
                      </Typography>
                      <Typography variant='caption' color='textSecondary'>
                        This is not your username or pin. This name will be
                        visible to your WhatsApp contacts.
                      </Typography>
                    </Box>
                    <IconButton
                      size='small'
                      onClick={() => setEditingName(true)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* About */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Info sx={{ mr: 2, color: 'text.secondary' }} />
              <Box sx={{ flex: 1 }}>
                {editingAbout ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TextField
                      value={tempAbout}
                      onChange={(e) => setTempAbout(e.target.value)}
                      variant='standard'
                      fullWidth
                      autoFocus
                    />
                    <IconButton
                      size='small'
                      onClick={handleSaveAbout}
                      color='primary'
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton size='small' onClick={handleCancelEdit}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        sx={{ mb: 0.5 }}
                      >
                        About
                      </Typography>
                      <Typography variant='body1'>{tempAbout}</Typography>
                    </Box>
                    <IconButton
                      size='small'
                      onClick={() => setEditingAbout(true)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Phone */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Phone sx={{ mr: 2, color: 'text.secondary' }} />
            <Box>
              <Typography
                variant='body2'
                color='textSecondary'
                sx={{ mb: 0.5 }}
              >
                Phone
              </Typography>
              <Typography variant='body1'>+1 (555) 123-4567</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Settings Section */}
      <Card
        elevation={0}
        sx={{ mb: 2, bgcolor: theme.palette.background.paper }}
      >
        <CardContent>
          <Typography variant='body2' color='textSecondary' sx={{ mb: 2 }}>
            Settings
          </Typography>

          <List disablePadding>
            <ListItem button sx={{ px: 0 }}>
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText
                primary='Notifications'
                secondary='Message, group & call tones'
              />
            </ListItem>

            <ListItem button sx={{ px: 0 }}>
              <ListItemIcon>
                <Security />
              </ListItemIcon>
              <ListItemText
                primary='Privacy'
                secondary='Block contacts, disappearing messages'
              />
            </ListItem>

            <ListItem button sx={{ px: 0 }}>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText
                primary='Help'
                secondary='Help center, contact us, privacy policy'
              />
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem button sx={{ px: 0 }}>
              <ListItemIcon>
                <Logout color='error' />
              </ListItemIcon>
              <ListItemText
                primary='Log out'
                primaryTypographyProps={{ color: 'error.main' }}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Version Info */}
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Typography variant='caption' color='textSecondary'>
          WhatsApp from Meta
        </Typography>
        <br />
        <Typography variant='caption' color='textSecondary'>
          Version 2.25.0.0
        </Typography>
      </Box>
    </Box>
  );
};

export default MyProfile;
