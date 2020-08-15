import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: "flex",
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContent: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        height: "calc(100vh - 64px)",
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    container: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        aligntItems: "center",
    },
    drawerHeaderText: {
        fontsize: "2rem",
        fontWeight: "400",
        textAlign: "center",
    },
    buttons: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    clearPaletteButton: {
        width: "45%",
    },
    randomColorButton: {
        width: "45%",
    }
});

class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    }
    constructor(props){
        super(props)
        this.state = {
            drawerOpen: true,
            colors: this.props.palettes[0].colors,
            newPaletteName: "",
        }
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.clearColors = this.clearColors.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    handleDrawerOpen() {
        this.setState({ drawerOpen: true });
    };

    handleDrawerClose() {
        this.setState({ drawerOpen: false });
    };

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(palette) {
        const newPalette = {
            paletteName: palette.paletteName,
            id: palette.paletteName.toLowerCase().replace(/ /g, "-"),
            colors: this.state.colors,
            emoji: palette.emoji,
        }
        this.props.savePalette(newPalette);
        this.props.history.push("/");
    }

    removeColor(colorName){
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        })
    }

    clearColors(){
        this.setState({
            colors: [],
        })
    }

    addNewColor(newColor) {
        this.setState({
            colors: [...this.state.colors, newColor],
        })
    }

    addRandomColor(){
        const allColors = this.props.palettes.map(p => p.colors).flat();
        var randNum = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[randNum];
        this.setState({colors: [...this.state.colors, randomColor]})
        console.log(allColors);
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }))
    }

    render() {
        const { classes, maxColors, palettes} = this.props;
        const { drawerOpen, colors } = this.state;
        const paletteFull = colors.length >= maxColors;
        return (
            <div className={classes.root}>
                <PaletteFormNav 
                    drawerOpen={drawerOpen}
                    palettes={palettes}
                    handleSubmit={this.handleSubmit}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={drawerOpen}
                    classes={{paper: classes.drawerPaper}}
                >
                
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.drawerContent}>
                        <div className={classes.container}>
                            <h1 className={classes.drawerHeaderText}>Design Your Palet</h1>
                            <div className={classes.buttons}>
                                <Button
                                    className={classes.clearPaletteButton} 
                                    variant="contained" 
                                    color="secondary"
                                    onClick={this.clearColors}>   
                                    Clear Palette
                                </Button>
                                <Button
                                    className={classes.randomColorButton}
                                    variant="contained" 
                                    color="primary"
                                    onClick={this.addRandomColor}
                                    disabled={paletteFull}
                                    style={{backgroundColor: paletteFull? "lightgrey" : this.state.currentColor}}>
                                    {paletteFull ? "Palette Full" : "Random Color"}
                                </Button>
                            </div>
                            <ColorPickerForm 
                                handleAdd={this.addNewColor}
                                paletteFull={paletteFull}
                                colors={colors}
                            />
                        </div>
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: drawerOpen
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <DraggableColorList 
                        colors={colors}
                        removeColor={this.removeColor}
                        axis='xy'
                        onSortEnd={this.onSortEnd}
                    /> 
                </main>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);





