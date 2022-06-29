import { Typography } from '@mui/material'
import { GoogleRestaurantsType } from '../../pages/Home/Home.utils'
import { StyledCard } from './InfoCard.style'

interface InfoCardProps {
  restaurantInfo: GoogleRestaurantsType
}

function InfoCard({ restaurantInfo }: InfoCardProps) {
  return (
    <StyledCard sx={{ borderRadius: '0.3rem' }}>
      <Typography>{restaurantInfo.name}</Typography>
    </StyledCard>
  )
}

export default InfoCard
