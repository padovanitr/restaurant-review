import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { CircularProgress, Grid, ThemeProvider } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100vh' }}
          >
            <CircularProgress />
          </Grid>
        }
      >
        <ErrorBoundary fallback={<h1>There was an error.</h1>}>
          <App />
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
)
