import sizes from './sizes';

export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        margin: "1rem",
        height: "20%",
        width: "23%",
        maxWidth: "300px",
        minWidth: "200px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        [sizes.up("md")]: {
            "&:hover svg": {
                opacity: 1
            }
        },
    },
    colors: {
        backgroundColor: "grey",
        height: "120px",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    }, 
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        diplay: "inline-block",
        margin: "0 auto",
        position: "relative",
    },
    delete: {

    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "15px",
        height: "15px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "7px",
        zIndex: 10,
        opacity: 1,
        [sizes.up("sm")]: {
            opacity: 0

        },

    }
}