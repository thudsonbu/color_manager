import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './PaletteFooterStyles'

class PaletteFooter extends Component{
    constructor(props){
        super(props)
        this.state = {
            format: "hex",
            open: false
        }
        // this.handleFormatChange = this.handleFormatChange.bind(this);
        // this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    
    render(){
        const { classes, paletteName, emoji } = this.props;
        return (
            <footer className={classes.PaletteFooterClass}>
                    <p>{paletteName}</p>
                    <p className={classes.EmojiClass}>{emoji}</p>
            </footer>
        )
    }
    
}

export default withStyles(styles)(PaletteFooter)