import { css, styled, TextField } from '@mui/material'
import { restaurantReviewColors } from '../../../utils/colors'

export const StyledTextField = styled(TextField)(
  ({ theme }) => css`
    width: 100%;

    & > div {
      background-color: ${restaurantReviewColors.mainRed};

      & > .MuiGrid-root {
        margin-right: 0;

        & > svg:first-of-type {
          width: 20px;
          margin-right: 0;
        }

        & > svg:last-of-type {
          display: none;
        }
      }
    }

    & #iconAccent {
      fill: ${theme.palette.secondary.main};
    }

    & input {
      color: ${restaurantReviewColors.white};
      font-size: 1rem;
      width: 100%;
      padding: ${theme.spacing(1.75, 1.75, 1.75, 0)};
      height: 20px;
    }

    & fieldset {
      border: none;
    }
    .MuiOutlinedInput-root {
      border-radius: 12px;
    }
  `
)
