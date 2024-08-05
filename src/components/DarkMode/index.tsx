import { DarkModeOutlined } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react';
import { useDarkMode } from '../../providers/ThemeProvider';
import { setDarkModeValue } from '../../utils/darkMode';

const DarkMode: React.FC = () => {
  const setDarkMode = useDarkMode();
  return (
    <Fab
      onClick={() => setDarkMode((d: boolean) => setDarkModeValue(!d))}
      color="primary"
      sx={{ position: 'fixed', bottom: 16, left: 16 }}
    >
      <DarkModeOutlined />
    </Fab>
  );
};

export default DarkMode;
