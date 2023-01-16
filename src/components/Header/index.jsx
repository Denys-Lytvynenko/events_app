import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { useState } from "react";

import { linkStyle } from "../../../styles/style.js";
import { navItems, navigation } from "../../navigation";

import HideOnScroll from "./HideOnScroll";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(prevState => !prevState);

    return (
        <>
            <Box sx={{ display: "flex" }} component="header">
                <HideOnScroll>
                    <AppBar component="nav">
                        <Toolbar>
                            <MobileDrawer
                                mobileOpen={mobileOpen}
                                handleDrawerToggle={handleDrawerToggle}
                            />

                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", sm: "block" },
                                }}
                            >
                                <NextLink
                                    href={navigation.home.href}
                                    style={linkStyle}
                                >
                                    Events app
                                </NextLink>
                            </Typography>

                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                {navItems.map(({ name, href }, index) => (
                                    <Button
                                        sx={{ color: "#fff" }}
                                        key={index}
                                        href={href}
                                    >
                                        {name}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </Box>

            <Toolbar id="back-to-top-anchor" />
        </>
    );
};

export default Header;
