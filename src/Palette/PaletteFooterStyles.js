import sizes from '../styles/sizes';

export default {
    PaletteFooterClass: {
        backgroundColor: "#ffffff",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        margin: "0 1rem"
    },
    EmojiClass: {
        fontSize: "30px"
    },
    sliderContainer: {
        marginLeft: "10px",
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
            backgroundColor: "#03a2ec",
            outline: "none",
            border: "2px solid #03a2ec",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px",
        },
        [sizes.down("sm")]: {
            display: "none"
        }
    },
    selectContainerClass: {
    marginLeft: "auto",
    marginRight: "20px"
    },
    
}