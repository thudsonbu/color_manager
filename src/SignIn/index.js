import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { SignUpLink } from '../SignUp';

import { withFirebase } from '../Firebase';

import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import styles from './SignInStyles';

const SignInPage = (props) => (
    <div className={props.classes.root}>
        <SignInForm/>
    </div>
)

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null
}

class SignInFormBase extends Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    // update the state every time a value changes
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    // form submit method
    onSubmit = (event) => {
        // unpack variables from event (from form)
        const { email, password } = this.state;
        // attempt SignIn with firebase
        this.props.firebase
            .doSignInWithEmailAndPassword(email,password) // returns promise we will now handle
                // successful authentication
                .then(() => {
                    this.setState({...INITIAL_STATE}); // reset form
                    this.props.history.push('../'); // return to palette list
                })
                // authentication failure
                .catch(error => {
                    this.setState({ error });
                });
        // stop the page from refreshing
        event.preventDefault();
    };

    // render form
    render(){
        // unpack state
        const { email, password, error } = this.state;
        // styles
        const { classes } = this.props;

        return (
            <form onSubmit={this.onSubmit} className={classes.form}>
                <h1 className={classes.title}>Sign In</h1>
                <TextField
                    className={classes.input}
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    label="Email Address"
                    variant="filled"
                />
                <TextField
                    className={classes.input}
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    variant="filled"
                    required
                />
                <button type="submit" className={classes.submit}>Sign In</button>
                {error && <p>error.message</p>}
                <div className={classes.signUpContainer}>
                    <SignUpLink className={classes.signUp}/>
                </div>
            </form>
        )
    }
}

const SignInLink = () => (
    <Link to="/SignIn">SignIn</Link>
)

const SignInForm = withRouter(withFirebase(withStyles(styles)(SignInFormBase)));

export default withStyles(styles)(SignInPage);

export { SignInForm, SignInLink };