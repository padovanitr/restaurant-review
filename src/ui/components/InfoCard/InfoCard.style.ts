import { styled, css, Card } from '@mui/material'

export const StyledCard = styled(Card)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding-bottom: ${theme.spacing(1)};

    height: 200px;
    width: 350px;
  `
)
