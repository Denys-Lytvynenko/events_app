import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => (
    <main>
        {data.map(({ id, title, description, image }) => (
            <Link href={`/events/${id}`} key={id}>
                <Image src={image} alt={title} width={200} height={200} />

                <h2>{title}</h2>

                <p>{description}</p>
            </Link>
        ))}
    </main>
);

export default HomePage;
