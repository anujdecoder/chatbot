import React from 'react';
import { Message } from '../../types/messages';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import ErrorSnackbar from '../../components/Snackbar';
import { useUpdateMutation } from './data';

interface UpdateBodyProps {
  message: Message;
  onUpdate: (messageId: string, newBody: string) => void;
  loading: boolean;
  onCancel: () => void;
}

const UpdateBody: React.FC<UpdateBodyProps> = ({ message, onUpdate, loading, onCancel }) => {
  const [value, setValue] = React.useState(message.body);

  return (
    <>
      <DialogTitle gutterBottom>Update message</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          rows={4}
          value={value}
          onChange={e => setValue(e.target.value)}
          variant="outlined"
          fullWidth
          disabled={loading}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCancel} disabled={loading}>
          <Typography>Cancel</Typography>
        </Button>
        <Button onClick={() => onUpdate(message.id, value)} disabled={loading} variant="contained">
          {loading ? <CircularProgress /> : <Typography>Update</Typography>}
        </Button>
      </DialogActions>
    </>
  );
};

interface Props extends Pick<UpdateBodyProps, 'message'> {
  clearSelection: () => void;
}

const UpdateMessage: React.FC<Props> = ({ message, clearSelection }) => {
  const { execute, error, loading } = useUpdateMutation(clearSelection);
  return (
    <>
      <Dialog maxWidth="xs" open={true} sx={{ '& .MuiDialog-paper': { width: '80%' } }}>
        <UpdateBody
          message={message}
          onCancel={clearSelection}
          onUpdate={execute}
          loading={loading}
        />
      </Dialog>
      <ErrorSnackbar error={error} />
    </>
  );
};

export default UpdateMessage;
