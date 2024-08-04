import React, { createContext, FC, useEffect, useState } from 'react';
import FirebaseAuthService from '../services/FirebaseAuthService';
import { getIdTokenResult, User } from 'firebase/auth';
import Loading from '../components/Loading';

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

export const useApp = () => {
  return React.useContext<AppContextType>(AppContext);
};

export default AppProvider;
