import Image from "next/image";
import Link from "next/link";

const Events = ({ data }) => (
    <div className="events_page">
        {data.map(({ id, title, image }) => (
            <Link href={`/events/${id}`} key={id} className="card">
                <Image src={image} alt={title} width={350} height={350} />

                <h2>{title}</h2>
            </Link>
        ))}
    </div>
);

export default Events;
