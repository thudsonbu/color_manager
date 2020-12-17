import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseconf';

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.doCreateUserWithEmailAndPassword = this.doCreateUserWithEmailAndPassword.bind(this);
        this.doSignInWithEmailAndPassword = this.doSignInWithEmailAndPassword.bind(this);
        this.doSignOut = this.doSignOut.bind(this);
        this.getUser = this.getUser.bind(this);
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

    doPasswordreset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    getUser(){
        var user = this.auth.currentUser;

        if (user) {
            return user;
        } else {
            return null;
        }
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