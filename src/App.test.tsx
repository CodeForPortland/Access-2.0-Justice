import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App tiles={['test', 'foo']}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
