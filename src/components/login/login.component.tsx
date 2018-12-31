import * as React from 'react';
import { ReactElement } from "react";
import { FirebaseService } from "../../commons/firebase.service";
import { SVGs } from "../../commons/svg.list";

import './login.style.scss';

export class LoginComponent extends React.Component {
  private _FB: FirebaseService = new FirebaseService();

  public render(): ReactElement<HTMLDivElement> {
    return(
      <div className="LoginForm">
        <h1>Please Login</h1>
        <button className="Button--GoogleSignIn no-underline near-white bg-animate bg-dark-blue hover-bg-gray inline-flex items-center ma2 tc br2 pa0" onClick={this._FB.signInWithGoogle}>
          <div className="dib h3 w3 pa1 bg-white">
            {SVGs.google}
          </div>
        <span className="f6 ml3 pr2">
          Sign in with Google
        </span>
        </button>
      </div>
    );
  }
}