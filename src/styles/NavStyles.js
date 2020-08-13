export default {
    NavbarClass: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "10%"
    },
    logoClass: {
            marginRight: "10px",
            padding: "0 20px",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "#eceff1",
            fontFamily: "Roboto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            "& a": {
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "black"
            },
            "& span": {
                fontWeight: "700",
                color: "#ff7300"
            }
    },
    sliderContainerClass: {
        margin: "auto",
        width: "30%",
    },
    sliderLevelClass: {
        margin: "20px"
    },
    SliderClass: {
            width: "100%",
            display: "inline-block",
            // "& .rc-slider-rail": {
            //     height: "6px",
            //     width: "100%"
            // },
            // "& .rc-slider-track": {
            //     backgroundColor: "transparent",
            //     width: "100%"
            // },
            "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover ": {
                backgroundColor: "#ff7300",
                outline: "none",
                border: "2px solid #ff7300",
                boxShadow: "none",
            }
    },
    selectContainerClass: {
        marginLeft: "auto",
        marginRight: "10px"
    }
}