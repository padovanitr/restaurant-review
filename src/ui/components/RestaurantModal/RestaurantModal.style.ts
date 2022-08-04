import { styled, css, Box } from '@mui/material'

export const ModalContainer = styled(Box)(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
    padding: ${theme.spacing(2)};
    outline: none;
  `
)
