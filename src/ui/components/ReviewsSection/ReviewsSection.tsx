import { Box, Button, Typography } from '@mui/material'
import StarRatings from 'react-star-ratings'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { restaurantReviewColors } from '../../../utils/colors'
import { ReviewsContainer, ReviewsSectionContainer } from './ReviewSection.style'

export interface ReviewsSectionProps {
  selectedRestaurantInfo?: google.maps.places.PlaceResult | null
  setIsAddingReview: (value: boolean) => void
}

function ReviewsSection({ selectedRestaurantInfo, setIsAddingReview }: ReviewsSectionProps) {
  return (
    <ReviewsSectionContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '1.125rem' }}>
          Reviews
        </Typography>
        <Button
          onClick={() => setIsAddingReview(true)}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
        >
          Add review
        </Button>
      </Box>
      <ReviewsContainer>
        {selectedRestaurantInfo &&
          typeof selectedRestaurantInfo.reviews !== 'undefined' &&
          selectedRestaurantInfo?.reviews.map((review) => (
            <Box key={review.time} sx={{ borderBottom: '1px solid #cccccc', padding: '5px 0' }}>
              <Typography variant="subtitle1" sx={{ paddingBottom: '0.7rem' }}>
                {review.text}
              </Typography>
              <StarRatings
                rating={review.rating}
                starDimension="20px"
                starSpacing="6px"
                starRatedColor={restaurantReviewColors.starYellow}
              />
              <Typography sx={{ fontSize: '0.8rem', py: '0.5rem' }}>
                {review.author_name}
              </Typography>
            </Box>
          ))}
      </ReviewsContainer>
    </ReviewsSectionContainer>
  )
}

export default ReviewsSection
