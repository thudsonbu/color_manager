import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";
import styles from "./PaletteListNavStyles";

import { withFirebase } from "../Firebase";

import { withRouter, Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleNewClick = this.handleNewClick.bind(this);
    this.state = {
      menuOpen: false,
      successSnackbar: false,
      failureSnackbar: false,
      user: null,
    };
  }

  handleClose = () => {
    this.setState({
      menuOpen: false,
      menuAnchor: null,
    });
  };

  handleClick = (event) => {
    this.setState({
      menuOpen: true,
      menuAnchor: event.currentTarget,
    });
  };

  handleSnackClose = () => {
    this.setState({
      successSnackbar: false,
      failureSnackbar: false,
    });
  };

  handleSignOut = () => {
    this.handleClose();

    this.props.firebase
      .doSignOut()

      .then(() => {
        this.setState({
          successSnackbar: true,
        });
      })

      .catch(() => {
        this.setState({
          failureSnackbar: true,
        });
      });
  };

  handleNewClick = () => {
    if (this.props.authUser) {
      this.props.history.push("/palette/new");
    } else {
      this.props.toggleSignInDialog();
    }
  };

  render() {
    const { classes, authUser } = this.props;
    const {
      menuOpen,
      menuAnchor,
      successSnackbar,
      failureSnackbar,
    } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.leftNavbar}>
          <div className={classes.logoBox}>
            <Link to="/">
              <span>color</span>helper
            </Link>
          </div>
          <Button className={classes.linkButton} onClick={this.handleNewClick}>
            <AddBoxIcon className={classes.icon} />
            <p className={classes.linkLabel}>New</p>
          </Button>
        </div>
        <div className={classes.rightNavbar}>
          <Button
            edge="start"
            onClick={this.handleClick}
            className={classes.linkButton}
            color="inherit"
            aria-label="menu"
          >
            <AccountBoxIcon className={classes.icon} />
            {authUser && <p className={classes.linkLabel}>{authUser.email}</p>}
            {!authUser && <p className={classes.linkLabel}>Account</p>}
          </Button>
          <Menu
            open={menuOpen}
            keepMounted
            onClose={this.handleClose}
            anchorEl={menuAnchor}
          >
            {!authUser && (
              <MenuItem>
                <Link to="../SignIn" className={classes.link}>
                  Sign In
                </Link>
              </MenuItem>
            )}
            {!authUser && (
              <MenuItem>
                <Link to="../SignUp" className={classes.link}>
                  Sign Up
                </Link>
              </MenuItem>
            )}
            {authUser && menuOpen && (
              <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
            )}
          </Menu>
        </div>
        <Snackbar
          open={successSnackbar}
          autoHideDuration={6000}
          onClose={this.handleSnackClose}
          className={classes.snackBar}
        >
          <Alert onClose={this.handleSnackClose} severity="success">
            Logout Succesful
          </Alert>
        </Snackbar>
        <Snackbar
          open={failureSnackbar}
          autoHideDuration={6000}
          onClose={this.handleSnackClose}
          className={classes.snackBar}
        >
          <Alert onClose={this.handleSnackClose} severity="error">
            Logout Failed
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default withRouter(withFirebase(withStyles(styles)(Navbar)));
