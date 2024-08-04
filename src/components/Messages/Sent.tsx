import React from 'react';
import { SentContainer } from './styles';
import { Typography } from '@mui/material';
import { Message } from '../../types/messages';

interface Props {
  message: Message;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Sent: React.FC<Props> = ({ message }) => (
  <SentContainer>
    <Typography variant="body2" paragraph className="message">
      {message.body}
    </Typography>
  </SentContainer>
);

export default Sent;
