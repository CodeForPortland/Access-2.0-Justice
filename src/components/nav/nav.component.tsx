import * as React from 'react';
import { NavTileComponent } from "./nav-tile.component";

import './nav.style.scss';

export interface INavComponentProps {
  active: string
  tiles: string[];
}

export const NavComponent = (props: INavComponentProps) => {

    // noinspection HtmlUnknownTarget
    return(
      <div className="navigation-wrapper">
        {props.tiles.map(name => {
          return (
            <NavTileComponent name={name}
                              active={props.active === name}
                              key={name+'Tile'}/>
          );
        })}
      </div>
    )
};