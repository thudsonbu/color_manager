import sizes from '../styles/sizes';

export default {
  NavbarClass: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "10vh",
    [sizes.down("sm")]: {
      hight: "6vh",
    },
  },
  logoClass: {
    marginRight: "10px",
    padding: "0 20px",
    fontSize: "20px",
    fontWeight: "700",
    backgroundColor: "#bdbdbd",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: "#ffffff"
    },
    "& span": {
      fontWeight: "700",
      color: "#4cb2f5",
    },
  },
  sliderContainer: {
    marginLeft: "10px",
    [sizes.down("sm")]: {
      display: "None",
    }
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
  },
  selectContainerClass: {
    marginLeft: "auto",
    marginRight: "20px"
  }
}