import { Box, Button, Typography } from '@mui/material'
import StarRatings from 'react-star-ratings'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Dispatch, SetStateAction } from 'react'
import { restaurantReviewColors } from '../../../utils/colors'
import { GoogleRestaurantsType } from '../../pages/Home/Home.utils'
import { StyledCard } from './InfoCard.style'

interface InfoCardProps {
  restaurantInfo: GoogleRestaurantsType
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setSelectedRestaurantInfo: Dispatch<SetStateAction<GoogleRestaurantsType | undefined>>
}

function InfoCard({ restaurantInfo, setModalOpen, setSelectedRestaurantInfo }: InfoCardProps) {
  const handleOpenModal = () => {
    setModalOpen(true)
    setSelectedRestaurantInfo(restaurantInfo)
  }

  return (
    <Button onClick={handleOpenModal}>
      <StyledCard sx={{ borderRadius: '0.3rem' }}>
        <Typography
          sx={{ fontSize: '1rem', fontWeight: 700, lineHeight: '1.2rem', textAlign: 'center' }}
        >
          {restaurantInfo.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnIcon color="primary" sx={{ fontSize: 20 }} />
          <Typography variant="subtitle1" sx={{ lineHeight: '1.2rem' }}>
            {restaurantInfo.vicinity}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <StarRatings
            rating={restaurantInfo.rating}
            starDimension="20px"
            starSpacing="6px"
            starRatedColor={restaurantReviewColors.starYellow}
          />
          <Typography mb="0.5rem">
            {restaurantInfo.user_ratings_total ? `(${restaurantInfo.user_ratings_total})` : `(0)`}
          </Typography>
        </Box>
      </StyledCard>
    </Button>
  )
}

export default InfoCard
