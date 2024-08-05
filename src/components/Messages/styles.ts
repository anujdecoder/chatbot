import { styled } from '@mui/material/styles';

export const SentContainer = styled('div')`
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => ({
    margin: theme.spacing(0, 0, 2),
  })}

  .message {
    ${({ theme }) => ({
      padding: theme.spacing(1.5, 2.5),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.spacing(4, 0, 4, 4),
      color: theme.palette.primary.contrastText,
      margin: 0,
    })}
  }
`;

export const ReceivedContainer = styled('div')`
  display: flex;

  .avatar {
    ${({ theme }) => ({ marginRight: theme.spacing(1) })}
  }

  .message {
    ${({ theme }) => ({
      padding: theme.spacing(1.5, 2.5),
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      borderRadius: theme.spacing(0, 4, 4),
    })}
  }
`;
