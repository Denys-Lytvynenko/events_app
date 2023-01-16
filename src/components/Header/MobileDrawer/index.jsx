import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

import { linkStyle } from "../../../../styles/style";
import { navItems, navigation } from "../../../navigation";

import logo from "../../../../public/events-app-favicon.png";

const drawerWidth = 240;

const MobileDrawer = props => {
    const { handleDrawerToggle, mobileOpen } = props;

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
            >
                <MenuIcon />
            </IconButton>

            <Box component="nav">
                <Drawer
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
                    <Box
                        onClick={handleDrawerToggle}
                        sx={{ textAlign: "center", padding: "20px 0" }}
                    >
                        <NextLink href={navigation.home.href} style={linkStyle}>
                            <Image src={logo} alt="logo" width={50} priority />

                            <Typography variant="h6" sx={{ my: 2 }}>
                                Events app
                            </Typography>
                        </NextLink>

                        <Divider />

                        <List>
                            {navItems.map(({ name, href }, index) => (
                                <ListItem key={index} disablePadding>
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
                </Drawer>
            </Box>
        </>
    );
};

export default MobileDrawer;
