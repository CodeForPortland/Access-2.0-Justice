/* tslint:disable:no-console */
import * as firebase from "firebase/app";

// Add additional services that you want to use
import  "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyDKVx23-RXumPuqP0fOd04VFJAwh8bzfok",
  authDomain: "access2justice-222101.firebaseapp.com",
  databaseURL: "https://access2justice-222101.firebaseio.com",
  messagingSenderId: "494375994655",
  projectId: "access2justice-222101",
  storageBucket: "",
};

export class FirebaseService {

  public loaded = false;

  constructor() {
    if (!firebase) {
      console.error('Firebase not loaded')
    } else {
      firebase.initializeApp(config);
      this.loaded = true;
    }
  }

  public async signInWithGoogle(): Promise<boolean> {
    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const result  = await firebase.auth().signInWithRedirect(GoogleAuthProvider);

    console.log('GOOGLE RESULT', result);

    return true;
  }
}
