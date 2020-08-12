import React from 'react'

function PaletteFooter(props){
    return (
        <footer className="Palette-footer">
                <p>{props.paletteName}</p>
                <p className="Emoji">{props.emoji}</p>
        </footer>
    )
    
}

export default PaletteFooter