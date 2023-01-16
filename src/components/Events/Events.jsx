import { Box, Container, Grid, Typography } from "@mui/material";

import { navigation } from "../../navigation";

import EventCard from "../EventCard";

const Events = ({ data }) => (
    <>
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
                    Place of events
                </Typography>

                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    Choose city to get info about events in it
                </Typography>
            </Container>
        </Box>

        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {data.map(({ id, title, image, city }) => (
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                        key={id}
                        item
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <EventCard
                            id={id}
                            city={city}
                            title={title}
                            href={`${navigation.events.href}/${id}`}
                            src={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
);

export default Events;
