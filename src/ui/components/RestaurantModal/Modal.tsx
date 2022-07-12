import { Box, Modal } from '@mui/material'

export interface ModalProps {
  setOpenModal: (value: boolean) => void
  isModalOpen: boolean
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
      <Box sx={style}>
        <h2>modal</h2>
      </Box>
    </Modal>
  )
}

export default RestaurantModal
