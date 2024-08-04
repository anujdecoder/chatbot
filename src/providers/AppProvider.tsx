import React, { createContext, FC, useEffect, useState } from 'react';
import FirebaseAuthService from '../services/FirebaseAuthService';
import { User } from 'firebase/auth';

type AppContextType = {
  isLoading?: boolean;
  isLoggedIn?: boolean;
  user?: User | null;
};

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppContext = createContext<AppContextType>({});

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FirebaseAuthService.subscribeToAuthChanges((userInput: User | null) => {
      setUser(userInput);
      setIsLoading(false);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext<AppContextType>(AppContext);

export default AppProvider;
