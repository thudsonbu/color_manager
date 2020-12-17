import { DRAWER_WIDTH } from '../styles/constants';
import sizes from '../styles/sizes'

export default theme => ({
    appBar: {
        width: "100%",
        backgroundColor: "#ffffff",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: "auto",
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
        height: "9vh",
        [sizes.down("sm")]: {
            display: "6vh",
        }
    },
    menuAndTitle: {
        marginLeft: "1rem",
        display: "flex",
        flexDirection: "row",
        height: "9vh",
        alignItems: "center",
    },
    title: {
        margin: "0 0.5rem",
        textDecoration: "none",
        [sizes.down("sm")]: {
            display: "none",
        }
    },
    navBtns: {
        display: "flex",
        flexDirection: "row",
    },
    navSaveButton: {
        margin: "0 0.5rem",
        textDecoration: "none",
        [sizes.down("md")]: {
            display: "none",
        }
    },
    navBackButton: {
        margin: "0 0.5rem",
        textDecoration: "none",
        [sizes.down("md")]: {
            marginRight: "1vh",
        }
    },
    formText: {
        width: "100%",
    }
})