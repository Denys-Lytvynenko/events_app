import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageTitleBlock from "../src/components/PageTitleBlock";

const ServerErrorPage = () => {
    const { reload } = useRouter();

    return (
        <Box>
            <PageTitleBlock
                title="Server side error"
                description="Try to update page later"
            >
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" onClick={reload}>
                        Update
                    </Button>
                </Stack>
            </PageTitleBlock>
        </Box>
    );
};

export default ServerErrorPage;
