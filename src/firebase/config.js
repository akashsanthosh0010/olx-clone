import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6_vMjI62FM6woBPojjstNBFJ0XcK4DyA",
    authDomain: "olx-clone-e669b.firebaseapp.com",
    projectId: "olx-clone-e669b",
    storageBucket: "olx-clone-e669b.appspot.com",
    messagingSenderId: "866409813987",
    appId: "1:866409813987:web:7185e3dd289f5653a072d6",
    measurementId: "G-HG178QMW9B"
};


// Use this to initialize the firebase App
export default firebase.initializeApp(firebaseConfig);

//Use these for db & auth
// export const db = firebaseApp.firestore();


