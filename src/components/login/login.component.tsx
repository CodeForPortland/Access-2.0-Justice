/* tslint:disable:no-console */
import * as React from 'react';
import { ReactElement } from "react";
import { createStore } from "redux";
import { FirebaseService } from "../../commons/firebase.service";
import { SVGs } from "../../commons/svg.list";
import { SigninForm } from "../signinForm/SigninForm"; 
import { loginReducer } from "./login.reducer";

import './login.style.scss';

export class LoginComponent extends React.Component {
  public _FB: FirebaseService  = new FirebaseService();

  constructor(public props: any) {
    super(props);
    this.loginClickHandler = this.loginClickHandler.bind(this);
  }

  public componentDidMount(): void {

    createStore(loginReducer);

    this._FB.authState$.subscribe(res => console.log('obs', res));
  }

  public loginClickHandler(): void {
    this._FB.signIn();
  }

  public render(): ReactElement<HTMLDivElement> {
    return(
      <div className="LoginForm">
        <h1>Please Login</h1>
        <SigninForm />
        <button className="Button--GoogleSignIn no-underline near-white bg-animate bg-dark-blue hover-bg-gray inline-flex items-center ma2 tc br2 pa0"
                onClick={this.loginClickHandler}>
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