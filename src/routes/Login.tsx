import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebaseConfig from '../config/firebase';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import LoginContainer, { StyledLoginButton } from './styles';

const provider = new GoogleAuthProvider();
const { auth } = firebaseConfig;

const Login: React.FC = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({
          result,
        });
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
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
              Equip your team with the best-in-class outbound tools and our AI BDR Ava, who
              automates your entire outbound workflow.
            </Typography>
          </Box>

          <Box mt={8}>
            <Typography variant="subtitle1">Let's get started!</Typography>
            <StyledLoginButton variant="contained" onClick={handleLogin}>
              <Google />
              <Typography variant="h6">Login with Google</Typography>
            </StyledLoginButton>
          </Box>
        </Box>
      </Paper>
    </LoginContainer>
  );
};

export default Login;
