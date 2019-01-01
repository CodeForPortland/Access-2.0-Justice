/* tslint:disable:no-empty-interface */
import * as React from 'react';
import { ReactElement } from "react";
import { Link } from "react-router-dom";

import './header.style.scss';

export interface IHeaderComponentProps {

}

export interface IHeaderComponentState {

}

export class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState> {

  public render(): ReactElement<HTMLDivElement> {
    return(
      <div className="header-component">
        <img src="./static/images/tclc_logo.png" alt="The Commons Law Center Logo" />
        <Link to="/login">
          <img src="./static/images/tclc_profiles.png" alt="The Commons Law Center Logo" />
        </Link>
      </div>
    )
  }
}