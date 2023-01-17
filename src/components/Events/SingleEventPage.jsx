import { Box } from "@mui/material";

import EmailForm from "../EmailForm/EmailForm";
import PageTitleBlock from "../PageTitleBlock";

const SingleEventPage = ({ image, description, title }) => (
    <>
        <PageTitleBlock title={title} description={description} />

        <Box
            component="img"
            sx={{
                width: "100%",
            }}
            alt={title}
            src={image}
        />

        <EmailForm />
    </>
);

export default SingleEventPage;
