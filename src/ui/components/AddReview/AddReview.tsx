import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { AddReviewsContainer, AddReviewsSectionContainer } from './AddReview.style'

export interface AddReviewProps {
  setIsAddingReview: (value: boolean) => void
}

export const reviewInitialValues = {
  name: '',
  review: '',
}

export interface reviewInitialValuesType {
  name: string
  review: string
}

function AddReview({ setIsAddingReview }: AddReviewProps) {
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: reviewInitialValues,
    onSubmit: (formValues: reviewInitialValuesType) => {
      console.log('values', formValues)
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
              />
            </Grid>
            <Grid container item xs={12} sx={{ flexDirection: 'column' }}>
              <TextField
                onChange={handleChange}
                value={values.review}
                id="review"
                name="review"
                label="review"
              />
            </Grid>

            <Button type="submit">Send</Button>
          </Grid>
        </form>
      </AddReviewsContainer>
    </AddReviewsSectionContainer>
  )
}

export default AddReview
