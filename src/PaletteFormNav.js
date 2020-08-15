import React, { Component } from 'react'
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';


const drawerWidth = 300;

const styles = theme => ({
    appBar: {
        width: "100%",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
    toolbar: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
    },
    menuAndTitle: {
        marginLeft: "1rem",
        display: "flex",
        flexDirection: "row",
        height: "64px",
        alignItems: "center",
    },
    navBtns: {
        marginRight: "1rem",
        display: "flex",
        flexDirection: "row",
    },
    item: {
        margin: "0 0.5rem",
        textDecoration: "none",
    },
    formText: {
        width: "100%",
    }
})

class PaletteFormNav extends Component {
    
    render() {
        const { classes, palettes, handleSubmit, handleDrawerOpen, drawerOpen } = this.props;
        return (
            <div>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color='default'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: drawerOpen
                    })}
                >
                    <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
                        <div className={classes.menuAndTitle}>
                            {!drawerOpen &&
                            <IconButton
                                color='inherit'
                                aria-label='Open drawer'
                                onClick={handleDrawerOpen}
                                className={classNames(classes.item, drawerOpen && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            }
                            <Typography variant='h6' color='inherit' noWrap className={classes.item}>
                                Create A Palette
                            </Typography>
                        </div>
                        <div className={classes.navBtns}>
                            <PaletteMetaForm
                                className={classes.item} 
                                palettes={palettes}
                                handleSubmit={handleSubmit}
                                classes={classes}
                            />
                            <Link to="/" className={classes.item}>
                                <Button variant='contained' color='secondary'>
                                    Go Back
                                </Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);

