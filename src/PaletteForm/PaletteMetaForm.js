import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { DialogContentText } from '@material-ui/core';
import { Picker } from "emoji-mart";
import { withStyles } from "@material-ui/core/styles";
import styles from './PaletteMetaFormStyles';
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            stage: this.props.stage,
            paletteName: this.props.paletteName
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
        this.handleEmojiSubmit = this.handleEmojiSubmit.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
            this.props.palettes.every(
                (palette) => palette.data().paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isPaletteNameUniqueEditMode', (value) => {
            let invalidInput = this.props.palettes.every(
                (palette) => {
                    if (palette.data().paletteName.toLowerCase() === this.props.paletteName.toLowerCase()){
                        return true;
                    } else if (palette.data().paletteName.toLowerCase() !== value.toLowerCase()){
                        return true;
                    } else {
                        return false;
                    }
                }
            )
            return invalidInput
        });
    }
    
    handleClickOpen() {
        this.setState({
            stage: "nameForm"
        })
    };

    handleClose() {
        this.setState({
            stage: "",
        })
    };

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleNameSubmit(){
        this.setState({
            stage: "emojiForm",
        })
    }

    handleEmojiSubmit(selectedEmoji){
        this.props.handleSubmit({
            paletteName: this.state.paletteName,
            emoji: selectedEmoji.native,
        })
        this.setState({stage: ""});
    }

    render(){
        const { classes, editing } = this.props;
        const { paletteName, stage } = this.state;
        const nameForm = stage === "nameForm"
        const emojiForm = stage === "emojiForm"
        return (
            <div>
                <Button 
                    className={classes.button}
                    variant="contained" 
                    color="primary" 
                    onClick={this.handleClickOpen}>
                    SAVE
                </Button>
                <Dialog
                    open={emojiForm}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="form-dialog-title">Pick An Emoji</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Give your palette an emoji!
                            </DialogContentText>
                            <Picker onSelect={this.handleEmojiSubmit} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose}  variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </DialogActions>
                </Dialog> 
                <Dialog 
                    open={nameForm} 
                    onClose={this.handleClose} 
                    aria-labelledby="form-dialog-title"
                >
                    <ValidatorForm onSubmit={this.handleNameSubmit}>
                        <DialogTitle id="form-dialog-title">Pick A Name</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Give your palette a unique name! This name must not match with other palette names.
                            </DialogContentText>
                            <TextValidator 
                                className={classes.textInput}
                                label="Palette Name" 
                                value={paletteName} 
                                name="paletteName"
                                onChange={this.handleChange}
                                validators={["required",
                                `${editing ? "isPaletteNameUniqueEditMode" : "isPaletteNameUnique"}`]}
                                errorMessages={["Name Required", "Name Already Used"]}
                            />
                        </DialogContent>
                        <DialogActions>
                                <Button onClick={this.handleClose}  variant="contained" color="secondary">
                                    Cancel
                                    </Button>
                                <Button type="submit" variant="contained" color="primary">
                                    Next
                                </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>    
        )
    }
}


export default withStyles(styles, { withTheme: true })(PaletteMetaForm);
