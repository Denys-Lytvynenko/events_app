import Image from "next/image";
import Link from "next/link";

const HomePage = ({ data }) => (
    <div>
        {data.map(({ id, title, description, image }) => (
            <Link href={`/events/${id}`} key={id}>
                <div>
                    <Image src={image} alt={title} width={500} height={300} />
                </div>

                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        ))}
    </div>
);

export default HomePage;
