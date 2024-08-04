import { DarkModeOutlined } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react';
import { useDarkMode } from '../../providers/ThemeProvider';

const DarkMode: React.FC = () => {
  const setDarkMode = useDarkMode();
  return (
    <Fab
      onClick={() => setDarkMode((d: boolean) => !d)}
      color="primary"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
    >
      <DarkModeOutlined />
    </Fab>
  );
};

export default DarkMode;
