import bg from "../styles/Large-Triangles.svg";

import sizes from '../styles/sizes';

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
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    title: {
        marginTop: "10vh",
        paddingTop: "8vh",
        width: "100%",
        textAlign: "center",
        height: "12vh",
        fontSize: "4em",
        color: "#ffffff",
        textTransform: "uppercase",
        fontWeight: 700,
        [sizes.down("sm")]: {
            height: "9vh",
            paddingTop: "3vh",
        }
    },

    // nav: {
    //     display: "flex",
    //     width: "100%",
    //     justifyContent: "space-between",
    //     color: "white",
    //     fontSize: "20px",
    //     alignItems: "center",
    //     "& a": {
    //         color: "white"
    //     }
    // },
    // navTitle: {
    //     fontSize: "3rem",
    // },
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