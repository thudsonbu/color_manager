import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './LoadingStyles'

class PaletteLoading extends Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.paletteNotFound}>
                <div className={classes.paletteNotFoundContent}>
                    
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteLoading);