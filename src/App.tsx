import React from 'react';
import { Background } from './styles';
import Chatbot from './chatbot';
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Chatbot />
      </Background>
    </ThemeProvider>
  );
};

export default App;
