import { styled, css, Box } from '@mui/material'
import { restaurantReviewColors } from '../../../utils/colors'

export const Container = styled(Box)(
  ({ theme }) => css`
    background-color: ${restaurantReviewColors.whiteSmoke};
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-items: center;
    gap: 0;
    flex-direction: column;

    ${theme.breakpoints.up('lg')} {
      flex-direction: row;
    }
  `
)
