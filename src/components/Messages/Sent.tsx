import React from 'react';
import { SentContainer } from './styles';
import { Typography } from '@mui/material';

interface Props {}

const Sent: React.FC<Props> = props => {
  return (
    <SentContainer>
      <Typography variant="body2" paragraph className="message">
        Hey Ava! thanks for responding
      </Typography>
    </SentContainer>
  );
};

export default Sent;
