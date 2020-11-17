import React, { Component } from 'react'

import MiniPalette from './MiniPalette'
import SignUpDialog from '../Authorization/LoginDialog'

import { withStyles } from '@material-ui/core'
import styles from '../styles/PaletteListStyles'

import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { FirebaseContext } from '../Firebase/index';

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


class PaletteList extends Component{
    constructor(props){
        super(props);
        this.state = {
            deleteDialog: false,
            editDialog: false,
            dialog: false,
            operation: "",
            operationId: "",
            deletingId: "",
            editId: "",
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
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
        this.props.deletePalette(this.state.operationId);
        this.closeDialog();
    }
    handleEdit(){
        let editUrl = `/palette/edit/${this.state.operationId}`
        this.props.history.push(editUrl)
        this.closeDialog();
    }
    render() {
        const { operation, dialog } = this.state
        const { palettes, classes } = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Palette List</h1>
                        <SignUpDialog/>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                            <MiniPalette 
                                {...palette} 
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
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)