import { Box, Modal, Typography, Link } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import { ModalContainer } from './RestaurantModal.style'

export interface ModalProps {
  setOpenModal: (value: boolean) => void
  isModalOpen: boolean
  selectedRestaurantInfo?: google.maps.places.PlaceResult | null
}

function RestaurantModal({ setOpenModal, isModalOpen, selectedRestaurantInfo }: ModalProps) {
  console.log('selectedRestaurantInfo in modal', selectedRestaurantInfo)

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <Box display="flex" gap="30px">
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
            <Box
              sx={{ display: 'flex', alignItems: 'baseline', flexDirection: 'column', gap: '15px' }}
            >
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
                      <Typography sx={{ textAlign: 'center', fontSize: 15 }}>
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
        </Box>
      </ModalContainer>
    </Modal>
  )
}

export default RestaurantModal
