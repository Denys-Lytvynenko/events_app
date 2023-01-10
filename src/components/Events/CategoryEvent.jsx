import EventCard from "./EventCard";

const CategoryEvent = ({ data, pageName }) => (
    <div className="category_events">
        <h1>Events in {pageName}</h1>

        <div className="content">
            {data.map(cardData => (
                <EventCard {...cardData} key={cardData.id} />
            ))}
        </div>
    </div>
);

export default CategoryEvent;
