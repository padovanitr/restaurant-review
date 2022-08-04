import { Box, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { restaurantReviewColors } from '../../../utils/colors'
import { GoogleRestaurantsType } from '../../pages/Home/Home.utils'
import InfoCard from '../InfoCard'

export interface RestaurantsListProps {
  googleRestaurants: Array<GoogleRestaurantsType>
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

function RestaurantsList({ googleRestaurants, setModalOpen }: RestaurantsListProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
        <Typography sx={{ fontSize: '1.5rem', color: restaurantReviewColors.darkGrey }}>
          Restaurants
        </Typography>
        <Typography>({googleRestaurants.length} results)</Typography>
      </Box>
      {googleRestaurants &&
        googleRestaurants.map((restaurant) => (
          <InfoCard
            setModalOpen={setModalOpen}
            key={restaurant.place_id}
            restaurantInfo={restaurant}
          />
        ))}
    </Box>
  )
}

export default RestaurantsList
