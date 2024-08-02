import { Avatar, AvatarProps } from '@mui/material';
import React from 'react';

interface Props extends AvatarProps {}

const AvaAvatar: React.FC<Props> = props => {
  return (
    <Avatar
      {...props}
      alt="Ava"
      src="https://firebasestorage.googleapis.com/v0/b/chatbot-cba50.appspot.com/o/ava.png?alt=media&token=3b1ea68c-939b-4307-b79c-dbf48b854002"
    />
  );
};

export default AvaAvatar;
