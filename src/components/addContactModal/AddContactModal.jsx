import { Box, Modal, styled } from '@mui/material';
import ContactForm from 'components/ContactForm';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const AddContactModal = ({ open, handleClose }) => {
  return (
    <div>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ContactForm />
        </Box>
      </StyledModal>
    </div>
  );
};

export default AddContactModal;
