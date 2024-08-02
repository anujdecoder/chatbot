import { Paper } from '@mui/material';
import React from 'react';
import Profile from '../components/Profile';
import { StyledPaper } from './styles';

interface Props {}

const Chatbot: React.FC<Props> = props => {
  return (
    <StyledPaper>
      <Profile />
    </StyledPaper>
  );
};

export default Chatbot;
