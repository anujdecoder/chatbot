import { Avatar, AvatarProps } from '@mui/material';
import React from 'react';

interface Props extends AvatarProps {}

const AvaAvatar: React.FC<Props> = props => {
  const url = process.env.PUBLIC_URL + '/ava.png';
  console.log(url);
  return <Avatar {...props} alt="Ava" src={url} />;
};

export default AvaAvatar;
