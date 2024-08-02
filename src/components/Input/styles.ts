import { TextField, styled } from '@mui/material';

export const StyledInput = styled(TextField)`
  ${({ theme }) => ({
    margin: theme.spacing(4, 0),
  })}

  .MuiInputBase-root {
    ${({ theme }) => ({
      borderRadius: theme.spacing(4),
      paddingLeft: theme.spacing(5),
    })}
  }
`;
