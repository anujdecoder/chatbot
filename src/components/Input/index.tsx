import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import Send from '@mui/icons-material/SendOutlined';
import { StyledInput } from './styles';

interface Props {}

const Input: React.FC<Props> = props => {
  return (
    <StyledInput
      variant="outlined"
      placeholder="Your question"
      multiline
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Send />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
