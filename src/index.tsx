import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ThemeProvider from './providers/ThemeProvider';
import AppProvider from './providers/AppProvider';
import { Background } from './styles';
import QueryProvider from './providers/QueryProviders';
import DarkMode from './components/DarkMode';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <AppProvider>
          <Background>
            <App />
            <DarkMode />
          </Background>
        </AppProvider>
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
