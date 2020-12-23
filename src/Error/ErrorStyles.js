import bg from "../styles/Large-Triangles.svg";

export default {
    paletteNotFound: {
        backgroundColor: "#00b7ff",
        backgroundImage: `url(${bg})`,
        /* background by svgbackgrounds.com */
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    paletteNotFoundContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    paletteNotFoundHeader: {
        fontSize: "3rem",
        color: "#ffffff",
    },
    paletteNotFoundLink: {
        fontSize: "2rem",
        color: "#ffffff",
        textDecoration: "none",
    },
}

