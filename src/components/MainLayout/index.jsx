import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

import { theme } from "./theme";

import Footer from "../Footer";
import Header from "../Header";
import ScrollTop from "../ScrollTop/ScrollTop";

const MainLayout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />

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

        <Container
            component="main"
            sx={{
                padding: 2,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {children}
        </Container>

        <Footer />

        <ScrollTop />
    </ThemeProvider>
);

export default MainLayout;
