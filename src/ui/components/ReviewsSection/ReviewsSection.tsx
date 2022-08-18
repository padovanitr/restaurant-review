import { Box, Typography } from '@mui/material'
import StarRatings from 'react-star-ratings'
import { restaurantReviewColors } from '../../../utils/colors'

export interface ReviewsSectionProps {
  selectedRestaurantInfo?: google.maps.places.PlaceResult | null
}

function ReviewsSection({ selectedRestaurantInfo }: ReviewsSectionProps) {
  return (
    <>
      <Typography>Reviews</Typography>
      <Box sx={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
      </Box>
    </>
  )
}

export default ReviewsSection
