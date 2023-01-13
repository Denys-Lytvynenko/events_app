import EventCard from "./EventCard";

const CategoryEvent = ({ data, pageName }) => (
    <div>
        <h1>Events in {pageName}</h1>

        <div>
            {data.map(cardData => (
                <EventCard {...cardData} key={cardData.id} />
            ))}
        </div>
    </div>
);

export default CategoryEvent;
