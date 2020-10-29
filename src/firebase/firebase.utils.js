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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('Error creating user', err.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;