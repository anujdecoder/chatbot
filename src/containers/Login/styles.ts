import { Button, styled } from '@mui/material';

const LoginContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .MuiPaper-root {
    width: 720px;
    text-align: center;
  }
`;

export const StyledLoginButton = styled(Button)`
  align-items: center;
  padding: 12px 20px;

  .MuiSvgIcon-root {
    font-size: 28px;
  }

  .MuiTypography-root {
    text-transform: none;
    ${({ theme }) => ({ padding: theme.spacing(0.25, 0, 0, 1) })}
  }
`;

export default LoginContainer;
