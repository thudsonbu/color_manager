import React, { Component } from 'react';

import { withStyles } from '@material-ui/core'
import styles from './styles/PaletteListStyles'

import withFirebase from './Firebase'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { render } from '@testing-library/react';

class SignUpDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            dialogOpen: false,
            email: '',
            password: '',
            error: false,
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(){
        const { email, password } = this.state;

        this.props.firebase
        .doSignInWithEmailAndPassword(email,password).then(authUser => {
            this.setState({
                dialogOpen: false,
                email: '',
                password: '',
            })
            this.props.history.push('/');
        }).catch(error => {
            console.log(error);
            this.setState({
                error: true,
            })
        })
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    handleOpen(){
        this.setState({
            dialogOpen: true,
        })
    };

    handleClose(){
        this.setState({
            dialogOpen: false,
        })
    };

    render(){
        const { email, password, dialogOpen, error } = this.state;
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                    Login
                </Button>
                <Dialog open={dialogOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To login please enter the email and password given to you by the admin.
                        </DialogContentText>
                        { error && 
                            <DialogContentText>
                                An error has occured please try again later.
                            </DialogContentText>
                        }
                        <TextField
                            value={email}
                            name="email"
                            onChange={this.handleChange}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            value={password}
                            name="password"
                            onChange={this.handleChange}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default withStyles(styles)(SignUpDialog)
