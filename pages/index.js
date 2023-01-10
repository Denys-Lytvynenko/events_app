import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import icon from "/public/events-app-favicon.png";

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

        <header>
            <nav>
                <Image src={icon} alt="logo" />

                <div>
                    <Link href="/">Home</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/about-us">AboutUs</Link>
                </div>
            </nav>
        </header>

        <main>
            {data.map(({ id, title, description, image }) => (
                <Link href={`/events/${id}`} key={id}>
                    <Image src={image} alt={title} width={200} height={200} />

                    <h2>{title}</h2>

                    <p>{description}</p>
                </Link>
            ))}
        </main>

        <footer>
            <p>{new Date().getFullYear()} Time to Code - 🥳</p>
        </footer>
    </>
);

export default Home;

export async function getServerSideProps() {
    const { events_categories } = await import("/data/data.json");

    console.log("events_categories", events_categories);

    return {
        props: {
            data: events_categories,
        },
    };
}
