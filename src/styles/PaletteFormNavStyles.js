import { DRAWER_WIDTH } from '../constants';

export default theme => ({
    appBar: {
        width: "100%",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
    toolbar: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
    },
    menuAndTitle: {
        marginLeft: "1rem",
        display: "flex",
        flexDirection: "row",
        height: "64px",
        alignItems: "center",
    },
    navBtns: {
        marginRight: "1rem",
        display: "flex",
        flexDirection: "row",
    },
    item: {
        margin: "0 0.5rem",
        textDecoration: "none",
    },
    formText: {
        width: "100%",
    }
})