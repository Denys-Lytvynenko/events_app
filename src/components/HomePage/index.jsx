import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

import { linkStyle } from "../../../styles/style";

const HomePage = ({ data }) => (
    <div>
        <Box
            sx={{
                bgcolor: "background.paper",
                pt: 8,
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
                    Choose your event
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    Discover and select event you want to visit and send you
                    email for registration.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <NextLink href="/events" style={linkStyle}>
                        <Button variant="contained">Go to events</Button>
                    </NextLink>
                </Stack>
            </Container>
        </Box>

        {data.map(({ id, title, description, image }) => (
            <NextLink href={`/events/${id}`} key={id}>
                <div>
                    <Image src={image} alt={title} width={500} height={300} />
                </div>

                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </NextLink>
        ))}
    </div>
);

export default HomePage;
