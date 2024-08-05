import { LogoutOutlined } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react';
import FirebaseAuthService from '../../services/FirebaseAuthService';

const Logout: React.FC = () => {
  const { logoutUser } = FirebaseAuthService;
  return (
    <Fab onClick={logoutUser} color="primary" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <LogoutOutlined />
    </Fab>
  );
};

export default Logout;
