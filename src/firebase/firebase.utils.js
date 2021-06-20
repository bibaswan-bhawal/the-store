import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAAwxIQ0XeAb1ClgzRf2PBdE3IutSVzyPk",
    authDomain: "the-store-a3126.firebaseapp.com",
    projectId: "the-store-a3126",
    storageBucket: "the-store-a3126.appspot.com",
    messagingSenderId: "1089003467121",
    appId: "1:1089003467121:web:8c5a10f1bf5f1e42f346d0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;