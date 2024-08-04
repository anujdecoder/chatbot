import { IconButton, InputAdornment } from '@mui/material';
import React from 'react';
import Send from '@mui/icons-material/SendOutlined';
import { StyledInput } from './styles';

interface Props {
  onSend?: () => void;
}

const Input: React.FC<Props> = () => (
  <StyledInput
    variant="outlined"
    placeholder="Your question"
    multiline
    fullWidth
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <Send />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export default Input;
