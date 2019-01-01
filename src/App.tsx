/* tslint:disable:no-console jsx-no-lambda */
import * as React from 'react';
import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";
import { RoutesComponent } from "./router/routes.component";

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
  }

  public render() {

    return (
      <div className="App">
        <header className="header-container">
          <HeaderComponent/>
        </header>
        <nav className="nav-container">
          <NavComponent tiles={this.props.tiles}
                        active={this.state.activeTile}/>
        </nav>
        <main className="content-container">
          <RoutesComponent/>
        </main>
      </div>
    );
  }
}

export default App;
