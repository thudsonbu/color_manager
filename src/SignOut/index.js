import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './SignOutStyles';

import { withFirebase } from '../Firebase';


const SignOutButton = (props) => {
    return (
        <button type="button" className={props.classes.root} onClick={props.firebase.doSignOut}>
            SignOut
        </button>
    )
}

export default withFirebase(withStyles(styles)(SignOutButton));