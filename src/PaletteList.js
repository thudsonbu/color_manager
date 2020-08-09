import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import MiniPalette from './MiniPalette'

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        fontSize: "12px"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        fontSize: "20px"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    },
}

class PaletteList extends Component{
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
        console.log("potato")
    }
    render() {
        const { palettes, classes, } = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Pallete List</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)