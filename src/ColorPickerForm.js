import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles"
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem",
    },
    addColorButton: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "1.5rem",
    },
    colorNameInput: {
        width: "100%",
    }
} 

class ColorPickerForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentColor: "orange",
            newColorName: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }  
    

    componentDidMount(){
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
            this.props.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        )
        ValidatorForm.addValidationRule('isColorUnique', (value) => 
            this.props.colors.every(
                ({color}) => color !== this.state.currentColor
            )
        )
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    updateCurrentColor(newColor){
        this.setState({ currentColor: newColor.hex, });
    }

    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName,
        }
        this.props.handleAdd(newColor);
        this.setState({
            newColorName: ""
        })
    }

    render() {
        const { newColorName, currentColor } = this.state;
        const { paletteFull, classes } = this.props;
        return(
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        className={classes.colorNameInput} 
                        variant="filled"
                        value={newColorName}
                        name="newColorName"
                        margin="normal"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Required", "Color Name Used", "Color is Used"]}
                    />
                    <Button
                        className={classes.addColorButton}
                        variant="contained" 
                        color="primary" 
                        style={{backgroundColor: paletteFull? "lightgrey" : currentColor}}
                        type="submit"
                        disabled={paletteFull}
                    >
                        {paletteFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);