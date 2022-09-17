import { Box, Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import { ModalContainer, PlaceDescriptionWrapper } from './RestaurantModal.style'
import ReviewsSection from '../ReviewsSection'
import PlaceDescription from '../PlaceDescription'
import AddReview from '../AddReview'

export interface ModalProps {
  setOpenModal: (value: boolean) => void
  isModalOpen: boolean
  selectedRestaurantInfo?: google.maps.places.PlaceResult
}

export type NewReviewType = {
  author_name: string
  text: string
  rating: number
  language: string
  profile_photo_url: string
  relative_time_description: string
  time: number
}

function RestaurantModal({ setOpenModal, isModalOpen, selectedRestaurantInfo }: ModalProps) {
  const [isAddingReview, setIsAddingReview] = useState(false)
  const [updatedInfo, setUpdatedInfo] = useState<google.maps.places.PlaceResult | null>()

  const updateRestaurantReview = (newReview: NewReviewType) => {
    if (selectedRestaurantInfo) {
      const infoCopy = { ...selectedRestaurantInfo }
      const { reviews } = infoCopy
      if (reviews) {
        reviews.unshift(newReview)
        setUpdatedInfo(infoCopy)
        setIsAddingReview(false)
      }
    }
  }

  useEffect(() => {
    setUpdatedInfo(selectedRestaurantInfo)
  }, [selectedRestaurantInfo])

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <PlaceDescriptionWrapper>
          <PlaceDescription selectedRestaurantInfo={updatedInfo} />
        </PlaceDescriptionWrapper>
        {isAddingReview ? (
          <AddReview
            setIsAddingReview={setIsAddingReview}
            updateRestaurantReview={updateRestaurantReview}
          />
        ) : (
          <ReviewsSection
            setIsAddingReview={setIsAddingReview}
            selectedRestaurantInfo={updatedInfo}
          />
        )}
      </ModalContainer>
    </Modal>
  )
}

export default RestaurantModal
