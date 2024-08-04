import React from 'react';
import Input from '../../components/Input';
import { useCreateMutation } from './data';
import { Alert, Snackbar, SnackbarCloseReason, Typography } from '@mui/material';

const Textbox: React.FC = () => {
  const { execute, loading, error } = useCreateMutation();
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
    <>
      <Input onSave={execute} loading={loading} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error" variant="filled" onClose={handleClose}>
          <Typography>Unable to send message. Something went wrong!</Typography>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Textbox;
