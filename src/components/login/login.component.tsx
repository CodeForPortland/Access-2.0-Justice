import * as React from 'react';
import { ReactElement } from "react";
import { FirebaseService } from "../../commons/firebase.service";


export class LoginComponent extends React.Component {
  private _FB: FirebaseService = new FirebaseService();

  public render(): ReactElement<HTMLDivElement> {
    return(
      <div className="LoginForm">
        <button className="Button--GoogleSignIn" onClick={this._FB.signInWithGoogle}>Google SignIn</button>
      </div>
    );
  }
}