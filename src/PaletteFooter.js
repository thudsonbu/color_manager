import React from 'react'
import { withStyles } from '@material-ui/styles'

var styles = {
    PaletteFooterClass: {
        backgroundColor: "#ffffff",
        height: "10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        margin: "0 1rem"
    },
    EmojiClass: {
        fontSize: "30px"
    }
}

function PaletteFooter(props){
    return (
        <footer className={props.classes.PaletteFooterClass}>
                <p>{props.paletteName}</p>
                <p className={props.classes.EmojiClass}>{props.emoji}</p>
        </footer>
    )
    
}

export default withStyles(styles)(PaletteFooter)