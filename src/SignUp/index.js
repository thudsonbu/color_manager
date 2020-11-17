import React, { Component } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onSubmit = (event) => {};

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
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input  
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
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
    Don't have an account? <Link to="./index.js">Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
