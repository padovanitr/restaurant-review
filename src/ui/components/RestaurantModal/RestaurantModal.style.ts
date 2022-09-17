import { styled, css, Box } from '@mui/material'

export const ModalContainer = styled(Box)(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
    padding: ${theme.spacing(4)};
    outline: none;
    width: 90%;

    ${theme.breakpoints.up('md')} {
      width: unset;
    }
  `
)

export const PlaceDescriptionWrapper = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 30px;

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
    }
  `
)
