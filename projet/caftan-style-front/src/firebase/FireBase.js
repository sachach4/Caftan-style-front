import * as firebase from"firebase"
// import "firebase/storage";
//import firestore from"firebase/firestore"
import "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

//init firebase
firebase.initializeApp(firebaseConfig);
const refStorage=firebase.storage().ref("image_produit"+"fileName");
const fireAuth=firebase.auth()

export {fireAuth,firebase ,refStorage as default};