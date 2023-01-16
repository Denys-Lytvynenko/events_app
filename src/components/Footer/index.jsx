import { Box, Typography, Divider, Container } from "@mui/material";

import Copyright from "../Copyright";

const Footer = () => (
    <>
        <Divider />

        <Box
            sx={{
                bgcolor: "background.paper",
                p: 2,
                display: "flex",
                justifyContent: "center",
            }}
            component="footer"
        >
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
                maxWidth="lg"
            >
                <Typography variant="h6" align="center" gutterBottom>
                    Events app
                </Typography>

                <Copyright />
            </Container>
        </Box>
    </>
);

export default Footer;
