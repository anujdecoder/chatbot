import React from 'react';
import { ListLoaderContainer } from './styles';
import { Box, Skeleton, useTheme } from '@mui/material';

const Sent = () => {
  const theme = useTheme();
  return (
    <Box display="flex" my={2}>
      <Skeleton variant="circular" width={theme.spacing(5)} height={theme.spacing(5)} />
      <Box px={theme.spacing(1)}></Box>
      <Skeleton variant="rounded" width={theme.spacing(25)} height={theme.spacing(5)} />
    </Box>
  );
};

const Received = () => {
  const theme = useTheme();
  return (
    <Box display="flex" my={2} justifyContent="flex-end">
      <Skeleton variant="rounded" width={theme.spacing(25)} height={theme.spacing(5)} />
      <Box px={theme.spacing(1)}></Box>
      <Skeleton variant="circular" width={theme.spacing(5)} height={theme.spacing(5)} />
    </Box>
  );
};

const ListLoader: React.FC = () => (
  <ListLoaderContainer className="messages">
    <Sent />
    <Received />
    <Sent />
    <Received />
  </ListLoaderContainer>
);

export default ListLoader;
