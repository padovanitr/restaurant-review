import { Box, Grid, Modal, Typography } from '@mui/material'
import { GoogleRestaurantsType } from '../../pages/Home/Home.utils'
import { ModalContainer } from './RestaurantModal.style'

export interface ModalProps {
  setOpenModal: (value: boolean) => void
  isModalOpen: boolean
  selectedRestaurantInfo?: GoogleRestaurantsType
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
        <Grid container display="flex" gap="10px">
          <img src={selectedRestaurantInfo?.photos[0].getUrl()} alt="" width="300" />
          <Box>
            <Typography sx={{ textAlign: 'center' }} variant="h5">
              {selectedRestaurantInfo?.name}
            </Typography>
            <Box display="flex" gap="5px" sx={{ alignItems: 'center' }}>
              <Typography sx={{ textAlign: 'center', fontSize: 15 }}>
                {selectedRestaurantInfo?.vicinity}
              </Typography>
            </Box>
            <Box display="flex" gap="5px" sx={{ alignItems: 'center' }}>
              <Typography sx={{ textAlign: 'center' }}>
                {selectedRestaurantInfo?.website}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </ModalContainer>
    </Modal>
  )
}

export default RestaurantModal
