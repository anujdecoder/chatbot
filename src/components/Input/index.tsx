import { CircularProgress, IconButton, InputAdornment } from '@mui/material';
import React from 'react';
import Send from '@mui/icons-material/SendOutlined';
import { StyledInput } from './styles';

interface Props {
  onSave: (body: string) => void;
  loading?: boolean;
}

const Input: React.FC<Props> = ({ onSave, loading }) => {
  const [body, setBody] = React.useState('');
  const handleSave = () => {
    onSave(body);
    setBody('');
  };
  return (
    <StyledInput
      value={body}
      onChange={e => setBody(e.target.value)}
      variant="outlined"
      placeholder="Your question"
      multiline
      fullWidth
      disabled={loading}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSave} disabled={loading}>
              {loading ? <CircularProgress /> : <Send />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
