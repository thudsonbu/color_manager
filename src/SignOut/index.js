import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './SignOutStyles';

import { withFirebase } from '../Firebase';

class SignOutButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { classes, firebase } = this.props;
        return (
            <button type="button" className={classes.root} onClick={firebase.doSignOut}>
                SignOut
            </button>
        )
    }
}

export default withFirebase(withStyles(styles)(SignOutButton));