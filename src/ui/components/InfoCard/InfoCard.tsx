import { Box, Typography } from '@mui/material'
import StarRatings from 'react-star-ratings'
import { restaurantReviewColors } from '../../../utils/colors'
import { GoogleRestaurantsType } from '../../pages/Home/Home.utils'
import { StyledCard } from './InfoCard.style'

interface InfoCardProps {
  restaurantInfo: GoogleRestaurantsType
}

function InfoCard({ restaurantInfo }: InfoCardProps) {
  return (
    <StyledCard sx={{ borderRadius: '0.3rem' }}>
      <Typography variant="body2">{restaurantInfo.name}</Typography>
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
  )
}

export default InfoCard
