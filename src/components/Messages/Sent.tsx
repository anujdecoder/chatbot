import React from 'react';
import { SentContainer } from './styles';
import { Typography } from '@mui/material';

interface Props {
  message?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Sent: React.FC<Props> = ({ message = 'Hey Ava! thanks for responding' }) => (
  <SentContainer>
    <Typography variant="body2" paragraph className="message">
      {message}
    </Typography>
  </SentContainer>
);

export default Sent;
