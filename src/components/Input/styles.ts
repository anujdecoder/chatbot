import { TextField, styled } from '@mui/material';

export const StyledInput = styled(TextField)`
  .MuiInputBase-root {
    ${({ theme }) => ({
      borderRadius: theme.spacing(4),
      paddingLeft: theme.spacing(5),
    })}
  }
`;
