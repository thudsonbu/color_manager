import sizes from './sizes';

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
      color: "#ff7300",
    },
    [sizes.down("xs")]: {
      display: "none",
    }
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
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px",
    },
    [sizes.down("xs")]: {
      width: "200px",
    }
  },
  selectContainerClass: {
    marginLeft: "auto",
    marginRight: "20px"
  }
}