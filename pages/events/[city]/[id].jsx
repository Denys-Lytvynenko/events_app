import SingleEventPage from "../../../src/components/Events/SingleEventPage";

const EventPage = ({ data }) => <SingleEventPage {...data} />;

export default EventPage;

export const getStaticPaths = async () => {
    const { allEvents } = await import("/data/data.json");

    const allPaths = allEvents.map(({ id, city }) => ({
        params: {
            id,
            city,
        },
    }));

    return {
        paths: allPaths,
        fallback: false,
    };
};

export const getStaticProps = async context => {
    const { allEvents } = await import("/data/data.json");

    const eventData = allEvents.find(
        ({ city, id }) =>
            context.params.city.toLowerCase() === city &&
            context.params.id === id
    );

    return {
        props: {
            data: eventData || null,
        },
    };
};
