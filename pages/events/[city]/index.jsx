import EventsInCityPage from "../../../src/components/Events/EventsInCityPage";

const EventsCategoryPage = ({ data, pageName }) => (
    <EventsInCityPage data={data} pageName={pageName} />
);

export default EventsCategoryPage;

export const getStaticPaths = async () => {
    const { events_categories } = await import("/data/data.json");

    const allPaths = events_categories.map(({ id }) => ({
        params: {
            city: id.toString(),
        },
    }));

    return {
        paths: allPaths,
        fallback: false,
    };
};

export const getStaticProps = async context => {
    const id = context?.params.city;
    const { allEvents } = await import("/data/data.json");

    const data = allEvents.filter(event => event.city === id);

    return {
        props: { data, pageName: id },
    };
};
