import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventsCategoryPage = ({ data, pageName }) => (
    <div>
        <h1>Events in {pageName}</h1>

        <div>
            {data.map(({ id, title, city, image, description }) => (
                <Link href={`/events/${city}/${id}`} passHref key={id}>
                    <Image src={image} alt={title} width={300} height={300} />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Link>
            ))}
        </div>
    </div>
);

export default EventsCategoryPage;

export async function getStaticPaths() {
    const { events_categories } = await import("/data/data.json");

    const allPaths = events_categories.map(({ id }) => ({
        params: {
            cat: id.toString(),
        },
    }));

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const { allEvents } = await import("/data/data.json");

    const data = allEvents.filter(event => event.city === id);

    return {
        props: { data, pageName: id },
    };
}
