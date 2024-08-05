import React from 'react';
import { Alert, SnackbarCloseReason, Typography } from '@mui/material';
import { StyledSnackbar } from './styles';

interface Props {
  error?: any;
}

const ErrorSnackbar: React.FC<Props> = ({ error }) => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <StyledSnackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert severity="error" variant="filled" onClose={handleClose}>
        <Typography>Oops! Something went wrong.</Typography>
      </Alert>
    </StyledSnackbar>
  );
};

export default ErrorSnackbar;
