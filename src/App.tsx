/* eslint-disable complexity */
import React from 'react';
import Login from './containers/login';
import { useApp } from './providers/AppProvider';
import Loading from './components/Loading';
import Chatbot from './containers/chatbot';

const App: React.FC = () => {
  const { isLoading, isLoggedIn } = useApp();
  if (isLoading) {
    return <Loading />;
  }
  if (!isLoggedIn) {
    return <Login />;
  }
  return <Chatbot />;
};

export default App;
