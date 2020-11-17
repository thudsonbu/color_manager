import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const SignUpPage = () => (
    <div className='SignupPage'>
        <h1>SignUp</h1>
        <SingUpForm/>
    </div>
);

class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = event => {

    }

    onChange = event => {

    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>

            </form>
        )
    }
}

const SingUpLink = () => {
    <p>
        Don't have an account? <Link to="./SignUp">Sing Up</Link>
    </p>
}

export default {SignUpForm, SignUpLink};