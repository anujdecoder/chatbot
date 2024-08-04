import React from 'react';
import AvaAvatar from '../AvaAvatar';
import { ReceivedContainer } from './styles';
import { Typography } from '@mui/material';
import { Message } from '../../types/messages';

interface Props {
  message: Message;
}

const Received: React.FC<Props> = ({ message }) => (
  <ReceivedContainer>
    <AvaAvatar className="avatar" />
    <Typography variant="body2" paragraph className="message">
      {message?.body}
    </Typography>
  </ReceivedContainer>
);

export default Received;
