import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import MiniPalette from './MiniPalette'
import { Link } from 'react-router-dom'
import styles from './styles/PaletteListStyles'
import { CSSTransition, TransitionGroup } from "react-transition-group";
<<<<<<< HEAD
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
=======
>>>>>>> parent of d02f223... Added delete confirmation to palette list

class PaletteList extends Component{
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render() {
<<<<<<< HEAD
        const { deleteDialog } = this.state
        const { palettes, classes, } = this.props
=======
        const { palettes, classes, deletePalette, } = this.props
>>>>>>> parent of d02f223... Added delete confirmation to palette list
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
                                handleDelete={deletePalette}
                                key={palette.id}
                                id={palette.id}
                            />    
                        </CSSTransition>
                        ))}   
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)