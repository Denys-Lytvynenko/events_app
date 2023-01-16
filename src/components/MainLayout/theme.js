import { createTheme } from "@mui/material";

import LinkBehaviour from "../LinkBehaviour";

export const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: { component: LinkBehaviour },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour,
            },
        },
        MuiListItemButton: {
            defaultProps: {
                component: LinkBehaviour,
            },
        },
    },
});
