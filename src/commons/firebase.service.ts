/* tslint:disable:no-console */
import * as firebase from "firebase/app";

// Add additional services that you want to use
import  "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyArzsOBpR3FNIGbf9xG_Qj9zs8_Y85i21A",
  authDomain: "a20j-5112b.firebaseapp.com",
  databaseURL: "https://a20j-5112b.firebaseio.com",
  messagingSenderId: "348707571812",
  projectId: "a20j-5112b",
  storageBucket: "a20j-5112b.appspot.com",
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
