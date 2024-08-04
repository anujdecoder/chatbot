import { CircularProgress } from '@mui/material';
import React from 'react';
import { StyledContainer } from './styles';

const Loading: React.FC = () => (
  <StyledContainer>
    <CircularProgress size={80} />
  </StyledContainer>
);

export default Loading;
