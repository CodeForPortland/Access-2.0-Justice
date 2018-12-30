import * as React from 'react';

import './nav.style.scss';

export class NavComponent extends React.Component {
  public render() {
    return(
      <div className="navigation-wrapper">
        <div>Logo</div>
        <div>Dashboard</div>
        <div>Documents</div>
        <div>Profiles</div>
      </div>
    )
  }

}