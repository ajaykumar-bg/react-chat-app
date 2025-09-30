import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Chat as ChatIcon,
  Message as MessageIcon,
  People as PeopleIcon,
  Wifi as WifiIcon,
  Phone as PhoneIcon,
  Videocam as VideocamIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MessageIcon color='primary' />,
      title: 'Real-time Messaging',
      description: 'Send and receive messages instantly with WebSocket support',
    },
    {
      icon: <PeopleIcon color='primary' />,
      title: 'User Management',
      description: 'See online status, typing indicators, and user profiles',
    },
    {
      icon: <WifiIcon color='primary' />,
      title: 'Connection Status',
      description: 'Always know your connection status with visual indicators',
    },
    {
      icon: <PhoneIcon color='primary' />,
      title: 'Voice & Video',
      description: 'Ready for voice and video calling features (coming soon)',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant='h3' component='h1' gutterBottom>
          Welcome to ChatApp
        </Typography>
        <Typography variant='h6' color='textSecondary' paragraph>
          A modern WhatsApp-like chat application built with React and
          Material-UI
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant='contained'
            size='large'
            startIcon={<ChatIcon />}
            onClick={() => navigate('/chat')}
            sx={{ mr: 2 }}
          >
            Start Chatting
          </Button>
          <Chip
            label='WebSocket Enabled'
            color='success'
            icon={<WifiIcon />}
            variant='outlined'
          />
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant='h6' gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card elevation={2}>
        <CardContent>
          <Typography variant='h5' gutterBottom>
            Chat Features
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h6' gutterBottom>
                Current Features
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <MessageIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Real-time messaging'
                    secondary='Send and receive messages instantly'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary='User status indicators'
                    secondary='Online, offline, and away status'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WifiIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Connection monitoring'
                    secondary='Real-time connection status updates'
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h6' gutterBottom>
                Coming Soon
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Voice calling'
                    secondary='High-quality voice calls'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VideocamIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary='Video calling'
                    secondary='Face-to-face conversations'
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MessageIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary='File sharing'
                    secondary='Share documents, images, and more'
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Landing;
