import React from "react";

import Footer from "../Footer";
import Header from "../Header";

const MainLayout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default MainLayout;
