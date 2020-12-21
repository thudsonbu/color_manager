import React, { Component } from 'react';

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter';

import PaletteNotFound from './PaletteNotFound';
import PaletteLoading from '../Palette/PaletteLoading';

import { withStyles } from '@material-ui/styles';
import styles from './PaletteStyles';

import { Link } from 'react-router-dom';

import { generatePalette } from '../Helpers/colorHelpers';

class SingleColorPalette extends Component{
    constructor(props){
        super(props)
        this.state = {
            format: "hex",
            status: 'loading',
        }
        this._shades = null
        this.changeFormat = this.changeFormat.bind(this);
    }

    componentDidMount(){
        this.props.firebase.findPalette(this.props.paletteID)
            .then((palette) => {
                this.setState({
                    id: palette.id,
                    emoji: palette.data().emoji,
                    colors: generatePalette(palette).colors,
                    _shades: this.gatherShades(generatePalette(palette).colors, this.props.colorId),
                    paletteName: palette.data().paletteName,
                    status: 'loaded',
                });
            })
            .catch((error) => {
                this.setState({
                    status: 'error'
                })
            });
    }

    gatherShades( colors, colorToFilterBy){
        let shades = [];
        for(let key in colors){
            shades = shades.concat(
                colors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }

    changeFormat(val){
        this.setState({format: val})
    }

    render() {
        if(this.state.status === 'loading'){
            return (
                <PaletteLoading />
            )
        } else if (this.state.status == 'loaded'){
            const { format } = this.state
            const { paletteName, emoji, id } = this.state;
            const { classes } = this.props

            const colorBoxes = this.state._shades.map(color => (
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

        } else {
            return (
                <PaletteNotFound />
            )
        }
    }
}

export default withStyles(styles)(SingleColorPalette)
