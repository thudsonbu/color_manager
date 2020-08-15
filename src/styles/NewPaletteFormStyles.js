import { DRAWER_WIDTH } from '../constants';

export default theme => ({
    root: {
        display: "flex",
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
        height: "calc(100vh - 64px)",
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
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
    }
});