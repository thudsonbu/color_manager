import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import MiniPalette from './MiniPalette'
import { Link } from 'react-router-dom'
import styles from './styles/PaletteListStyles'
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


class PaletteList extends Component{
    constructor(props){
        super(props);
        this.state = {
            deleteDialog: false,
            editDialog: false,
            deletingId: "",
            editId: "",
        }
        this.openDeleteDialog = this.openDeleteDialog.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.openEditDialog = this.openEditDialog.bind(this);
        this.closeEditDialog = this.closeEditDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    }
    openDeleteDialog(id){
        this.setState({deleteDialog: true, deletingId: id})
    }
    openEditDialog(id){
        this.setState({editDialog: true, editId: id})
    }
    closeDeleteDialog(){
        this.setState({deleteDialog: false, deletingId: ""})
    }
    closeEditDialog(){
        this.setState({editDialog: false, editId: ""})
    }
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    handleDelete(){
        this.props.deletePalette(this.state.deletingId);
        this.closeDeleteDialog();
    }
    handleEdit(){
        let editUrl = `/palette/edit/${this.state.editId}`
        this.props.history.push(editUrl)
        this.closeEditDialog();
    }
    render() {
        const { deleteDialog, editDialog } = this.state
        const { palettes, classes } = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Palette List</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                            <MiniPalette 
                                {...palette} 
                                handleClick={this.goToPalette}                     
                                openDeleteDialog={this.openDeleteDialog}
                                openEditDialog={this.openEditDialog}
                                key={palette.id}
                                id={palette.id}
                            />    
                        </CSSTransition>
                        ))}   
                    </TransitionGroup>
                </div>
                <Dialog 
                    onClose={this.closeDialog}
                    open={deleteDialog} 
                    aria-labelledby='delete-dialog-title'
                >
                    <DialogTitle id='delete-dialog-title'>Delete This Palette?</DialogTitle>
                    <List>
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
                    onClose={this.closeEditDialog}
                    open={editDialog} 
                    aria-labelledby='edit-dialog-title'
                >
                    <DialogTitle id='edit-dialog-title'>Edit This Palette?</DialogTitle>
                    <List>
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
                        <ListItem button onClick={this.closeEditDialog}>
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