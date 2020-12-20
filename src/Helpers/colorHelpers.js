 import chroma from "chroma-js"

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(palette){

    /**
     * @summary Takes in a database palette object and generates color gradations (levels) 
     * for a new unpacked palette object that is returned.
     *
     * Description. (use period)
     *
     * @param {type} palette is a palette object in database format.
     *     
     * @return {any} Returns an unpacked palette with all color color gradations
     * 
     */

    var stemPalette = null;

    if (true){
        console.log("Palette Not Found");
        stemPalette = {
            paletteName: "New Palette",
            id: "35hnofkzNUzZskfBUzMa",
            emoji: "🎨",
            colors: [
                { name: "red", color: "#F44336" },
                { name: "pink", color: "#E91E63" },
                { name: "purple", color: "#9C27B0" },
                { name: "deeppurple", color: "#673AB7" },
                { name: "indigo", color: "#3F51B5" },
                { name: "blue", color: "#2196F3" },
                { name: "lightblue", color: "#03A9F4" },
                { name: "cyan", color: "#00BCD4" },
                { name: "teal", color: "#009688" },
                { name: "green", color: "#4CAF50" },
                { name: "lightgreen", color: "#8BC34A" },
                { name: "lime", color: "#CDDC39" },
                { name: "yellow", color: "#FFEB3B" },
                { name: "amber", color: "#FFC107" },
                { name: "orange", color: "#FF9800" },
                { name: "deeporange", color: "#FF5722" },
                { name: "brown", color: "#795548" },
                { name: "grey", color: "#9E9E9E" },
                { name: "lightpurple", color: "#9E9EEE"},
                { name: "bluegrey", color: "#607D8B" }
            ]
        }

    } else {

        console.log("Palette Found");
        const colors = palette.data().colors;
        const name = palette.data().paletteName;
        const id = palette.id;
        const emoji = palette.data().emoji;

        stemPalette = {
            paletteName: name,
            color: colors,
            id: id,
            emoji: emoji,
        }
    }

    var newPalette = {
        paletteName: stemPalette.paletteName,
        colors: {},
        id: stemPalette.id,
        emoji: stemPalette.emoji,
    }

    console.log(stemPalette);
    console.log(stemPalette.colors);
    
    // create arrays for each level 
    for(let level of levels) {
        newPalette.colors[level] = [];
    }
    for(let color of stemPalette.colors){
        console.log(color);
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