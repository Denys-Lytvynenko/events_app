import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageTitleBlock from "../src/components/PageTitleBlock";

const NotFoundPage = () => {
    const { back } = useRouter();

    return (
        <Box>
            <PageTitleBlock
                title="Page not found"
                description="Check URL address and try again"
            >
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" onClick={back}>
                        Go back
                    </Button>
                </Stack>
            </PageTitleBlock>
        </Box>
    );
};

export default NotFoundPage;
