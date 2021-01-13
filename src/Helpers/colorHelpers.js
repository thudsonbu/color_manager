import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(palette) {
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

  if (!palette) {
    stemPalette = {
      paletteName: "New Palette",
      id: "35hnofkzNUzZskfBUzMa",
      emoji: "🎨",
      colors: [
        { name: "Turquoise", color: "#1abc9c" },
        { name: "Emerald", color: "#2ecc71" },
        { name: "PeterRiver", color: "#3498db" },
        { name: "Amethyst", color: "#9b59b6" },
        { name: "WetAsphalt", color: "#34495e" },
        { name: "GreenSea", color: "#16a085" },
        { name: "Nephritis", color: "#27ae60" },
        { name: "BelizeHole", color: "#2980b9" },
        { name: "Wisteria", color: "#8e44ad" },
        { name: "MidnightBlue", color: "#2c3e50" },
        { name: "SunFlower", color: "#f1c40f" },
        { name: "Carrot", color: "#e67e22" },
        { name: "Alizarin", color: "#e74c3c" },
        { name: "Clouds", color: "#ecf0f1" },
        { name: "Concrete", color: "#95a5a6" },
        { name: "Orange", color: "#f39c12" },
        { name: "Pumpkin", color: "#d35400" },
        { name: "Pomegranate", color: "#c0392b" },
        { name: "Silver", color: "#bdc3c7" },
        { name: "Asbestos", color: "#7f8c8d" },
      ],
    };
  } else {
    const colors = palette.data().colors;
    const name = palette.data().paletteName;
    const id = palette.id;
    const emoji = palette.data().emoji;

    stemPalette = {
      paletteName: name,
      colors: colors,
      id: id,
      emoji: emoji,
    };
  }

  var newPalette = {
    paletteName: stemPalette.paletteName,
    colors: {},
    id: stemPalette.id,
    emoji: stemPalette.emoji,
  };

  console.log(stemPalette);
  console.log(stemPalette.colors);

  // create arrays for each level
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of stemPalette.colors) {
    // create a new scale based on a color (revers it because it comes out backward)
    let scale = generateScale(color.color, 10).reverse();
    // add each new scale to color palette
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}

// helper function to create the scales for each color
function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

// helper function that returns an array of three colors from white, to the
// hex color, to the color darkened by 40% (darker then this is too dark).
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

export { generatePalette };
