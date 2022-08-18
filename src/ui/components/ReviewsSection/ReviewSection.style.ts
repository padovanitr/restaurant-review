import { styled, css, Box } from '@mui/material'

export const ReviewsSectionContainer = styled(Box)(
  ({ theme }) => css`
    & *::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    & *::-webkit-scrollbar-thumb {
      opacity: 0.8;
      background-color: #d2d3d6;
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: ${theme.spacing(1)};
    }
  `
)

export const ReviewsContainer = styled(Box)(
  ({ theme }) => css`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-height: 300px;
    overflow: auto;

    & *::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    & *::-webkit-scrollbar-thumb {
      opacity: 0.8;
      background-color: #d2d3d6;
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: ${theme.spacing(1)};
    }
  `
)
