import React from 'react';
import AvaAvatar from '../AvaAvatar';
import { ReceivedContainer } from './styles';
import { Typography } from '@mui/material';

interface Props {}

const Received: React.FC<Props> = props => {
  return (
    <ReceivedContainer>
      <AvaAvatar className="avatar" />
      <Typography variant="body2" paragraph className="message">
        Hey Anuj! How are you?
      </Typography>
    </ReceivedContainer>
  );
};

export default Received;
