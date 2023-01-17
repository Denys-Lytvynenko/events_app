import { Container, Grid } from "@mui/material";

import { navigation } from "../../navigation";

import EventCard from "../EventCard";
import PageTitleBlock from "../PageTitleBlock";

const EventsInCityPage = ({ data, pageName }) => (
    <>
        <PageTitleBlock
            title={`Events in ${pageName}`}
            description="Choose city to get info about events in it"
        />

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

export default EventsInCityPage;
