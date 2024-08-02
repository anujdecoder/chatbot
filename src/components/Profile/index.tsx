import React from 'react';
import Paper from '@mui/material/Paper';
import { Theme, Typography } from '@mui/material';
import AvaAvatar from '../AvaAvatar';
import { ProfileContainer } from './styles';
import { useTheme } from '@emotion/react';

interface Props {}

const Profile: React.FC<Props> = props => {
  return (
    <ProfileContainer>
      <AvaAvatar
        sx={{
          width: 72,
          height: 72,
        }}
      />
      <Typography variant="h6">Hey👋, I'm Ava</Typography>
      <Typography variant="body2" color="grey">
        Ask me anything or pick a place to start
      </Typography>
    </ProfileContainer>
  );
};

export default Profile;
