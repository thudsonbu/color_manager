import zIndex from '@material-ui/core/styles/zIndex';
import { GpsFixed } from '@material-ui/icons';
import sizes from '../styles/sizes';

export default {
    root: {
        height: "10vh",
        backgroundColor: "#ffffff",
        width: "100%",
        display: "flex",
        alignItemce: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        zIndex: "1",
        borderRadius: "2px",
        boxShadow: "0px 1px 10px #999",
    },
    leftNavbar: {
        width: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logoBox: {
        padding: "0 20px",
        fontSize: "16px",
        fontWeight: "500",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "black"
        },
        "& span": {
          fontWeight: "700",
          color: "#4cb2f5",
        },
        // [sizes.down("sm")]: {
        //   display: "None",
        // }
    },
    linkButton: {
        color: "#4cb2f5",
        fontSize: "2rem",
        paddingLeft: "2vh",
    },
    linkLabel: {
        color: "#000000",
        fontSize: ".8rem",
    },
    rightNavbar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: "3vh",
    },
    menuButton: {
        height: "8vh",
        width: "8vh",
        color: "#4cb2f5",
    },
    icon: {
        fontSize: "2rem",
        marginRight: ".5vh",
    },
    link: {
        textDecoration: "none",
        color: "#000000",
    }
}