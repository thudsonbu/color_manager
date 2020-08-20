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
import styles from './styles/NewPaletteFormStyles';
import PaletteMetaForm from './PaletteMetaForm';
import PaletteNotFound from './PaletteNotFound';
import { colors } from "@material-ui/core";

class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    }
    constructor(props){
        super(props)
        this.state = {
            drawerOpen: true,
            colors: this.getColors(),
            oldPaletteId: this.getOldId(),
            newPaletteName: "",
            randomColor: this.genRandomColor(),
        }
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.clearColors = this.clearColors.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.genRandomColor = this.genRandomColor.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
        this.getColors = this.getColors.bind(this);
        this.getOldId = this.getOldId.bind(this);
    }

    getColors(){
        try {
            let colors = this.props.palette.colors
            return colors;
        } catch(e) {
            return {};
        }
    }

    getOldId(){
        try {
            let oldPaletteId = this.props.palette.id;
            return oldPaletteId;
        } catch(e) {
            return "";
        }
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
        if(this.props.editing){
            this.props.saveEditedPalette(newPalette, this.state.oldPaletteId);
        } else {
            this.props.savePalette(newPalette);
        }
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

    genRandomColor(){
        const allColors = this.props.palettes.map(p => p.colors).flat();
        var randNum = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[randNum];
        return randomColor;
    }

    addRandomColor(){
        this.addNewColor(this.state.randomColor);
        let newRand = this.genRandomColor();
        this.setState({randomColor: newRand});
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }))
    }

    render() {
        const { classes, maxColors, palettes, editing, palette} = this.props;
        const { drawerOpen, colors, randomColor, stage } = this.state;
        const paletteFull = colors.length >= maxColors;
        try {
            return (
                <div className={classes.root}>
                    <PaletteFormNav 
                        stage={stage}
                        drawerOpen={drawerOpen}
                        palettes={palettes}
                        handleSubmit={this.handleSubmit}
                        handleDrawerOpen={this.handleDrawerOpen}
                        editing={editing}
                        paletteName={palette.paletteName}
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
                                    <div className={classes.metaFormMobile}>
                                        <PaletteMetaForm
                                            className={classes.savePaletteButtonMobile} 
                                            palettes={palettes}
                                            handleSubmit={this.handleSubmit}
                                            editing={editing}
                                            paletteName={palette.paletteName}
                                        />
                                    </div>
                                    <Button
                                        className={classes.randomColorButton}
                                        variant="contained" 
                                        color="primary"
                                        onClick={this.addRandomColor}
                                        disabled={paletteFull}
                                        style={{backgroundColor: paletteFull? "lightgrey" : randomColor.color}}>
                                        {paletteFull ? "Palette Full" : "Random Color"}
                                    </Button>
                                </div>
                                <ColorPickerForm 
                                    handleAdd={this.addNewColor}
                                    paletteFull={paletteFull}
                                    colors={colors}
                                    randomColor={randomColor}
                                    addRandomColor={this.addRandomColor}
                                    editing={editing}
                                    paletteName={palette.paletteName}
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
                            pressDelay={200}
                        /> 
                    </main>
                </div>
            );
        } catch(e){
            return (
                <PaletteNotFound />
            )
        }
    }
        
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);





