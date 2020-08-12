import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import './ColorBox.css';

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
        const { name, background, paletteId, id, showLink, tallHeight } = this.props; // unpack props
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={`ColorBox ${tallHeight && "bigBox"}`}>
                    <div 
                        className={`copy-overlay ${copied && "show"}`} 
                        style={{backgroundColor: background}}>
                    </div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container" style={{backgroundColor: background}}>
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                            <button className="copy-button">Copy</button>
                        { showLink &&
                            <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()} className='see-more'>
                                <span>MORE</span>
                            </Link>
                        }
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox