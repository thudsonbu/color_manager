export default {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.3)"
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
    },
    colorName: {
        fontSize: ".6rem",
        fontWeight: "500",
        color: "#000000",
        textTransform: "uppercase",
    }
}