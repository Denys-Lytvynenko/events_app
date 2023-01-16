import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

const EventCard = ({ href, src, title, description }) => (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
        <CardActionArea href={href} sx={{ height: "100%" }}>
            <CardMedia component="img" height="140" image={src} alt={title} />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default EventCard;
