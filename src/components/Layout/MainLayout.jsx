import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const MainLayout = ({ children }) => (
    <>
        <Head>
            <title>Events App</title>

            <meta name="description" content="Events application" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <link rel="icon" href="/events-app-favicon.png" />
        </Head>

        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default MainLayout;
