import {
    Backdrop,
    Box,
    Container,
    Divider,
    Fade,
    Modal,
    Typography,
} from "@mui/material";
import React from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 300, md: 400 },
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 3,
    display: "flex",
    flexDirection: "column",
    gap: 2,
};

const ModalWrapper = ({ open, toggleModal, title, description, children }) => (
    <Modal
        open={open}
        onClose={toggleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
    >
        <Fade in={open}>
            <Box sx={style}>
                <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                >
                    {title}
                </Typography>

                {description && (
                    <Typography id="transition-modal-description">
                        {description}
                    </Typography>
                )}

                <Box>{children}</Box>
            </Box>
        </Fade>
    </Modal>
);

export default ModalWrapper;
