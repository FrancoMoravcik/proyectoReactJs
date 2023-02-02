import * as firebase from "firebase/app"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCAH9QIH40lpyZTP4u1UwQv0SfQ2_hsxno",
    authDomain: "reactfm34880.firebaseapp.com",
    projectId: "reactfm34880",
    storageBucket: "reactfm34880.appspot.com",
    messagingSenderId: "164087429007",
    appId: "1:164087429007:web:b9c7015516a80496173dfa"
})

export function getfirebase() {
    return app
}

export function getfiretore(){
    return firebase.firestore(app)
}