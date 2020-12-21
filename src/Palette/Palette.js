import React, { Component } from 'react';

import ColorBox from './ColorBox';

import PaletteNotFound from './PaletteNotFound';
import PaletteLoading from '../Palette/PaletteLoading';

import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import { withStyles } from '@material-ui/styles';
import styles from './PaletteStyles';

import { generatePalette } from '../Helpers/colorHelpers';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {
            level: 500,
            format: "hex",
            status: 'loading',
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    componentDidMount(){
        this.props.firebase.findPalette(this.props.paletteID)
            .then((palette) => {
                this.setState({
                    id: palette.id,
                    emoji: palette.data().emoji,
                    colors: generatePalette(palette).colors,
                    paletteName: palette.data().paletteName,
                    status: 'loaded'
                })
            })
            .catch((error) => {
                this.setState({
                    status: 'error'
                })
            });
    }

    changeLevel(newLevel){
        this.setState({ level: newLevel })
    }

    changeFormat(val){
        this.setState({format: val})
    }

    render() {
        if(this.state.status === 'loading'){
            return (
                <PaletteLoading />
            )
        } else if (this.state.status === 'loaded') {

            const { colors, paletteName, emoji, id } = this.state;
            const { classes } = this.props;
            const { level, format } = this.state;

            //try{
                const colorBoxes = colors[level].map( color => (
                    <ColorBox 
                        background={color[format]} 
                        name={color.name} 
                        key={color.id} 
                        id={color.id}
                        paletteId={id}
                        fullBox={true}
                    />
                ));
                return (
                    <div className={classes.PaletteClass}>
                        <Navbar 
                            level={level} 
                            changeLevel={this.changeLevel}
                            handleChange={this.changeFormat}
                            showSlider={true}
                        />
                        <div className={classes.PaletteColorsClass}>
                            {colorBoxes}
                        </div>
                        <PaletteFooter paletteName={paletteName} emoji={emoji} />
                    </div>
                )
            //} catch(e){
                return (
                    <PaletteNotFound/>
                )
            //}
        } else {
            return (
                <h1> Bacon </h1>
            )
        }
    }
}

export default withStyles(styles)(Palette)