import Image from "next/image";
import React from "react";

const EventPage = ({ data }) => {
    const { title, description, image } = data;

    return (
        <div>
            <Image src={image} alt={title} width={1000} height={500} />

            <h1>{title}</h1>

            <p>{description}</p>
        </div>
    );
};

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
