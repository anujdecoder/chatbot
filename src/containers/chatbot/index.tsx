import { Paper } from '@mui/material';
import React from 'react';
import Profile from '../../components/Profile';
import { StyledPaper } from './styles';
import Received from '../../components/Messages/Received';
import Sent from '../../components/Messages/Sent';
import Input from '../../components/Input';

interface Props {}

const Chatbot: React.FC<Props> = props => {
  return (
    <StyledPaper>
      <Profile />
      <Received />
      <Sent />
      <Input />
    </StyledPaper>
  );
};

export default Chatbot;
