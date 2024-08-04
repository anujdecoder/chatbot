import { styled } from '@mui/material/styles';

export const ProfileContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => ({
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.divider,
    borderRadius: theme.spacing(1),
  })}

  .ava-avatar {
    margin-bottom: 16px;
  }
`;
