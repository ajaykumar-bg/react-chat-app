import { createTheme } from '@mui/material/styles';

const themeConfigs = {
  light: {
    palette: {
      mode: 'light',
    },
    scrollbar: {
      track: '#f1f1f1',
      thumb: '#c1c1c1',
      thumbHover: '#a8a8a8',
      thumbActive: '#888888',
      bodyTrack: '#f7fafc',
      bodyThumb: '#cbd5e0',
      bodyThumbHover: '#a0aec0',
    },
  },
  dark: {
    palette: {
      mode: 'dark',
    },
    scrollbar: {
      track: '#2d3748',
      thumb: '#4a5568',
      thumbHover: '#718096',
      thumbActive: '#9ca3af',
      bodyTrack: '#1a202c',
      bodyThumb: '#4a5568',
      bodyThumbHover: '#718096',
    },
  },
  whatsapp: {
    palette: {
      mode: 'light',
      primary: {
        main: '#25D366',
        light: '#4FE688',
        dark: '#1DA851',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#128C7E',
        light: '#34A5A0',
        dark: '#0C5D56',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#F7F8FA',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#111B21',
        secondary: '#667781',
      },
      action: {
        hover: 'rgba(37, 211, 102, 0.04)',
        selected: 'rgba(37, 211, 102, 0.08)',
      },
      divider: '#E9EDEF',
    },
    scrollbar: {
      track: '#f0f2f5',
      thumb: '#25D366',
      thumbHover: '#1DA851',
      thumbActive: '#128C7E',
      bodyTrack: '#f7f8fa',
      bodyThumb: '#25D366',
      bodyThumbHover: '#1DA851',
    },
  },
};

const getScrollbarStyles = (config) => ({
  '*': {
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: config.track,
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: config.thumb,
      borderRadius: '4px',
      border: `1px solid ${config.track}`,
      '&:hover': {
        backgroundColor: config.thumbHover,
      },
      '&:active': {
        backgroundColor: config.thumbActive,
      },
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: config.track,
    },
    scrollbarWidth: 'thin',
    scrollbarColor: `${config.thumb} ${config.track}`,
  },
  body: {
    '&::-webkit-scrollbar': {
      width: '12px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: config.bodyTrack,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: config.bodyThumb,
      borderRadius: '6px',
      border: `2px solid ${config.bodyTrack}`,
      '&:hover': {
        backgroundColor: config.bodyThumbHover,
      },
    },
  },
});

export const getTheme = (mode) => {
  const config = themeConfigs[mode] || themeConfigs.light;

  return createTheme({
    palette: config.palette,
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
      h2: {
        fontWeight: 700,
        fontSize: '1.5rem',
      },
      h4: {
        fontWeight: 500,
        fontSize: '1.1rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1rem',
      },
      h6: {
        fontWeight: 500,
        fontSize: '0.95rem',
      },
      subtitle1: {
        fontSize: '0.95rem',
      },
      subtitle2: {
        fontSize: '0.85rem',
      },
      body1: {
        fontSize: '0.95rem',
      },
      body2: {
        fontSize: '0.85rem',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: getScrollbarStyles(config.scrollbar),
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 5,
            padding: '0.75rem',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            '& > .MuiGrid-item': {
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            },
          },
        },
      },
    },
  });
};
