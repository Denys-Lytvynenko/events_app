import { Box, Typography } from "@mui/material";
import Copyright from "../Copyright";

const Footer = () => (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            Events app
        </Typography>

        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            Subscribe to your favorite event
        </Typography>

        <Copyright />
    </Box>
);

export default Footer;
