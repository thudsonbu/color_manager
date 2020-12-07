import bg from "../styles/Large-Triangles.svg"

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1,
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out",
        }
    },
    root: {
        backgroundColor: "#00b7ff",
        backgroundImage: `url(${bg})`,
        /* background by svgbackgrounds.com */
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        backgroundColor: "#ffffff",
        width: "300px",
        height: "360px",
        padding: "10px 20px 20px 20px",
        borderRadius: "5px",
    },
    title: {
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "2px",
    },
    input: {
        margin: "2% 10% 2% 10%",
        width: "80%",
    },
    submit: {
        margin: "2% 10% 2% 10%",
        width: "80%",
        height: "50px",
        borderRadius: "3px",
        textTransform: "uppercase",
        border: "none",
        color: "#ffffff",
        backgroundColor: "#4cb2f5",
        fontWeight: "200%",
        "&:hover": {
            backgroundColor: "#0384cc",
        }
    },
    signUpContainer: {
        width: "100%",
        textAlign: "center",
        color: "#d3d3d3"
    }
    
}