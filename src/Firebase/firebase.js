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
        this.auth = app.auth();
        this.doCreateUserWithEmailAndPassword = this.doCreateUserWithEmailAndPassword.bind(this);
        this.doSignInWithEmailAndPassword = this.doSignInWithEmailAndPassword.bind(this);
        this.doSignOut = this.doSignOut.bind(this);
    }

    doCreateUserWithEmailAndPassword(email,password){
        return this.auth.createUserWithEmailAndPassword(email,password);
    }

    doSignInWithEmailAndPassword(email,password){
        return this.auth.signInWithEmailAndPassword(email,password);
    }

    doSignOut(){
        return this.auth.signOut();
    }
  
}

export default Firebase;

        // doCreateUserWithEmailAndPassword = (email, password) =>
        // this.auth.createUserWithEmailAndPassword(email, password);

        // doSignInWithEmailAndPassword = (email, password) =>
        // this.auth.signInWithEmailAndPassword(email, password);

        // doSignOut = () => this.auth.signOut();

        // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

        // doPasswordUpdate = password =>
        // this.auth.currentUser.updatePassword(password);