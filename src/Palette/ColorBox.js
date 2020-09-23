import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/styles"
import styles from '../styles/ColorBoxStyles'
import classnames from 'classnames';

class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            copied: false,
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }
    render() {
        const { name, background, paletteId, id, fullBox, classes } = this.props; // unpack props
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.ColorBox}>
                    <div 
                        className={classnames(
                            classes.copyOverlay,
                            {[classes.showOverlay]:copied}
                        )} 
                        style={{backgroundColor: background}}
                    >
                    </div>
                    <div 
                        className={classnames(
                            classes.copyMsg,
                            {[classes.copyMsgShow]:copied}
                        )}
                    >
                        <h1 className={classes.copyText} >Copied!</h1>
                        <p className={classes.copyText} >{background}</p>
                    </div>
                    <div className={classes.copyContainer} style={{backgroundColor: background}}>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                            <button className={classes.copyButton}>Copy</button>
                        { fullBox &&
                            <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()} className={classes.seeMore}>
                                <span className={classes.lightText}>SHADES</span>
                            </Link>
                        }
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)