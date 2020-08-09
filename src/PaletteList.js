import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PaletteList extends Component{
    render() {
        const { palettes } = this.props
        return(
            <div className="PaletteList">
                <h1>Pallete List</h1>
                {palettes.map(palette => (
                    <h4><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></h4>
                ))}
            </div>
        )
    }
}

export default PaletteList