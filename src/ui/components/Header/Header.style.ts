import { styled, css, Box } from '@mui/material'

export const StyledHeader = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    box-shadow: ${theme.shadows[2]};
  `
)
