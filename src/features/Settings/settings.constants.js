import React from 'react';
import { LightMode, DarkMode, Chat } from '@mui/icons-material';

export const themeOptions = [
  {
    value: 'light',
    label: 'Light',
    description: 'Clean and bright interface',
    icon: <LightMode sx={{ color: '#FFA726' }} />,
  },
  {
    value: 'dark',
    label: 'Dark',
    description: 'Easy on the eyes, perfect for low-light environments',
    icon: <DarkMode sx={{ color: '#64B5F6' }} />,
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
    description: 'Classic WhatsApp green theme for familiar chat experience',
    icon: <Chat sx={{ color: '#25D366' }} />,
  },
];
