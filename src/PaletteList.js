import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import MiniPalette from './MiniPalette'
import { Link } from 'react-router-dom'
import styles from './styles/PaletteListStyles'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText } from '@material-ui/core';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";



class PaletteList extends Component{
    constructor(props){
        super(props);
        this.state = {
            deleteDialog: false,
            deletingId: "",
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    openDialog(id){
        this.setState({deleteDialog: true, deletingId: id})
    }
    closeDialog(){
        this.setState({deleteDialog: false, deletingId: ""})
    }
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    handleDelete(){
        this.props.deletePalette(this.state.deletingId);
        this.closeDialog();
    }
    render() {
        const { deleteDialog, deletingId } = this.state
        const { palettes, classes, deletePalette, } = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Pallete List</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                            <MiniPalette 
                                {...palette} 
                                handleClick={() => this.goToPalette(palette.id)}
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
                    open={deleteDialog} 
                    aria-labelledby='delete-dialog-title'
                >
                    <DialogTitle id='delete-dialog-title'>Delete This Palette</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Delete
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
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