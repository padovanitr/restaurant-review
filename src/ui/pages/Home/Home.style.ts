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

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
    }
  `
)

export const MapWrapper = styled(Box)(
  ({ theme }) => css`
    flex: 1;
    display: 'flex';
    justify-content: 'center';

    ${theme.breakpoints.up('md')} {
      flex: 2;
    }
  `
)

export const ListWrapper = styled(Box)(
  ({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      flex: unset;
      padding: '10px 40px';
    }
  `
)
