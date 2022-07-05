import { createTheme, responsiveFontSizes } from '@mui/material'
import type { Shadows } from '@mui/material/styles/shadows'
import { restaurantReviewColors } from './utils/colors'

const shadows = Array(25).fill('') as Shadows
shadows[1] = '0px 0px 8px rgba(46, 49, 146, 0.15)'
shadows[2] = '0px 4px 20px rgba(46, 49, 146, 0.18)'

const baseTheme = createTheme({
  breakpoints: {
    values: {
      // these are the min-width a view-port activates
      xs: 0,
      sm: 414,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: restaurantReviewColors.mainRed,
    },
    secondary: {
      main: restaurantReviewColors.lightGray,
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFF',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: 'border-radius: 32px',
      },
    },
  },
  typography: {
    h3: {
      fontSize: '2rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    body1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 0.75,
      fontStyle: 'normal',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.2,
      fontStyle: 'normal',
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows,
})

export default responsiveFontSizes(baseTheme)
