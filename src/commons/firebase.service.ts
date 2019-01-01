/* tslint:disable:no-console */
import * as firebase from "firebase/app";

// Add additional services that you want to use
import  "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  messagingSenderId: string;
  projectId: string;
  storageBucket: string;
}

const config: IFirebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG_JSON as string) ;

console.log(config);

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
