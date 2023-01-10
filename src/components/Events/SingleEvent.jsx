import Image from "next/image";
import React from "react";

const SingleEvent = ({ image, description, title }) => (
    <div>
        <h1>{title}</h1>

        <Image src={image} alt={title} width={1000} height={500} />

        <p>{description}</p>

        <input type="email" name="email" />
        <button>submit</button>
    </div>
);

export default SingleEvent;
