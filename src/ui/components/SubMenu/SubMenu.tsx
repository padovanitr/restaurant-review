import { Box } from '@mui/material'
import { restaurantReviewColors } from '../../../utils/colors'

function SubMenu() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: restaurantReviewColors.mainRed,
      }}
    >
      <Box>search</Box>
    </Box>
  )
}

export default SubMenu
