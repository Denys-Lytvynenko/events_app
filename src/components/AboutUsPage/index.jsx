import Head from "next/head";

import PageTitleBlock from "../PageTitleBlock";

const AboutUsPage = () => {
    return (
        <>
            <Head>
                <title>About us</title>
            </Head>

            <PageTitleBlock
                title="About us"
                description="orem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo perspiciatis ea blanditiis explicabo nobis esse
                        corporis voluptatum architecto est corrupti? Voluptate
                        debitis repellendus dolorum, harum unde vel aut
                        exercitationem explicabo!"
            />
        </>
    );
};

export default AboutUsPage;
