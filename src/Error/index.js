import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import styles from './ErrorStyles'

class PaletteNotFound extends Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.paletteNotFound}>
                <div className={classes.paletteNotFoundContent}>
                    <h1 className={classes.paletteNotFoundHeader}>Palette Not Found</h1>
                    <Button variant="contained" className={classes.paletteNotFoundButton}>
                        <Link to={'/'} className={classes.paletteNotFoundLink}>Palette List</Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteNotFound);