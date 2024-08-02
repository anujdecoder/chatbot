import { Paper } from '@mui/material';
import React from 'react';
import Profile from '../components/Profile';
import { StyledPaper } from './styles';
import Received from '../components/Messages/Received';
import Sent from '../components/Messages/Sent';

interface Props {}

const Chatbot: React.FC<Props> = props => {
  return (
    <StyledPaper>
      <Profile />
      <Received />
      <Sent />
    </StyledPaper>
  );
};

export default Chatbot;
