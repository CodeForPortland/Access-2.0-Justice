/* tslint:disable:no-console jsx-no-lambda */
import * as React from 'react';
import { NavComponent } from "./components/nav/nav.component";
import { RoutesComponent } from "./router/routes.component";

import './App.scss';

export interface IAppProps {
  tiles: string[];
}

export interface IAppState {
  activeTile: string;
  logedIn: boolean;
}

class App extends React.Component<IAppProps, IAppState> {

  public state: IAppState = {
    activeTile: 'dashboard',
    login: false
  };


  constructor(public props: IAppProps) {
    super(props);
    this.navigationHandler = this.navigationHandler.bind(this);
  }

  public navigationHandler(name: string): void {
    switch(name) {
      case'login':

    }
  }

  public render() {
    return (
      <div className="App">
        <nav className="nav-container">
          <NavComponent tiles={this.props.tiles}
                        active={this.state.activeTile}
                        navigationHandler={this.navigationHandler} />
        </nav>
        <main className="content-container">
          {process.env.REACT_APP_FIREBASE_CONFIG_JSON}
          <RoutesComponent/>
        </main>
      </div>
    );
  }
}

export default App;
