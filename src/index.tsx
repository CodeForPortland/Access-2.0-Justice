import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import App from './App';

import createBrowserHistory from "history/createBrowserHistory";
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

const TILES: string[] = ['dashboard', 'documents', 'profiles'];
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App tiles={TILES}/>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
