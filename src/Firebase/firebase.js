import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseconf';

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        // auth methods
        this.auth = app.auth();
        this.doCreateUserWithEmailAndPassword = this.doCreateUserWithEmailAndPassword.bind(this);
        this.doSignInWithEmailAndPassword = this.doSignInWithEmailAndPassword.bind(this);
        this.doSignOut = this.doSignOut.bind(this);
        // database methods
        this.db = app.firestore();
        this.getPalettes = this.getPalettes.bind(this);
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

    getPalettes(){
        return this.db.collection("defeaultpalettes").get();
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