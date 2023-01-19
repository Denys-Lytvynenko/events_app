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
                sx={{
                    fontSize: {
                        xs: "1.75rem",
                        md: "3.75rem",
                    },
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                sx={{
                    fontSize: {
                        xs: "1rem",
                        md: "1.75rem",
                    },
                }}
            >
                {description}
            </Typography>

            {children}
        </Container>
    </Box>
);

export default PageTitleBlock;
