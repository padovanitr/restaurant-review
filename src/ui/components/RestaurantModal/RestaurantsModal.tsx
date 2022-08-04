import { Box, Modal } from '@mui/material'
import { ModalContainer } from './RestaurantModal.style'

export interface ModalProps {
  setOpenModal: (value: boolean) => void
  isModalOpen: boolean
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  borderRadius: '6px',
  boxShadow: 24,
  p: 4,
}

function RestaurantModal({ setOpenModal, isModalOpen }: ModalProps) {
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <h2>modal</h2>
      </ModalContainer>
    </Modal>
  )
}

export default RestaurantModal
