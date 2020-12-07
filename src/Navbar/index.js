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
        })
    };

    handleClose = () => {
        this.setState({
            menuOpen: false,
        })
    }

    render(){
        const { classes } = this.props;
        const { menuOpen } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.logoBox}>
                    <Link to='/'>react<span>color</span>manager</Link>
                </div>
                <IconButton edge="start" onClick={this.handleClick} className={classes.menuButton} color="inherit" aria-label="menu">
                    <AccountBoxIcon />
                </IconButton>
                <Menu 
                    open={menuOpen}
                    keepMounted
                    onClose={this.handleClose}
                >
                    <MenuItem><Link to='../SignIn'>Sign In</Link></MenuItem>
                    <MenuItem><Link to='../SignUp'>Sign Up</Link></MenuItem>
                    <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default withRouter(withFirebase(withStyles(styles)(Navbar)));