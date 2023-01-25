import { Box, Button } from "@mui/material";
import { useState } from "react";

import EventRegistrationModal from "../EventRegistrationModal";
import PageTitleBlock from "../PageTitleBlock";

const SingleEventPage = ({ image, description, title }) => {
    const [open, setOpen] = useState(false);

    const toggleModal = () => setOpen(prev => !prev);

    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
            }}
        >
            <Box sx={{ flexShrink: 1 }}>
                <Box
                    component="img"
                    alt={title}
                    src={image}
                    sx={{ width: "100%", aspectRatio: "3/2" }}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    alignItems: "center",
                }}
            >
                <PageTitleBlock title={title} description={description} />

                <Button onClick={toggleModal} variant="contained">
                    register on event
                </Button>

                <EventRegistrationModal open={open} toggleModal={toggleModal} />
            </Box>
        </Box>
    );
};
export default SingleEventPage;
