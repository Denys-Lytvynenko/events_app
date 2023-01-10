import Image from "next/image";
import Link from "next/link";

const EventCard = ({ id, city, image, title, description }) => (
    <Link href={`/events/${city}/${id}`} passHref key={id} className="card">
        <Image src={image} alt={title} width={300} height={300} />
        <h2>{title}</h2>
        <p>{description}</p>
    </Link>
);

export default EventCard;
