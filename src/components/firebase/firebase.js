import firebaseConfig from './firebaseConfig';
import app from 'firebase/app';
import 'firebase/auth';

// const db = firebaseApp.firestore();

// export { firebase, firebaseApp, db, googleAuthProvider };

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.googleProvider = new app.auth.GoogleAuthProvider();

        console.log("you are in Firebase constructor");
        console.log("this.auth:", this.auth);
    }    

    doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;