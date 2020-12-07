import chroma from 'chroma-js'
import sizes from '../styles/sizes';

export default {
    ColorBox: {
        width: "20%",
        height: props => props.fullBox ? "25%" : "50%",
        margin: "auto",
        position: "relative",
        fontSize: ".8rem",
        cursor: "pointer",
        "&:hover button": {
            opacity: 1
        },
        [sizes.down("md")]: {
            width:"50%",
            height: props => props.fullBox ? "10%" : "20%",
        },
        [sizes.down("sm")]: {
            width:"50%",
            height: props => props.fullBox ? "10%" : "20%",
        }
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        border: "none",
        color: props => chroma(props.background).luminance() <= 0.8 ? "#ffffff" : "#000000",
        fontSize: ".6rem",
        fontWeight: "500",
        textTransform: "uppercase",
        width: "45px",
        height: "22px",
        zIndex: "2",
        outline: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textDecoration: "none",
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.15 ? "#ffffff" : "#000000",
        fontWeight: "500",
    },
    bigBox: {
        height: "50%",
        margin: "0",
        padding: "0"
    },
    copyButton: {
        width: "140px",
        height: "20px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-70px",
        marginTop: "-10px",
        outline: "none",
        border: "none",
        background: props => chroma(props.background),
        fontSize: ".8rem",
        lineHeight: "20px",
        color: props => chroma(props.background).luminance() <= 0.4 ? "#ffffff" : "#000000",
        textTransform: "uppercase",
        opacity: "0",
        cursor: "pointer"
    },
    backButton: {
        opacity: "1",
        zIndex: "3",
        textDecoration: "none"
    },
    copyContainer: {
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "0px",
        margin: "0px"
    },
    boxContent: {
        fontSize: ".6rem",
        padding: "5px",
        fontWeight: "500",
        textTransform: "uppercase",
        color: "#000000"
    },
    copyOverlay: {
        position: "absolute",
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0)",
        opacity: "0",
        color: props => chroma(props.background).luminance() <= 0.4 ? "#ffffff" : "#000000",
        overflow: "hidden",
    },
    copyMsgShow: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.2s",
        overflow: "hidden",
        textTransform: "uppercase",
    },
}