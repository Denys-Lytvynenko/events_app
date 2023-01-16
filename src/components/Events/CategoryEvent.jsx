import { Box, Container, Grid, Typography } from "@mui/material";

import EventCard from "../EventCard";
import { navigation } from "../../navigation";

const CategoryEvent = ({ data, pageName }) => (
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
                    Events in {pageName}
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
                {data.map(({ id, title, description, image, city }) => (
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                        key={id}
                        item
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <EventCard
                            href={`${navigation.events.href}/${city}/${id}`}
                            title={title}
                            description={description}
                            src={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
);

export default CategoryEvent;
