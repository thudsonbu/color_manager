import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA4fxBa0cZ7ixICby18NdSgbhc3ySHfT5A",
    authDomain: "color-manager.firebaseapp.com",
    databaseURL: "https://color-manager.firebaseio.com",
    projectId: "color-manager",
    storageBucket: "color-manager.appspot.com",
    messagingSenderId: "570569969501",
    appId: "1:570569969501:web:fb78e46001ae766d94e2b4",
    measurementId: "G-QWJQZED2E9"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;