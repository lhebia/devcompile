import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "project-five-ac0be.firebaseapp.com",
  databaseURL: "https://project-five-ac0be.firebaseio.com",
  projectId: "project-five-ac0be",
  storageBucket: "project-five-ac0be.appspot.com",
  messagingSenderId: "920175690406",
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// this exports the CONFIGURED version of firebase
export default firebase;
