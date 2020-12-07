import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from '@material-ui/styles';
import styles from './DraggableColorBoxStyles';


function DraggableColorBox(props) {
    const { classes, name, handleClick, color} = props;
    return (
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span className={classes.colorName}>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default SortableElement(withStyles(styles)(DraggableColorBox))