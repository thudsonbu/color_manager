import zIndex from '@material-ui/core/styles/zIndex';
import { GpsFixed } from '@material-ui/icons';
import sizes from '../styles/sizes';

export default {
    root: {
        height: "9vh",
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
        [sizes.down("sm")]: {
            hight: "6vh",
        },
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
        fontSize: "20px",
        fontWeight: "700",
        backgroundColor: "#bdbdbd",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "#ffffff"
        },
        "& span": {
          fontWeight: "700",
          color: "#4cb2f5",
        },
    },
    linkButton: {
        color: "#4cb2f5",
        fontSize: "2rem",
        paddingLeft: "2vh",
        height: "100%",
        paddingRight: "2vh",
    },
    linkLabel: {
        color: "#000000",
        fontSize: "1rem",
        [sizes.down("sm")]: {
            display: "none",
        }
    },
    rightNavbar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        heigth: "100%",
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