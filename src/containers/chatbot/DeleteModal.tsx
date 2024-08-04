import React from 'react';
import { Message } from '../../types/messages';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

interface Props {
  message: Message;
  clearSelection: () => void;
}

const DeleteMessage: React.FC<Props> = ({ message, clearSelection }) => {
  const handleOk = () => {};
  return (
    <Dialog maxWidth="xs" open={true}>
      <DialogTitle>
        <Typography>Delete following message?</Typography>
      </DialogTitle>
      <DialogContent>{message.body}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={clearSelection}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteMessage;
