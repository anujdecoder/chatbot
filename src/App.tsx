import React, { useState } from 'react';
import { Background } from './styles';
import Chatbot from './chatbot';
import { ThemeProvider } from '@emotion/react';
import themes from './utils/themes';
import { Fab } from '@mui/material';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import Login from './routes/Login';

const { darkTheme, lightTheme } = themes;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Background>
        <Login></Login>
        {/* <Chatbot /> */}
      </Background>
      <Fab
        onClick={() => setDarkMode(d => !d)}
        color="primary"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <DarkModeOutlined />
      </Fab>
    </ThemeProvider>
  );
};

export default App;
