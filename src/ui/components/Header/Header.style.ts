import { styled, css, Box, SvgIcon } from '@mui/material'

export const StyledHeader = styled(Box)(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
    box-shadow: ${theme.shadows[1]};
    padding-top: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(2)};
    padding-right: ${theme.spacing(4)};
    padding-left: ${theme.spacing(4)};
  `
)

export const LogoSvg = styled(SvgIcon)(
  ({ theme }) => css`
    height: 50px;
    width: 50px;
  `
)
