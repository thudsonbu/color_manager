import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import { withStyles } from "@material-ui/styles"
import './ColorBox.css';

const styles = {
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        border: "none",
        color: props => chroma(props.background).luminance() <= 0.8 ? "#ffffff" : "#000000",
        fontSize: ".6rem",
        fontWeight: "500",
        textTransform: "uppercase",
        width: "45px",
        height: "22px",
        zIndex: "2",
        outline: "none",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textDecoration: "none",
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.15 ? "#ffffff" : "#000000",
        fontWeight: "500",
    },
    ColorBoxClass: {
        width: "20%",
        height: props => props.fullBox ? "25%" : "50%",
        margin: "auto",
        position: "relative",
        fontSize: ".8rem",
        cursor: "pointer",
        "&:hover button": {
            opacity: 1
        }
    },
    bigBoxClass: {
        height: "50%",
        margin: "0",
        padding: "0"
    },
    goBackClass: {
        alignSelf: "end",
        width: "20%",
        marginBottom: "0px",
        padding: "0",
        backgroundColor: "#000000",
        height: "50%",
        zIndex: "0"
    },
    backButtonClass: {
        width: "60px",
        height: "20px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-30px",
        AccountsForWidthOfBoxForPositioningMarginTop: "-10px",
        AccountsForHeightOfBoxForPositioningTextAlign: "center",
        outline: "none",
        border: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: ".6rem",
        lineHeight: "20px",
        color: "#ffffff",
        textTransform: "uppercase",
        opacity: "0",
        cursor: "pointer"
    },
    copyButtonClass: {
        width: "60px",
        height: "20px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-30px",
        AccountsForWidthOfBoxForPositioningMarginTop: "-10px",
        AccountsForHeightOfBoxForPositioningTextAlign: "center",
        outline: "none",
        border: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: ".6rem",
        lineHeight: "20px",
        color: props => chroma(props.background).luminance() <= 0.4 ? "#ffffff" : "#000000",
        textTransform: "uppercase",
        opacity: "0",
        cursor: "pointer"
    },
    backButtonClass: {
        opacity: "1",
        zIndex: "3",
        textDecoration: "none"
    },
    copyContainerClass: {
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "0px",
        margin: "0px"
    },
    boxContentClass: {
        fontSize: ".6rem",
        padding: "5px",
        fontWeight: "500",
        textTransform: "uppercase",
        color: "#000000"
    },
    copyOverlayClass: {
        position: "absolute",
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlayClass: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsgClass: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0)",
        opacity: "0",
        color: props => chroma(props.background).luminance() <= 0.4 ? "#ffffff" : "#000000",
    },
    copyMsgShowClass: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.2s"
    },
}


class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            copied: false,
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }
    render() {
        const { name, background, paletteId, id, fullBox, classes } = this.props; // unpack props
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.ColorBoxClass}>
                    <div 
                        className={`${classes.copyOverlayClass} ${copied && classes.showOverlayClass}`} 
                        style={{backgroundColor: background}}>
                    </div>
                    <div className={`${classes.copyMsgClass} ${copied && classes.copyMsgShowClass}`}>
                        <h1 className={classes.copyText} >Copied!</h1>
                        <p className={classes.copyText} >{background}</p>
                    </div>
                    <div className={classes.copyContainerClass} style={{backgroundColor: background}}>
                        <div className={classes.boxContentClass}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                            <button className={classes.copyButtonClass}>Copy</button>
                        { fullBox &&
                            <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()} className={classes.seeMore}>
                                <span className={classes.lightText}>SHADES</span>
                            </Link>
                        }
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)