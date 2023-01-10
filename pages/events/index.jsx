import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventsPage = ({ data }) => (
    <div>
        <h1>Events page</h1>

        <div>
            {data.map(({ id, title, description, image }) => (
                <Link href={`/events/${id}`} key={id}>
                    <Image src={image} alt={title} width={300} height={300} />

                    <h2>{title}</h2>
                </Link>
            ))}
        </div>
    </div>
);

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import("/data/data.json");

    return {
        props: { data: events_categories },
    };
}
