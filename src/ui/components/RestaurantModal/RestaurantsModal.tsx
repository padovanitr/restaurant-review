import { Box, Modal } from '@mui/material'
import { useState } from 'react'
import { ModalContainer } from './RestaurantModal.style'
import ReviewsSection from '../ReviewsSection'
import PlaceDescription from '../PlaceDescription'
import AddReview from '../AddReview'

export interface ModalProps {
  setOpenModal: (value: boolean) => void
  isModalOpen: boolean
  selectedRestaurantInfo?: google.maps.places.PlaceResult | null
}

function RestaurantModal({ setOpenModal, isModalOpen, selectedRestaurantInfo }: ModalProps) {
  const [isAddingReview, setIsAddingReview] = useState(false)
  console.log('isAddingReview', isAddingReview)

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
        {isAddingReview ? (
          <AddReview setIsAddingReview={setIsAddingReview} />
        ) : (
          <ReviewsSection
            setIsAddingReview={setIsAddingReview}
            selectedRestaurantInfo={selectedRestaurantInfo}
          />
        )}
      </ModalContainer>
    </Modal>
  )
}

export default RestaurantModal
