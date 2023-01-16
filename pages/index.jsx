import HomePage from "../src/components/HomePage";

const Home = ({ data }) => <HomePage data={data} />;

export default Home;

export async function getServerSideProps() {
    const { events_categories } = await import("/data/data.json");

    return {
        props: {
            data: events_categories,
        },
    };
}
