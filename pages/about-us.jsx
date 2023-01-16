import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";

const AboutUs = () => (
    <>
        <Head>
            <title>About us</title>
        </Head>

        <Box
            sx={{
                bgcolor: "background.paper",
                pt: 6,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    About us
                </Typography>

                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    orem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                    perspiciatis ea blanditiis explicabo nobis esse corporis
                    voluptatum architecto est corrupti? Voluptate debitis
                    repellendus dolorum, harum unde vel aut exercitationem
                    explicabo!
                </Typography>
            </Container>
        </Box>
    </>
);

export default AboutUs;
