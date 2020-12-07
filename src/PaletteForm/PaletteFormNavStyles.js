import { DRAWER_WIDTH } from '../styles/constants';
import sizes from '../styles/sizes'

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
        height: "60px",
        alignItems: "center",
    },
    title: {
        margin: "0 0.5rem",
        textDecoration: "none",
    },
    navBtns: {
        marginRight: ".5rem",
        display: "flex",
        flexDirection: "row",
        [sizes.down("sm")]: {
            display: "none",
        }
    },
    item: {
        margin: "0 0.5rem",
        textDecoration: "none",
    },
    formText: {
        width: "100%",
    }
})