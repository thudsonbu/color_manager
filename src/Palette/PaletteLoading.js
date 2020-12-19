import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './PaletteNotFoundStyles'

class PaletteLoading extends Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.paletteNotFound}>
                <div className={classes.paletteNotFoundContent}>
                    <h1 className={classes.paletteNotFoundHeader}>Palette Loading</h1>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteLoading);