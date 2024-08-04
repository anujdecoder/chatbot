import { ThemeProvider } from '@mui/material';
import React from 'react';
import themes from '../utils/themes';

interface Props {
  children?: React.ReactNode;
}

const DarkModeContext = React.createContext<any>({});

const { darkTheme, lightTheme } = themes;

const Provider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <DarkModeContext.Provider value={setDarkMode}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => React.useContext(DarkModeContext);

export default Provider;
