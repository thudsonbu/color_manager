import React, { Component } from "react";

import { withStyles } from '@material-ui/styles';
import styles from "./NavbarStyles";

import { withFirebase } from '../Firebase';

import { withRouter, Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false,
        }
    }

    handleClick = (event) => {
        this.setState({
            menuOpen: true,
            menuAnchor: event.currentTarget,
        })
    };

    handleClose = () => {
        this.setState({
            menuOpen: false,
            menuAnchor: null,
        })
    }

    render(){
        const { classes } = this.props;
        const { menuOpen, menuAnchor } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.logoBox}>
                    <Link to='/'>react<span>color</span>manager</Link>
                </div>
                <div>
                <IconButton edge="start" onClick={this.handleClick} className={classes.menuButton} color="inherit" aria-label="menu">
                    <AccountBoxIcon className={classes.menuIcon}/>
                </IconButton>
                <Menu 
                    open={menuOpen}
                    keepMounted
                    onClose={this.handleClose}
                    anchorEl={menuAnchor}
                >
                    <MenuItem><Link to='../SignIn' className={classes.link}>Sign In</Link></MenuItem>
                    <MenuItem><Link to='../SignUp' className={classes.link}>Sign Up</Link></MenuItem>
                    <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
                </Menu>
                </div>
            </div>
        )
    }
}

export default withRouter(withFirebase(withStyles(styles)(Navbar)));