import React, { Component } from 'react';
import ColorBox from './ColorBox';
import PaletteNotFound from './PaletteNotFound';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from './PaletteFooter';
import styles from './PaletteStyles';


class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel){
        this.setState({ level: newLevel })
    }
    changeFormat(val){
        this.setState({format: val})
    }
    render() {
        console.log(this.props.history);
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        try{
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
        } catch(e){
            return (
                <PaletteNotFound/>
            )
        }
    }
}

export default withStyles(styles)(Palette)