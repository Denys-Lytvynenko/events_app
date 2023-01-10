import Head from "next/head";

import HomePage from "../src/components/HomePage";

const Home = ({ data }) => (
    <>
        <Head>
            <title>Events App</title>

            <meta name="description" content="Events application" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <link rel="icon" href="/events-app-favicon.png" />
        </Head>

        <HomePage data={data} />
    </>
);

export default Home;

export async function getServerSideProps() {
    const { events_categories } = await import("/data/data.json");

    return {
        props: {
            data: events_categories,
        },
    };
}
