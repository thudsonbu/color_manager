import bg from "../styles/Large-Triangles.svg";

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
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        fontSize: "12px",
        overflowY: "scroll",
        overflowX: "none",
    },
    container: {
        width: "95%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        fontSize: "20px",
        alignItems: "center",
        "& a": {
            color: "white"
        }
    },
    navTitle: {
        fontSize: "3rem",
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gridGap: "5%",
        marginBottom: "200px",
    },
}