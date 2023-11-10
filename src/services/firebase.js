// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyC2ZeDNoZ5X25W6liK0bHbcGfUOipLvjIo",
    authDomain: "shibasfofineos.firebaseapp.com",
    databaseURL: "https://shibasfofineos-default-rtdb.firebaseio.com",
    projectId: "shibasfofineos",
    storageBucket: "shibasfofineos.appspot.com",
    messagingSenderId: "172299408180",
    appId: "1:172299408180:web:123f03804063bdcfeb0b61",
    measurementId: "G-Z1356ZFXKS"
  };
  

  var firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  
  var db = firebaseApp.firestore();
  

  export { db }
  export default db