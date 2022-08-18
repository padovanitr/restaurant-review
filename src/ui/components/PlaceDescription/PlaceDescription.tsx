import { Box, Link, Typography } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'

export interface PlaceDescriptionProps {
  selectedRestaurantInfo?: google.maps.places.PlaceResult | null
}

function PlaceDescription({ selectedRestaurantInfo }: PlaceDescriptionProps) {
  return (
    <>
      <Box>
        {selectedRestaurantInfo && typeof selectedRestaurantInfo.photos !== 'undefined' && (
          <img
            src={selectedRestaurantInfo.photos[0].getUrl()}
            alt={selectedRestaurantInfo?.name}
            width="200"
          />
        )}
      </Box>
      <Box>
        <Typography sx={{ textAlign: 'center', marginBottom: '20px' }} variant="h5">
          {selectedRestaurantInfo?.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', flexDirection: 'column', gap: '15px' }}>
          <Box display="flex" gap="5px" sx={{ alignItems: 'center' }}>
            <LocationOnIcon color="primary" sx={{ fontSize: 20 }} />
            <Typography sx={{ textAlign: 'center', fontSize: 15 }}>
              {selectedRestaurantInfo?.vicinity}
            </Typography>
          </Box>
          <Box display="flex" gap="5px" sx={{ alignItems: 'center' }}>
            {selectedRestaurantInfo?.website && (
              <>
                <PublicIcon color="primary" sx={{ fontSize: 20 }} />
                <Link
                  target="_blank"
                  href={selectedRestaurantInfo?.website}
                  sx={{ textDecoration: 'none', color: '#000000' }}
                >
                  <Typography sx={{ textAlign: 'left', fontSize: 15 }}>
                    {selectedRestaurantInfo?.website}
                  </Typography>
                </Link>
              </>
            )}
          </Box>
          <Box display="flex" gap="5px" sx={{ alignItems: 'center' }}>
            <AccessTimeFilledIcon color="primary" sx={{ fontSize: 20 }} />
            {selectedRestaurantInfo &&
              typeof selectedRestaurantInfo?.opening_hours?.weekday_text !== 'undefined' && (
                <Box display="flex" sx={{ flexDirection: 'column', gap: '10px' }}>
                  {selectedRestaurantInfo?.opening_hours.weekday_text.map((day) => (
                    <Typography key={day} sx={{ textAlign: 'center', fontSize: 15 }}>
                      {day}
                    </Typography>
                  ))}
                </Box>
              )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PlaceDescription
