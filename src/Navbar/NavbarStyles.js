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
    logoBox: {
        marginRight: "10px",
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
    menuButton: {
        height: "10vh",
        width: "10vh",
        color: "#4cb2f5",
        
    },
    menuIcon: {
        fontSize: "2rem",
    },
    link: {
        textDecoration: "none",
        color: "#000000",
    }
}