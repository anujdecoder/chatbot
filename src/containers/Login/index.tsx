import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import LoginContainer, { StyledLoginButton } from './styles';
import FirebaseAuthService from '../../services/FirebaseAuthService';

const { loginUser } = FirebaseAuthService;

const Login: React.FC = () => (
  <LoginContainer>
    <Paper>
      <Box my={8} mx={5}>
        <Box my={3}>
          <Typography variant="h4" color="primary" align="center">
            Automate Your Outbound With
          </Typography>
          <Typography variant="h4" color="primary" align="center">
            an All-In-One, AI-First Platform
          </Typography>
        </Box>
        <Box my={2} mx={1}>
          <Typography variant="h6" fontWeight={500}>
            Equip your team with the best-in-class outbound tools and our AI BDR Ava, who automates
            your entire outbound workflow.
          </Typography>
        </Box>

        <Box mt={8}>
          <Typography variant="subtitle1">{"Let's get started!"}</Typography>
          <StyledLoginButton variant="contained" onClick={loginUser}>
            <Google />
            <Typography variant="h6">Login with Google</Typography>
          </StyledLoginButton>
        </Box>
      </Box>
    </Paper>
  </LoginContainer>
);

export default Login;
