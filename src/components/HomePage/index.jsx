import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import { navigation } from "../../navigation";
import EventCard from "../EventCard/EventCard";

const HomePage = ({ data }) => (
    <>
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
                    <Button variant="contained" href={navigation.events.href}>
                        Go to events
                    </Button>
                </Stack>
            </Container>
        </Box>

        <Divider sx={{ mb: "48px" }} />

        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {data.map(({ id, title, description, image }) => (
                    <Grid xs={6} md={4} key={id} item>
                        <EventCard
                            href={`${navigation.events.href}/${id}`}
                            src={image}
                            title={title}
                            description={description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
);

export default HomePage;
