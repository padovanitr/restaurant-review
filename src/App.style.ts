import { Box } from '@mui/material'
import { css, styled } from '@mui/material/styles'

export const AppContainer = styled(Box)(
  ({ theme }) => css`
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    & *::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    & *::-webkit-scrollbar-thumb {
      opacity: 0.8;
      background-color: #d2d3d6;
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: ${theme.spacing(1)};
    }
  `
)
