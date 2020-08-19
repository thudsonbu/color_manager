import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';

export default theme => ({
    root: {
        display: "flex",
        overflow: "hidden",
        height: "100vh",
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    },
    drawerContent: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        [sizes.down("xs")]: {
            marginTop: "8px",
            height: "calc(100vh - 100p)",
        },
        height: "calc(100vh - 60px)",
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft:  -DRAWER_WIDTH
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    container: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        aligntItems: "center",
    },
    drawerHeaderText: {
        fontsize: "2rem",
        fontWeight: "400",
        textAlign: "center",
    },
    buttons: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    clearPaletteButton: {
        width: "45%",
        
    },
    randomColorButton: {
        width: "45%",
        height: "57px",
        [sizes.down("sm")]: {
            display: "None",
        }
    },
    metaFormMobile: {
        width: "45%",
        [sizes.up("sm")]: {
            display: "None",
        }
    }
});