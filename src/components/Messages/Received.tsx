import React from 'react';
import AvaAvatar from '../AvaAvatar';
import { ReceivedContainer } from './styles';
import { Typography } from '@mui/material';

interface Props {
  message?: string;
}

const Received: React.FC<Props> = ({ message = ' Hey Anuj! How are you?' }) => (
  <ReceivedContainer>
    <AvaAvatar className="avatar" />
    <Typography variant="body2" paragraph className="message">
      {message}
    </Typography>
  </ReceivedContainer>
);

export default Received;
