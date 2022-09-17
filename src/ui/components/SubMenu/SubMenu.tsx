import { Box } from '@mui/material'
import { restaurantReviewColors } from '../../../utils/colors'
import SearchBar from '../SearchBar'

export interface SubMenuProps {
  setPlaceSearch: (e: string) => void
}

function SubMenu({ setPlaceSearch }: SubMenuProps) {
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
      <Box>
        <SearchBar
          setPlaceSearch={setPlaceSearch}
          name="searchRestaurant"
          placeholder="Search restaurant..."
          ariaLabel="search restaurant"
        />
      </Box>
    </Box>
  )
}

export default SubMenu
