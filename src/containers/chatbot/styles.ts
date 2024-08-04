import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)`
  padding: 24px 32px;
  height: 100%;
`;

export const ChatContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  .MuiPaper-root {
    width: 720px;
    text-align: center;
  }

  .messages {
    height: calc(100% - 232px);
    ${({ theme }) => ({ padding: theme.spacing(3, 2, 1) })}
  }
`;

export const ListLoaderContainer = styled('div')`
  ${({ theme }) => ({ padding: theme.spacing(1, 0) })}
`;

export const ListContainer = styled('div')`
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
`;
