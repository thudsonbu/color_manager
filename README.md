# Color Helper
Color helper is react app that uses the FFRN stack (firebase, firestore, react, node) and helps developers and content creators with keeping track of their color palettes.

# Tech Stack
Color helper runs the the FFRN tech stack where Google's firebase hosts a node server serving a react application, Google's firestore is used for data persistence,
authentication, and real time updates of palettes. The app features a good example of how to integrate firebase into a simple application as a component without data
leaks with both fully functioning authentication, updated listeners, and database triggers.

# How to Use It


![Palette List](https://github.com/thudsonbu/color_manager/blob/master/public/PaletteList.PNG)

### Viewing Palettes
Color helper is currently deployed at https://color-manager.web.app/. At the index route you can find a list of all palettes that are currently saved in the database.
Without logging in, a you can view the palettes others have created and copy colors from each while viewing them. While viewing you can adjust the tint of the color
and also change between RGB, RGBA, and Hex values. When a color box is clicked, the value is coppied to the your clipboard.

![Edit and Create Palettes](https://github.com/thudsonbu/color_manager/blob/master/public/EditAndCreatePalettes.PNG)

### Creating and Editing Palettes
To create a palettes in color helper you must be signed in. Anyone can signup however. From the palette list click the new button in the top left and the palette
creator page will be displayed with a default palette that matches the material ui colors. From there you can add colors, remove colors, name colors, and save the palette
with a unique emoji and name. In order to better compare how to colors look right next to each other, you can also drag and drop colors in edit mode. The final
ordering of colors will be saved. To edit palettes press the edit button on the palette card in the palette list. This will bring you to the same page as if
you were creating a new palette.

# Getting Started
1. Clone this repo
2. `npm install`
3. Setup a firebase project with db and auth in firebase console
4. Install firebase CLI tools
5. `firebase init`
6. Add firebase conf link from firebase console
7. `firebase deploy` (select redirect all requests to index)
