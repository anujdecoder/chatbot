import { styled } from '@mui/material/styles';

export const Background = styled('div')`
  height: 100vh;
  width: 100vw;
  ${({ theme }) => ({ backgroundColor: theme.palette.background.default })}
  padding: 24px 32px;
`;
