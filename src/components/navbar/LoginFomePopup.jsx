import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoginForm from '../LoginForm'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "min(500px , 90%)",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "7px"
};


export default function LoginFormPopup({ loginPopup, setloginPopup }) {

    const handleClose = () => setloginPopup(false);
    return (
        <>
            <Modal
                open={loginPopup}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon sx={{ fontSize: "2rem" }} />
                        </IconButton>
                        <Typography sx={{ fontSize: "2rem" }}>
                            Sign In
                        </Typography>
                    </Box>
                    <LoginForm />
                </Box>
            </Modal>
        </>
    )
}
