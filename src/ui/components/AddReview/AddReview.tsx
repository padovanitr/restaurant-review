import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { NewReviewType } from '../RestaurantModal/RestaurantsModal'
import { AddReviewsContainer, AddReviewsSectionContainer } from './AddReview.style'

export interface AddReviewProps {
  setIsAddingReview: (value: boolean) => void
  updateRestaurantReview: (newReview: NewReviewType) => void
}

export const reviewInitialValues = {
  name: '',
  review: '',
  rating: '',
}

export interface reviewInitialValuesType {
  name: string
  review: string
  rating: string
}

const validationSchema = object({
  name: string().required(),
  review: string().required(),
  rating: string().required(),
})

function AddReview({ setIsAddingReview, updateRestaurantReview }: AddReviewProps) {
  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: reviewInitialValues,
    validationSchema,
    onSubmit: (formValues: reviewInitialValuesType) => {
      const { name, review, rating } = formValues
      const newReview = {
        author_name: name,
        text: review,
        rating: Number(rating),
        language: 'en-US',
        profile_photo_url: '',
        relative_time_description: '',
        time: Date.now(),
      }
      updateRestaurantReview(newReview)
    },
  })

  return (
    <AddReviewsSectionContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '1.125rem' }}>
          Add Review
        </Typography>
        <Button variant="outlined" onClick={() => setIsAddingReview(false)}>
          Cancel
        </Button>
      </Box>
      <AddReviewsContainer>
        <form onSubmit={handleSubmit}>
          <Grid container flexDirection="column" justifyContent="space-between" flexWrap="nowrap">
            <Grid mb="2rem">
              <Typography variant="body1" fontWeight={400}>
                Give your oppinion about this place
              </Typography>
            </Grid>

            <Grid container item xs={12} mb="1rem" sx={{ flexDirection: 'column' }}>
              <TextField
                onChange={handleChange}
                value={values.name}
                id="name"
                name="name"
                label="name"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                color="secondary"
              />
            </Grid>
            <Grid container item xs={12} mb="1rem" sx={{ flexDirection: 'column' }}>
              <TextField
                onChange={handleChange}
                value={values.review}
                id="review"
                name="review"
                label="review"
                error={touched.review && Boolean(errors.review)}
                helperText={touched.review && errors.review}
                color="secondary"
                multiline
                rows={4}
              />
            </Grid>
            <Grid container mb="1rem" item xs={12} sx={{ flexDirection: 'column' }}>
              <RadioGroup
                row
                aria-labelledby="rating"
                id="review"
                name="rating"
                onChange={handleChange}
              >
                <FormControlLabel labelPlacement="bottom" value="1" control={<Radio />} label="1" />
                <FormControlLabel labelPlacement="bottom" value="2" control={<Radio />} label="2" />
                <FormControlLabel labelPlacement="bottom" value="3" control={<Radio />} label="3" />
                <FormControlLabel labelPlacement="bottom" value="4" control={<Radio />} label="4" />
                <FormControlLabel labelPlacement="bottom" value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </Grid>

            <Button variant="contained" color="secondary" type="submit">
              Send
            </Button>
          </Grid>
        </form>
      </AddReviewsContainer>
    </AddReviewsSectionContainer>
  )
}

export default AddReview
