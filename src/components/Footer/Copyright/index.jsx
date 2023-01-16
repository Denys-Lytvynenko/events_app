import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Copyright = () => (
    <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
            Events App
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
    </Typography>
);

export default Copyright;
