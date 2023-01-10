import SingleEvent from "../../../src/components/Events/SingleEvent";

const EventPage = ({ data: { title, description, image } }) => (
    <SingleEvent title={title} description={description} image={image} />
);

export default EventPage;

export async function getStaticPaths() {
    const data = await import("/data/data.json");
    const { allEvents } = data;

    const allPaths = allEvents.map(({ id, city }) => ({
        params: {
            id,
            cat: city,
        },
    }));

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { allEvents } = await import("/data/data.json");

    const eventData = allEvents.find(
        ({ city, id }) =>
            context.params.cat.toLowerCase() === city &&
            context.params.id === id
    );

    return {
        props: {
            data: eventData,
        },
    };
}
