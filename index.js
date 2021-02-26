// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyDE3LrbqmBK3nJHKKkXaFShhKaQgnII7s4",
    authDomain: "portfolio-marcos.firebaseapp.com",
    projectId: "portfolio-marcos",
    storageBucket: "portfolio-marcos.appspot.com",
    messagingSenderId: "902027262577",
    appId: "1:902027262577:web:214ac94518fc33ed43b9d0",
    measurementId: "G-1C3LHRJRD1"
  }; 
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
