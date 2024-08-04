import React from 'react';
import Profile from '../../components/Profile';
import { ChatContainer, StyledPaper } from './styles';

import Input from '../../components/Input';
import List from './List';

interface Props {
  hello?: string;
}

const Chatbot: React.FC<Props> = () => (
  <ChatContainer>
    <StyledPaper>
      <Profile />
      <List />
      <Input />
    </StyledPaper>
  </ChatContainer>
);

export default Chatbot;
