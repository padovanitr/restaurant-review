import { styled, css, Card } from '@mui/material'

export const StyledCard = styled(Card)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing(2)};
    flex-direction: column;

    height: 200px;
    width: 350px;
  `
)
