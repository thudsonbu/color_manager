import sizes from './sizes';

export default {
    root: {
        height: "100vh",
    },
    picker: {
        width: "100% !important",
        marginTop: "2rem",
    },
    addColorButton: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "1.5rem",
        [sizes.down("sm")]: {
            display: "None",
        }
    },
    colorNameInput: {
        width: "100%",
    },
    buttons: {
        marginTop: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [sizes.up("sm")]: {
            display: "None",
        }
    },
    randomColorButtonMobile: {
        color: "#ffffff",
        width: "45%",
        height: "57px",
    },
    addColorButtonMobile: {
        width: "45%",
        height: "57px",
    }
} 