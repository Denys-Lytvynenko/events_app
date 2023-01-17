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

import EventCard from "../EventCard";
import PageTitleBlock from "../PageTitleBlock";

const HomePage = ({ data }) => (
    <>
        <PageTitleBlock
            title="Choose your event"
            description="Discover and select event you want to visit and send you
                    email for registration"
        >
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
        </PageTitleBlock>

        <Divider sx={{ mb: "24px" }} />

        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {data.map(({ id, title, description, image }) => (
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                        key={id}
                        item
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <EventCard
                            href={`${navigation.events.href}/${id}`}
                            src={image}
                            title={title}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
);

export default HomePage;
