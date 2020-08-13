import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

var styles = {
    PaletteClass: {
        height: "100%",
        overflow: "hidden"
    },
    PaletteColorsClass: {
        height: "80%",
        margin: "0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    },
    goBackClass: {
        alignSelf: "end",
        width: "20%",
        marginBottom: "0px",
        padding: "0",
        backgroundColor: "#000000",
        height: "50%",
        zIndex: "0",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
    },
    backButtonClass: {
        width: "60px",
        height: "20px",
        display: "inline-block",
        textAlign: "center",
        outline: "none",
        border: "none",
        textDecoration: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: ".6rem",
        fontWeight: "700",
        lineHeight: "20px",
        color: "#ffffff",
        textTransform: "uppercase",
        opacity: "1",
        cursor: "pointer"
    },
}

class SingleColorPalette extends Component{
    constructor(props){
        super(props)
        this.state = {
            format: "hex"
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades( palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }
    changeFormat(val){
        this.setState({format: val})
    }
    render() {
        const { format } = this.state
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]}
                fullBox={false}
            />
        ))
        return(
            <div className={classes.PaletteClass}>
                <Navbar handleChange={this.changeFormat} showSlider={false}/>
                <div className={classes.PaletteColorsClass}>
                    {colorBoxes}
                    <div className={classes.goBackClass}>
                        <Link to={`/palette/${id}`} className={classes.backButtonClass}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)
