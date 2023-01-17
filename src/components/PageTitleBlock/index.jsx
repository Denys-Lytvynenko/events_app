import { Box, Container, Typography } from "@mui/material";

const PageTitleBlock = ({ title, description, children }) => (
    <Box
        sx={{
            bgcolor: "background.paper",
            pt: 6,
            pb: 6,
        }}
    >
        <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                {title}
            </Typography>

            <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
            >
                {description}
            </Typography>

            {children}
        </Container>
    </Box>
);

export default PageTitleBlock;
