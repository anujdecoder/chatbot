import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const QueryProvider: React.FC<Props> = ({ children }) => {
  const queryClient = React.useRef(new QueryClient({}));
  return <QueryClientProvider client={queryClient.current}>{children}</QueryClientProvider>;
};

export default QueryProvider;
