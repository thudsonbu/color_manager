import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from '../Firebase';

import Navbar from '../PaletteList/PaletteListNav';

import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import styles from './SignUpStyles';

// the FirebaseContext.Consumer makes the firebase module available

const SignUpPage = (props) => (
  <div className={props.classes.root}>
    <SignUpForm/>
  </div>
);

// initial state is use to reset form

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onSubmit = (event) => {
    const{email, passwordOne} = this.state;
    // attempt auth with firebase
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => { // if auth succesful set to initial state
          this.setState({...INITIAL_STATE});
          this.props.history.push('../');
        })
        .catch(error => { // if auth fails add error to state
          this.setState({error});
        });

    event.preventDefault(); // stop page rerender
  };

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    // store input states
    const { username, email, passwordOne, passwordTwo, error, } = this.state;
    // unpack classes (material ui)
    const { classes } = this.props;
    // check if the input to the form is valid (form button will be disabled)
    const isInvalid = passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className={classes.root}>
        <Navbar/>
        <form onSubmit={this.onSubmit} className={classes.form}>
          <h1 className={classes.title}>SignUp</h1>
          <TextField
            className={classes.input}
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Username"
            variant="filled"
            size="small"
            required
          />
          <TextField
            className={classes.input}
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email Address"
            variant="filled"
            size="small"
            required
          />
          <TextField
            className={classes.input}
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            variant="filled"
            size="small"
            required
          />
          <TextField
            className={classes.input}
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Password Confirm"
            variant="filled"
            size="small"
            required
          />
          {/* form submit button will be disabled if input is invalid */}
          <button type="submit" disabled={isInvalid} className={classes.submit}>Sign Up</button>
          {/* display an error message if an error is returned */}
          {error && <p>{error.message}</p>}
        </form>
      </div>

    );
  }
}

const SignUpLinkBase = (props) => (
  <p>
    Don't have an account? <Link to="/SignUp" className={props.classes.signUpLink}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(withStyles(styles)(SignUpFormBase)));

const SignUpLink = withStyles(styles)(SignUpLinkBase);

export default withStyles(styles)(SignUpPage);

export { SignUpForm, SignUpLink };