/* tslint:disable:no-console jsx-no-lambda */
import * as React from 'react';

import { RoutesComponent } from "./router/routes.component";

import { NavComponent } from "./components/nav/nav.component";

import './App.scss';

export interface IAppProps {
  tiles: string[];
  history?: any;
}

export interface IAppState {
  activeTile: string;
  loggedIn: boolean;
}

class App extends React.Component<IAppProps, IAppState> {

  public state: IAppState = {
    activeTile: 'dashboard',
    loggedIn: false
  };

  constructor(public props: IAppProps) {
    super(props);
    this.navigationHandler = this.navigationHandler.bind(this);
  }

  public navigationHandler(name: string): void {
    this.props.history.push('/' + name);
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
          <RoutesComponent/>
        </main>
      </div>
    );
  }
}

export default App;
