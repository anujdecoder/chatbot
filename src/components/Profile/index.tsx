import React from 'react';

import { Typography, useTheme } from '@mui/material';
import AvaAvatar from '../AvaAvatar';
import { ProfileContainer } from './styles';

const Profile: React.FC = () => {
  const theme = useTheme();
  return (
    <ProfileContainer className="profile-container">
      <AvaAvatar
        className="ava-avatar"
        sx={{
          width: theme.spacing(9),
          height: theme.spacing(9),
        }}
      />
      <Typography variant="subtitle1" fontWeight="">
        {"Hey👋, I'm Ava"}
      </Typography>
      <Typography variant="body2">Ask me anything or pick a place to start</Typography>
    </ProfileContainer>
  );
};

export default Profile;
