/* tslint:disable:no-console member-ordering null null only-arrow-functions */
import * as firebase from "firebase/app";
import {BehaviorSubject} from "rxjs";

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

const config: IFirebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG_JSON as string);

export class FirebaseService {

  private authStateSource = new BehaviorSubject({});

  public firebase = firebase;
  public authState$ = this.authStateSource.asObservable();
  public loaded = false;

  constructor() {
    if (!firebase) {
      console.error('Firebase not loaded');
    } else {
      this.firebase.initializeApp(config);
      this.loaded = true;
    }
    this.firebase.auth().onAuthStateChanged(this.authStateSource);
  }

  public async signInWithGoogle(): Promise<void> {
    this.firebase.auth().getRedirectResult().then(function(result: any) {
      if (result.credential) {
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;
      console.log('token', token);
      }
      const user = result.user;
      console.log('user', user);
    });
    console.log('this', this);
    const GoogleAuthProvider = new this.firebase.auth.GoogleAuthProvider();
    GoogleAuthProvider.setCustomParameters({

    });
    this.firebase.auth().signInWithRedirect(GoogleAuthProvider);
  }

  public async signIn(): Promise<void> {
    await this.signInWithGoogle()
      .catch(res => console.log(res));
  }
}
