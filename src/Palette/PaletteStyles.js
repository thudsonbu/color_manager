import sizes from '../styles/sizes';

export default {
    PaletteClass: {
        height: "100vh",
    },
    PaletteColorsClass: {
        height: "80%",
        margin: "0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        [sizes.down("sm")]: {
            height: "70vh",
        },
    },
    goBackClass: {
        alignSelf: "end",
        width: "20%",
        marginBottom: "0px",
        padding: "0",
        backgroundColor: "#000000",
        height: "50%",
        zIndex: "0",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        [sizes.down("md")]: {
            width:"50%",
            height: props => props.fullBox ? "10%" : "20%",
        },
        [sizes.down("sm")]: {
            width:"100%",
            height: props => props.fullBox ? "5%" : "10%",
        }
    },
    backButtonClass: {
        width: "60px",
        height: "20px",
        display: "inline-block",
        textAlign: "center",
        outline: "none",
        border: "none",
        textDecoration: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: ".6rem",
        fontWeight: "700",
        lineHeight: "20px",
        color: "#ffffff",
        textTransform: "uppercase",
        opacity: "1",
        cursor: "pointer",
    },
}