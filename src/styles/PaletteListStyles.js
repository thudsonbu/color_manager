export default {
    root: {
        backgroundColor: "blue",
        height: "200vh",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        fontSize: "12px"
    },
    container: {
        width: "80%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
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
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gridGap: "5%",
    },
}