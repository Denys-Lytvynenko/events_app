import { Container, Grid } from "@mui/material";

import { navigation } from "../../navigation";

import EventCard from "../EventCard";
import PageTitleBlock from "../PageTitleBlock";

const CityOfEventPage = ({ data }) => (
    <>
        <PageTitleBlock
            title="Place of events"
            description="Choose city to get info about events in it"
        />

        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {data.map(({ id, title, image, city, description }) => (
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
                            description={description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
);

export default CityOfEventPage;
