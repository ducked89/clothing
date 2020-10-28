import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAG-KgEiObA6iaFRUmN_UYAPQZJQkiA7UQ",
    authDomain: "clothing-db-7b528.firebaseapp.com",
    databaseURL: "https://clothing-db-7b528.firebaseio.com",
    projectId: "clothing-db-7b528",
    storageBucket: "clothing-db-7b528.appspot.com",
    messagingSenderId: "716800343702",
    appId: "1:716800343702:web:ec5546e026c2d1dce0ccb7",
    measurementId: "G-NY9K2FMJFP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;