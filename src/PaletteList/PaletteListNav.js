import React, { Component } from "react";

import { withStyles } from '@material-ui/styles';
import styles from "./PaletteListNavStyles";

import { withFirebase } from '../Firebase';

import { withRouter, Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SignOutButton from '../SignOut/index';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Navbar extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSnackClose = this.handleSnackClose.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.state = {
            menuOpen: false,
            snackBar: false,
            user: null
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
    };

    handleSnackClose = () => {
        this.setState({
            snackBar: false,
        })
    };

    handleSignOut = () => {
        this.setState({
            manuOpen: false,
            snackBar: true,
        })
    };

    render(){
        const { classes, authUser } = this.props;
        const { menuOpen, menuAnchor, snackBar } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.leftNavbar}>
                    <div className={classes.logoBox}>
                        <Link to='/'><span>color</span>helper</Link>
                    </div>
                    <Link to='/palette/new' className={classes.link}>
                        <Button className={classes.linkButton}>
                            <AddBoxIcon className={classes.icon}/>
                            <p className={classes.linkLabel}>New</p>
                        </Button>
                    </Link>
                    {/* <Link to='/' className={classes.link}>
                        <Button className={classes.linkButton}>
                            <TableChartRoundedIcon className={classes.icon}/>
                            <p className={classes.linkLabel}>List</p>
                        </Button>
                    </Link> */}
                </div>
                <div className={classes.rightNavbar}>
                    <Button edge="start" onClick={this.handleClick} className={classes.linkButton} color="inherit" aria-label="menu">
                        <AccountBoxIcon className={classes.icon}/>
                        { authUser && <p className={classes.linkLabel}>{authUser.email}</p>}
                        { !authUser && <p className={classes.linkLabel}>Account</p>}
                    </Button>
                    <Menu 
                        open={menuOpen}
                        keepMounted
                        onClose={this.handleClose}
                        anchorEl={menuAnchor}
                    >
                        { !authUser && <MenuItem><Link to='../SignIn' className={classes.link}>Sign In</Link></MenuItem> }
                        { !authUser && <MenuItem><Link to='../SignUp' className={classes.link}>Sign Up</Link></MenuItem> }
                        { authUser && <MenuItem onClick={this.handleSignOut}><SignOutButton className={classes.link} /></MenuItem> }
                    </Menu>
                </div>
                <Snackbar open={snackBar} autoHideDuration={6000} onClose={this.handleSnackClose} className={classes.snackBar}>
                    <Alert onClose={this.handleClose} severity="success">
                        Logout Succesful
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}

export default withRouter(withFirebase(withStyles(styles)(Navbar)));