import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#eee',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default {
  lightTheme,
  darkTheme,
};
