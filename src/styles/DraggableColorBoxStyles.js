import sizes from './sizes';
import chroma from 'chroma-js'

export default {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6px",
        "& svg": {
            fontSize: "1.5rem",
        },
        [sizes.up("md")]: {
            "&:hover svg": {
                transform: "scale(1.75)",
            }
        },
        [sizes.down("md")]: {
            width:"50%",
            height: "10%",
        },
        [sizes.down("sm")]: {
            width:"100%",
            height: "4.7%",
            "& svg": {
                fontSize: "1.75rem",
            }
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [sizes.down("sm")]: {
            padding: "5px",
            top: "0px",
        }
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
        color: "#ffffff",
        [sizes.down("sm")]: {
            fontSize: "1rem",
        }
    },
    colorName: {
        fontSize: ".6rem",
        fontWeight: "500",
        textTransform: "uppercase",
        color: "#ffffff",
    }
}