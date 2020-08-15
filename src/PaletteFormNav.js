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
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        flexDirect: "row",
        justifyContent: "space-between",
        height: "64px",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        height: "64px",
    },
    navToolbar: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        aligntItems: "center",
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 10
    },
    NavBtns: {
        width: "70%",
        height: "64px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    NavBtn: {
        margin: "25px",
    }

})

class PaletteFormNav extends Component {
    
    render() {
        const { classes, palettes, handleSubmit, handleDrawerOpen, drawerOpen } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color='default'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: drawerOpen
                    })}
                >
                    <Toolbar disableGutters={!drawerOpen} className={classes.navToolbar}>
                        {!drawerOpen &&
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={handleDrawerOpen}
                            className={classNames(classes.menuButton, drawerOpen && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        }
                        <Typography variant='h6' color='inherit' noWrap>
                            Create A Palette
                        </Typography>
                        <div className={classes.NavBtns}>
                            <PaletteMetaForm
                                className={classes.NavBtn} 
                                palettes={palettes}
                                handleSubmit={handleSubmit}
                            />
                            <Link to="/" className={classes.NavBtn}>
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

