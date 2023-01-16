import MenuIcon from "@mui/icons-material/Menu";
import {
    Button,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Slide,
    useScrollTrigger,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import { cloneElement, useMemo, useState } from "react";

import { linkStyle } from "../../../styles/style.js";

import logo from "../../../public/events-app-favicon.png";

const drawerWidth = 240;

const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About us", href: "/about-us" },
];

const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

const Header = props => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(prevState => !prevState);

    const drawer = useMemo(
        () => (
            <Box
                onClick={handleDrawerToggle}
                sx={{ textAlign: "center", padding: "20px 0" }}
            >
                <NextLink href="/" style={linkStyle}>
                    <Image src={logo} alt="logo" width={50} />

                    <Typography variant="h6" sx={{ my: 2 }}>
                        Events app
                    </Typography>
                </NextLink>

                <Divider />

                <List>
                    {navItems.map(({ name, href }) => (
                        <ListItem key={name} disablePadding>
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                                href={href}
                            >
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        ),
        []
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }} component="header">
            <CssBaseline />

            <HideOnScroll {...props}>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            <NextLink href="/" style={linkStyle}>
                                Events app
                            </NextLink>
                        </Typography>

                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {navItems.map(({ name, href }) => (
                                <Button
                                    sx={{ color: "#fff" }}
                                    key={name}
                                    href={href}
                                >
                                    {name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Toolbar id="back-to-top-anchor" />
        </Box>
    );
};

export default Header;
