import { Box, Typography } from '@mui/material'
import { restaurantReviewColors } from '../../../utils/colors'
import { GoogleRestaurantsType } from '../../pages/Home/Home.utils'
import InfoCard from '../InfoCard'

interface MapContainerProps {
  googleRestaurants: Array<GoogleRestaurantsType>
}

function List({ googleRestaurants }: MapContainerProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: '1.5rem', color: restaurantReviewColors.darkGrey }}>
          Restaurants
        </Typography>
        <Typography>{googleRestaurants.length} results</Typography>
      </Box>
      {googleRestaurants &&
        googleRestaurants.map((restaurant) => <InfoCard key={restaurant.place_id} />)}
    </Box>
  )
}

export default List
