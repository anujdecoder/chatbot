import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ThemeProvider from './providers/ThemeProvider';
import AppProvider from './providers/AppProvider';
import { Background } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
        <Background>
          <App />
        </Background>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
