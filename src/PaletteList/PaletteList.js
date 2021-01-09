import React, { Component } from 'react'

import MiniPalette from './MiniPalette'

import { withStyles } from '@material-ui/core'
import styles from './PaletteListStyles';

import { withFirebase } from '../Firebase';

import { CSSTransition, TransitionGroup } from "react-transition-group";

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Navbar from './PaletteListNav';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class PaletteList extends Component{
    constructor(props){
        super(props);
        this.state = {
            dialog: false,
            signUpDialog: false, 
            operation: "",
            operationId: "",
            error: this.props.error,
            success: "",
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
        this.toggleSignInDialog = this.toggleSignInDialog.bind(this);
    }

    openDialog(id, operation){
        this.setState({dialog: true, operationId: id, operation: operation})
    }

    closeDialog(){
        this.setState({dialog: false, operationId: ""})
    }
    
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }

    handleDelete(){
        this.props.firebase.db.collection('defeaultpalettes').doc(this.state.operationId).delete()
            .then(() => {
                this.setState({
                    success: "Palette Deleted"
                })
            })
            .catch(() => {
                this.setState({
                    error: "Delete Failed"
                })
            })
        this.closeDialog();
    }

    handleEdit(){
        if ( this.props.firebase.authUser ){
            let editUrl = `/palette/edit/${this.state.operationId}`
            this.props.history.push(editUrl);
            this.closeDialog();
        } else {
            this.toggleSignInDialog();
        }
    }

    toggleSignInDialog() {
        this.setState({
            signUpDialog: !this.state.signUpDialog,
        })
    }

    handleSnackClose = () => {
        this.setState({
            error: "",
            success: ""
        })
    };

    render() {

        const { operation, dialog, error, success } = this.state;
        const { palettes, classes, authUser } = this.props;
        const successReported = success === "" ? false : true;
        const errorReported = error === "" ? false : true;

        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <Navbar authUser={authUser}/>
                    <h1 className={classes.title}>
                        Palette List
                    </h1>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                            <MiniPalette 
                                {...palette.data()} 
                                handleClick={this.goToPalette}                     
                                openDialog={this.openDialog}
                                key={palette.id}
                                id={palette.id}
                            />    
                        </CSSTransition>
                        ))}   
                    </TransitionGroup>
                </div>
                <Dialog 
                    onClose={this.closeDialog}
                    open={dialog}
                    operation={operation} 
                    aria-labelledby='dialog-title'
                >
                    <DialogTitle id='dialog-title'>{operation} This Palette?</DialogTitle>
                    <List>
                        {operation === "Delete" &&
                            <ListItem button onClick={this.handleDelete}>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    Delete
                                </ListItemText>
                            </ListItem>
                        }
                        {operation === "Edit" &&
                            <ListItem button onClick={this.handleEdit}>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: green[100], color: green[600]}}>
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    Edit
                                </ListItemText>
                            </ListItem>
                        }
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Cancel
                            </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
                <Dialog 
                    onClose={this.closeDialog}
                    open={dialog}
                    operation={operation} 
                    aria-labelledby='dialog-title'
                >
                    <DialogTitle id='dialog-title'>{operation} This Palette?</DialogTitle>
                    <List>
                        {operation === "Delete" &&
                            <ListItem button onClick={this.handleDelete}>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    Delete
                                </ListItemText>
                            </ListItem>
                        }
                        {operation === "Edit" &&
                            <ListItem button onClick={this.handleEdit}>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: green[100], color: green[600]}}>
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    Edit
                                </ListItemText>
                            </ListItem>
                        }
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Cancel
                            </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
                <Snackbar open={errorReported} autoHideDuration={6000} onClose={this.handleSnackClose} className={classes.snackBar}>
                    <Alert onClose={this.handleSnackClose} severity="error">
                        {error}
                    </Alert>
                </Snackbar>
                <Snackbar open={successReported} autoHideDuration={6000} onClose={this.handleSnackClose} className={classes.snackBar}>
                    <Alert onClose={this.handleSnackClose} severity="success">
                        {success}
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}

export default withFirebase(withStyles(styles)(PaletteList));