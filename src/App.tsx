import * as React from 'react';
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";

import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <nav className="nav-container">
          <NavComponent/>
        </nav>
        <main className="content-container">
          <LoginComponent/>
        </main>
      </div>
    );
  }
}

export default App;
