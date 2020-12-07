import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';

const SignInPage = () => (
    <div>
        <h1>Sign In</h1>
        <SignInForm/>
        <SignUpLink/>
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
        // check if valid input

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    placeholder="Email Address"
                    required
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    required
                />
                <button type="submit">SignIn</button>
                {error && <p>error.message</p>}
            </form>
        )
    }
}

const SignInLink = () => (
    <Link to="/SignIn">SignIn</Link>
)

const SignInForm = withRouter(withFirebase(SignInFormBase))

export default SignInPage;

export { SignInForm, SignInLink };