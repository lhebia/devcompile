import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const firebaseConfig = {
  apiKey: "AIzaSyCAdWXP5J424XU1j5My4crmY96PZl_8dEQ",
  authDomain: "project-five-ac0be.firebaseapp.com",
  databaseURL: "https://project-five-ac0be.firebaseio.com",
  projectId: "project-five-ac0be",
  storageBucket: "project-five-ac0be.appspot.com",
  messagingSenderId: "920175690406",
  appId: "1:920175690406:web:e9641bcc62998a80e42a67",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// this exports the CONFIGURED version of firebase
export default firebase;
