import React from 'react';
import { Alert, Snackbar, SnackbarCloseReason, Typography } from '@mui/material';

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
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="error" variant="filled" onClose={handleClose}>
        <Typography>Unable to send message. Something went wrong!</Typography>
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
