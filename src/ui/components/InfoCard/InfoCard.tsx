import { Typography } from '@mui/material'
import { StyledCard } from './InfoCard.style'

function InfoCard() {
  return (
    <StyledCard sx={{ borderRadius: '0.5rem' }}>
      <Typography>Restaurant Name</Typography>
    </StyledCard>
  )
}

export default InfoCard
