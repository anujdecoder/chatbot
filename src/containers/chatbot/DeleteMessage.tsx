import React from 'react';
import { Message } from '../../types/messages';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useDeleteMutation } from './data';
import ErrorSnackbar from '../../components/Snackbar';

interface Props {
  message: Message;
  clearSelection: () => void;
}

const DeleteMessage: React.FC<Props> = ({ message, clearSelection }) => {
  const { execute, error, loading } = useDeleteMutation(clearSelection);
  return (
    <>
      <Dialog maxWidth="xs" open={true} sx={{ '& .MuiDialog-paper': { width: '80%' } }}>
        <DialogTitle gutterBottom>Delete following message?</DialogTitle>
        <DialogContent>
          <Typography variant="body2">{message.body}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={clearSelection} disabled={loading}>
            <Typography>Cancel</Typography>
          </Button>
          <Button onClick={() => execute(message.id)} disabled={loading} variant="contained">
            {loading ? <CircularProgress /> : <Typography>Ok</Typography>}
          </Button>
        </DialogActions>
      </Dialog>
      <ErrorSnackbar error={error} />
    </>
  );
};

export default DeleteMessage;
