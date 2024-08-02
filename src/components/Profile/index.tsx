import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography, useTheme } from '@mui/material';
import AvaAvatar from '../AvaAvatar';
import { ProfileContainer } from './styles';

interface Props {}

const Profile: React.FC<Props> = props => {
  const theme = useTheme();
  return (
    <ProfileContainer>
      <AvaAvatar
        className="ava-avatar"
        sx={{
          width: theme.spacing(9),
          height: theme.spacing(9),
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
