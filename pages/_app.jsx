import MainLayout from "../src/components/MainLayout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = ({ Component, pageProps }) => (
    <MainLayout>
        <Component {...pageProps} />
    </MainLayout>
);

export default App;
