import CityOfEventPage from "../../src/components/Events/CityOfEventPage";

const EventsPage = ({ data }) => <CityOfEventPage data={data} />;

export default EventsPage;

export const getStaticProps = async () => {
    const { events_categories } = await import("/data/data.json");

    return {
        props: { data: events_categories },
    };
};
