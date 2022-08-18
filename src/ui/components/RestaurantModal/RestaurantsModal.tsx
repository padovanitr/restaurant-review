import { Box, Modal } from '@mui/material'
import { ModalContainer } from './RestaurantModal.style'
import ReviewsSection from '../ReviewsSection'
import PlaceDescription from '../PlaceDescription'

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
          <PlaceDescription selectedRestaurantInfo={selectedRestaurantInfo} />
        </Box>
        <Box>
          <ReviewsSection selectedRestaurantInfo={selectedRestaurantInfo} />
        </Box>
      </ModalContainer>
    </Modal>
  )
}

export default RestaurantModal
