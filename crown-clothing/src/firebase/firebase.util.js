import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0FG0OXaUH_GigVnmOdhX7m-0nz1ERYkI",
  authDomain: "crwn-db-479c6.firebaseapp.com",
  databaseURL: "https://crwn-db-479c6.firebaseio.com",
  projectId: "crwn-db-479c6",
  storageBucket: "crwn-db-479c6.appspot.com",
  messagingSenderId: "94048085133",
  appId: "1:94048085133:web:7738935ba7390f41",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
