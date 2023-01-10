import Image from "next/image";
import EmailForm from "../EmailForm/EmailForm";

const SingleEvent = ({ image, description, title }) => (
    <div>
        <h1>{title}</h1>

        <Image src={image} alt={title} width={1000} height={500} />

        <p>{description}</p>

        <EmailForm />
    </div>
);

export default SingleEvent;
