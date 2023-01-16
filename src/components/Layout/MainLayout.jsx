import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";
import NextLink from "next/link";
import { forwardRef } from "react";

import Footer from "../Footer";
import Header from "../Header";
import { Container, Toolbar } from "@mui/material";
import ScrollTop from "../ScrollTop/ScrollTop";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: { component: LinkBehaviour },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour,
            },
        },
        MuiListItemButton: {
            defaultProps: {
                component: LinkBehaviour,
            },
        },
    },
});

const MainLayout = props => (
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

        <Container component="main" sx={{ padding: "24px" }}>
            {props.children}
        </Container>

        <Footer />

        <ScrollTop {...props} />
    </ThemeProvider>
);
export default MainLayout;
