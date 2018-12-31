/* tslint:disable:jsx-no-lambda */
import * as React from 'react';
import {Route, Switch} from "react-router";
import {Dashboard} from "../components/dashboard/dashboard.component";
import {LoginComponent} from "../components/login/login.component";

export class RoutesComponent extends React.Component {

  public render() {
    return (
      <Switch>
        <Route path="/" exact={true} render={ () => {
          return <Dashboard/>;
        }}/>
        <Route path="/login" render={() => {
          return <LoginComponent/>;
        }} />
      </Switch>
    );
  }
}