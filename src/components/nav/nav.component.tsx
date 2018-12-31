import * as React from 'react';
import { NavTileComponent } from "./nav-tile.component";

import './nav.style.scss';

export interface INavComponentProps {
  navigationHandler: (name: string) => void;
  active: string
  tiles: string[];
}

export const NavComponent = (props: INavComponentProps) => {

    // noinspection HtmlUnknownTarget
    return(
      <div className="navigation-wrapper">
        <img src="./static/images/TCLC_Profiles.png" alt="The Commons Law Center Logo" />
        <div>Dashboard</div>
        {props.tiles.map(name => {
          return (
            <NavTileComponent name={name}
                              handler={props.navigationHandler}
                              active={props.active === name}
                              key={name+'Tile'}/>
          );
        })}
      </div>
    )
};