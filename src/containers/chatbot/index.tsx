import React from 'react';
import Profile from '../../components/Profile';
import { ChatContainer, StyledPaper } from './styles';

import List from './List';
import Textbox from './Textbox';

interface Props {
  hello?: string;
}

const Chatbot: React.FC<Props> = () => (
  <ChatContainer>
    <StyledPaper>
      <Profile />
      <List />
      <Textbox />
    </StyledPaper>
  </ChatContainer>
);

export default Chatbot;
