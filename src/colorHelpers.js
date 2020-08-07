import chroma from "chroma-js"

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette){
    // create or output Palette
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    // create arrays for each level 
    for(let level of levels) {
        newPalette.colors[level] = [];
    }
    for(let color of starterPalette.colors){
        // create a new scale based on a color (revers it because it comes out backward)
        let scale = generateScale(color.color, 10).reverse();
        // add each new scale to color palette
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }
    return newPalette
}

// helper function to create the scales for each color
function generateScale( hexColor, numberOfColors){
    return chroma
        .scale(getRange(hexColor))
        .mode("lab")
        .colors(numberOfColors)
}

// helper function that returns an array of three colors from white, to the 
// hex color, to the color darkened by 40% (darker then this is too dark).
function getRange(hexColor) {
    const end = "#fff"
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ]
}

export { generatePalette }