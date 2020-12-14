import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-ib_dpa5I_TmcO83dVltC4SBq_UYvp-g",
    authDomain: "instagram-clone-1c710.firebaseapp.com",
    projectId: "instagram-clone-1c710",
    storageBucket: "instagram-clone-1c710.appspot.com",
    messagingSenderId: "370382203665",
    appId: "1:370382203665:web:d4211719e4249fd5953ab0",
    measurementId: "G-YLXC932EV7"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db,auth,storage}

