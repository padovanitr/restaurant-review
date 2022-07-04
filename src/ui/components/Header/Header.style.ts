import { styled, css, Box, SvgIcon } from '@mui/material'

export const StyledHeader = styled(Box)(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
    box-shadow: ${theme.shadows[1]};
  `
)

export const LogoSvg = styled(SvgIcon)(
  ({ theme }) => css`
    height: 40px;
    width: 80px;
  `
)
