import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            dialogOpen: false,
            newPaletteName: "",
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
            this.props.palettes.every(
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        )
    }
    
    handleClickOpen() {
        this.setState({
            dialogOpen: true,
        })
    };

    handleClose() {
        this.setState({
            dialogOpen: false,
        })
    };

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(){
        this.handleClose();
        this.props.handleSubmit(this.state.newPaletteName);
        this.setState({ newPaletteName: "" })
    }

    render(){
        const { dialogOpen, newPaletteName, } = this.state;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    SAVE PALETTE
                </Button>
                <Dialog open={dialogOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <ValidatorForm onSubmit={this.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
                        <DialogContent>
                            <TextValidator 
                                label="Palette Name" 
                                value={newPaletteName} 
                                name="newPaletteName"
                                onChange={this.handleChange}
                                validators={["required","isPaletteNameUnique"]}
                                errorMessages={["Name Required", "Name Already Used"]}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose}  variant="contained" color="secondary">
                                Cancel
                                </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>    
        )
    }
}


export default PaletteMetaForm