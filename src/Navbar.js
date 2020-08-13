import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'
import Slider from 'rc-slider';
import { withStyles } from '@material-ui/styles'
import styles from './styles/NavStyles'


class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            format: "hex",
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    handleFormatChange(e) {
        this.setState({
            format: e.target.value,
            open: true
        })
        this.props.handleChange(e.target.value)
    }
    closeSnackbar(e) {
        this.setState({open: false});
    }
    render() {
        const { level, changeLevel, showSlider, classes } = this.props
        const { format } = this.state
        return (
            <header className={classes.NavbarClass}>
                <div className={classes.logoClass}>
                    <Link to='/'>react<span>color</span>manager</Link>
                </div>
                { showSlider &&
                <div className={classes.sliderContainerClass}>
                    <div className={classes.sliderLevelClass}>
                        <span>Level: {level}</span>
                    </div>
                    <div className={classes.SliderClass}>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                }
                <div className={classes.selectContainerClass}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb( 255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGB - rgb( 255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Changed</span>}
                    ContentProps={{"aria-describedby": "message-id"}}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton 
                            onClick={this.closeSnackbar} 
                            color={"inherit"}
                            key='close'
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)