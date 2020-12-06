import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from '../Firebase';

// the FirebaseContext.Consumer makes the firebase module available

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
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
    const{username, email, passwordOne} = this.state;
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    // check if the input to the form is valid (form button will be disabled)
    const isInvalid = passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
          required
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          required
        />
        <input  
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          required
        />
        {/* form submit button will be disabled if input is invalid */}
        <button type="submit" disabled={isInvalid}>Sign Up</button>
        {/* display an error message if an error is returned */}
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to="/SignUp">Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };