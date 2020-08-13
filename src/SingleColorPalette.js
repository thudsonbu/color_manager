import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import styles from './styles/PaletteStyles'

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
