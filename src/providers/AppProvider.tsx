import React, { createContext, FC, useEffect, useState } from 'react';
import FirebaseAuthService from '../services/FirebaseAuthService';
import { User } from 'firebase/auth';

type AppContextType = {
  isLoading?: boolean;
  isLoggedIn?: boolean;
  user?: User | null;
  headers?: any;
};

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppContext = createContext<AppContextType>({});

const getHeaders = (user: User | null) => {
  if (user) {
    const obj = user.toJSON() as any;
    return {
      'x-token': obj['stsTokenManager']['accessToken'],
      'x-user-id': obj['uid'],
      'Content-Type': 'application/json',
    };
  }

  return null;
};

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
        headers: getHeaders(user),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext<AppContextType>(AppContext);

export default AppProvider;
