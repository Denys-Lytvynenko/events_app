import Events from "../../src/components/Events/Events";

const EventsPage = ({ data }) => <Events data={data} />;

export default EventsPage;

export const getStaticProps = async () => {
    const { events_categories } = await import("/data/data.json");

    return {
        props: { data: events_categories },
    };
};
