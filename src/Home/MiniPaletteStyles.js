import sizes from '../styles/sizes';

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
        [sizes.down("sm")]: {
            width: "60%",
            height: "30%",
            maxWidth: "500px",
            margin: "1.5rem",
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
        margin: "0px",
        color: "black",
        fontSize: "1rem",
        position: "relative"
    },
    titleContainer: {
        paddingBottom: "10px",
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
    editIcon: {
        color: "#ffffff",
        backgroundColor: "#45a749",
        width: "20px",
        height: "15px",
        position: "absolute",
        left: "0px",
        top: "0px",
        padding: "9px",
        zIndex: 10,
        opacity: 1,
        [sizes.up("sm")]: {
            opacity: 0,
        }
    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "15px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "9px",
        zIndex: 10,
        opacity: 1,
        [sizes.up("sm")]: {
            opacity: 0,

        },

    },
    buttons: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
        height: "20px",
    },
    editButton:{
        color: "#83bb43",
    },
    deleteButton:{
        color: "#eb3d30",
    }
}