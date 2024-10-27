import React, {  ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Box, Modal as MuiModal, ModalProps as MuiModalProps, Typography } from '@mui/material';

interface CustomModalProps extends Omit<MuiModalProps, 'children'> {
  children: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ children, ...props }) => {
    const { title } = props;
    return ReactDOM.createPortal(
    <MuiModal {...props}>
      <Box
        sx={{

          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: "40%",
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" component="p" mb={2}>
          {title}
        </Typography>

        {children}
      </Box>
    </MuiModal>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default CustomModal;