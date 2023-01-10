import CategoryEvent from "../../../src/components/Events/CategoryEvent";

const EventsCategoryPage = ({ data, pageName }) => (
    <CategoryEvent data={data} pageName={pageName} />
);

export default EventsCategoryPage;

export async function getStaticPaths() {
    const { events_categories } = await import("/data/data.json");

    const allPaths = events_categories.map(({ id }) => ({
        params: {
            cat: id.toString(),
        },
    }));

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const { allEvents } = await import("/data/data.json");

    const data = allEvents.filter(event => event.city === id);

    return {
        props: { data, pageName: id },
    };
}
