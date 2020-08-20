import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import PaletteFooter from './PaletteFooter'
import styles from './styles/PaletteStyles'
import Button from '@material-ui/core/Button';



class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
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
        const { classes } = this.props
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
            ))
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
                <div className={classes.paletteNotFound}>
                    <div className={classes.paletteNotFoundContent}>
                        <h1 className={classes.paletteNotFoundHeader}>Palette was not found.</h1>
                        <Button variant="contained" className={classes.paletteNotFoundButton}>
                            <Link to={'/'} className={classes.paletteNotFoundLink}>Palette List</Link>
                        </Button>
                    </div>
                </div>
            )
        }
    }
}

export default withStyles(styles)(Palette)