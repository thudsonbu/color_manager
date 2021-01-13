import React, { Component } from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { withFirebase } from "../Firebase";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { arrayMove } from "react-sortable-hoc";

import styles from "./PaletteFormStyles";

import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import PaletteMetaForm from "./PaletteMetaForm";
import Error from "../Error";
import Loading from "../Loading";

import starterPalettes from "../Helpers/seedColors";
import allColors from "../Helpers/allColors";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
      newPaletteName: "",
      randomColor: this.genRandomColor(),
      status: "loading",
      metaFormStage: "",
      error: "",
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.genRandomColor = this.genRandomColor.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
    this.getEditPalette = this.getEditPalette.bind(this);
    this.getNewPalette = this.getNewPalette.bind(this);
  }

  componentDidMount() {
    if (this.props.editing) {
      this.getEditPalette();
    } else {
      this.getNewPalette();
    }
  }

  getEditPalette() {
    this.props.firebase
      .findPalette(this.props.paletteID)
      .then((palette) => {
        this.setState({
          id: palette.id,
          emoji: palette.data().emoji,
          colors: palette.data().colors,
          paletteName: palette.data().paletteName,
          status: "loaded",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Palette Not Found",
        });
      });
  }

  getNewPalette() {
    let newPalette = starterPalettes[0];
    this.setState({
      id: null,
      emoji: newPalette.emoji,
      colors: newPalette.colors,
      paletteName: "",
      status: "loaded",
    });
  }

  handleDrawerOpen() {
    this.setState({ drawerOpen: true });
  }

  handleDrawerClose() {
    this.setState({ drawerOpen: false });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(palette) {
    const newPalette = {
      paletteName: palette.paletteName,
      id: this.state.id,
      colors: this.state.colors,
      emoji: palette.emoji,
    };
    if (this.props.editing) {
      this.props.firebase
        .saveEditedPalette(newPalette, newPalette.id)
        .then(() => {
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error: "Save Error",
          });
        });
    } else {
      this.props.firebase
        .saveNewPalette(newPalette)
        .then(() => {
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error: "Save Error",
          });
        });
    }
  }

  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }

  clearColors() {
    this.setState({
      colors: [],
    });
  }

  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
    });
  }

  genRandomColor() {
    var randNum = Math.floor(Math.random() * allColors.colors.length);
    const randomColor = allColors.colors[randNum];
    return randomColor;
  }

  addRandomColor() {
    this.addNewColor(this.state.randomColor);
    let newRand = this.genRandomColor();
    this.setState({ randomColor: newRand });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleSnackClose = () => {
    this.setState({
      error: "",
    });
  };

  render() {
    if (this.state.status === "loading") {
      return <Loading />;
    } else if (this.state.status === "loaded") {
      try {
        const { classes, palettes, editing } = this.props;
        const {
          drawerOpen,
          randomColor,
          stage,
          colors,
          paletteName,
          metaFormStage,
          error,
        } = this.state;
        const errorReported = error === "" ? false : true;
        const paletteFull = colors.length >= 20;

        return (
          <div className={classes.root}>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={drawerOpen}
              classes={{ paper: classes.drawerPaper }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <div className={classes.drawerContent}>
                <div className={classes.container}>
                  <div className={classes.buttons}>
                    <Button
                      className={classes.clearPaletteButton}
                      variant="contained"
                      color="secondary"
                      onClick={this.clearColors}
                    >
                      Clear
                    </Button>
                    <div className={classes.metaFormMobile}>
                      <PaletteMetaForm
                        className={classes.savePaletteButtonMobile}
                        palettes={palettes}
                        handleSubmit={this.handleSubmit}
                        editing={editing}
                        paletteName={paletteName}
                        stage={metaFormStage}
                      />
                    </div>
                    <Button
                      className={classes.randomColorButton}
                      variant="contained"
                      color="primary"
                      onClick={this.addRandomColor}
                      disabled={paletteFull}
                      style={{
                        backgroundColor: paletteFull
                          ? "lightgrey"
                          : randomColor.color,
                      }}
                    >
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
                    paletteName={paletteName}
                  />
                </div>
              </div>
            </Drawer>

            <main
              className={classNames(classes.content, {
                [classes.contentShift]: drawerOpen,
              })}
            >
              <div className={classes.drawerHeader} />
              <DraggableColorList
                colors={colors}
                removeColor={this.removeColor}
                axis="xy"
                onSortEnd={this.onSortEnd}
                pressDelay={200}
              />
            </main>
            <PaletteFormNav
              stage={stage}
              drawerOpen={drawerOpen}
              palettes={palettes}
              handleSubmit={this.handleSubmit}
              handleDrawerOpen={this.handleDrawerOpen}
              editing={editing}
              paletteName={paletteName}
            />
            <Snackbar
              open={errorReported}
              autoHideDuration={6000}
              onClose={this.handleSnackClose}
              className={classes.snackBar}
            >
              <Alert onClose={this.handleSnackClose} severity="error">
                {error}
              </Alert>
            </Snackbar>
          </div>
        );
      } catch (e) {
        return <Error />;
      }
    } else {
      return <Error />;
    }
  }
}
export default withFirebase(
  withStyles(styles, { withTheme: true })(NewPaletteForm)
);
