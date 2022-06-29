import { styled, css, Box } from '@mui/material'

export const StyledHeader = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    z-index: 1;
    box-shadow: ${theme.shadows[1]};
  `
)
