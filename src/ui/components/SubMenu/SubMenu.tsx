import { Box } from '@mui/material'

function SubMenu() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ flex: 1 }}>submenu</Box>
      <Box>search</Box>
    </Box>
  )
}

export default SubMenu
