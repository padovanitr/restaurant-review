import { Box, Typography } from '@mui/material'
import StarRatings from 'react-star-ratings'
import { restaurantReviewColors } from '../../../utils/colors'
import { ReviewsContainer, ReviewsSectionContainer } from './ReviewSection.style'

export interface ReviewsSectionProps {
  selectedRestaurantInfo?: google.maps.places.PlaceResult | null
}

function ReviewsSection({ selectedRestaurantInfo }: ReviewsSectionProps) {
  return (
    <ReviewsSectionContainer>
      <Typography>Reviews</Typography>
      <ReviewsContainer>
        {selectedRestaurantInfo &&
          typeof selectedRestaurantInfo.reviews !== 'undefined' &&
          selectedRestaurantInfo?.reviews.map((review) => (
            <Box key={review.time} sx={{ borderBottom: '1px solid #cccccc', padding: '10px 0' }}>
              <Typography>{review.text}</Typography>
              <StarRatings
                rating={review.rating}
                starDimension="20px"
                starSpacing="6px"
                starRatedColor={restaurantReviewColors.starYellow}
              />
              <Typography>{review.author_name}</Typography>
            </Box>
          ))}
      </ReviewsContainer>
    </ReviewsSectionContainer>
  )
}

export default ReviewsSection
