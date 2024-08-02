import React from 'react';
import Paper from '@mui/material/Paper';
import { Theme, Typography } from '@mui/material';
import AvaAvatar from '../AvaAvatar';
import { ProfileContainer } from './styles';

interface Props {}

const Profile: React.FC<Props> = props => {
  return (
    <ProfileContainer>
      <AvaAvatar
        className="ava-avatar"
        sx={{
          width: 72,
          height: 72,
        }}
      />
      <Typography variant="subtitle1" fontWeight="">
        Hey👋, I'm Ava
      </Typography>
      <Typography variant="body2" color="grey">
        Ask me anything or pick a place to start
      </Typography>
    </ProfileContainer>
  );
};

export default Profile;
