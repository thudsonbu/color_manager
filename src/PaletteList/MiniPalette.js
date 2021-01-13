import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./MiniPaletteStyles";

import Button from "@material-ui/core/Button";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
    this.editPalette = this.editPalette.bind(this);
  }
  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id, "Delete");
  }
  editPalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id, "Edit");
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick, id } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ));
    return (
      <div className={classes.root}>
        <div className={classes.titleContainer} onClick={() => handleClick(id)}>
          <h5 className={classes.title}>
            {paletteName} <span className={classes.emoji}>{emoji}</span>
          </h5>
        </div>
        <div className={classes.colors} onClick={() => handleClick(id)}>
          {miniColorBoxes}
        </div>
        <div className={classes.buttons}>
          <Button
            className={classes.editButton}
            size="small"
            onClick={this.editPalette}
          >
            Edit
          </Button>
          <Button
            className={classes.viewButton}
            size="small"
            color="primary"
            onClick={() => handleClick(id)}
          >
            View
          </Button>
          <Button
            className={classes.deleteButton}
            size="small"
            color="secondary"
            onClick={this.deletePalette}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
