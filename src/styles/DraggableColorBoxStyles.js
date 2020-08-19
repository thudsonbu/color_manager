import sizes from './sizes';

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
        "&:hover svg": {
            color: "white",
            transform: "scale(1.3)"
        },
        [sizes.down("md")]: {
            width:"50%",
            height: "10%",
        },
        [sizes.down("sm")]: {
            width:"100%",
            height: "5%",
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
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
        [sizes.down("sm")]: {
            fontSize: "1rem",
        }
    },
    colorName: {
        fontSize: ".6rem",
        fontWeight: "500",
        color: "#000000",
        textTransform: "uppercase",
    }
}