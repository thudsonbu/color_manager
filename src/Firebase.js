import app from 'firebase/app';
import 'firebase/auth';

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
        app.initializeApp(firebaseConfig);
        this.googleAuthProvidor = app.auth.GoogleAuthProvider();
        this.auth = app.auth();
        this.googleLogin = this.googleLogin.bind(this);
    }

    googleLogin(){
        this.auth.signInWithPopup(this.googleAuthProvidor).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    // *** Auth API ***
 
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;