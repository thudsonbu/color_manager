import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteFooterStyles'

function PaletteFooter(props){
    return (
        <footer className={props.classes.PaletteFooterClass}>
                <p>{props.paletteName}</p>
                <p className={props.classes.EmojiClass}>{props.emoji}</p>
        </footer>
    )
    
}

export default withStyles(styles)(PaletteFooter)