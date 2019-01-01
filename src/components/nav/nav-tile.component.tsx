import * as React from 'react';

import { Link } from "react-router-dom";
import { SVGs } from "../../commons/svg.list";

export interface INavTileComponentProps {
  name: string;
  active: boolean;
}

export const NavTileComponent = (props: INavTileComponentProps) => {

  const className = () => {
    const baseClass =  'nav-tile_' + props.name;
    return props.active ? baseClass.concat(' active') : baseClass;
  };

  return (
    <Link className={className()} to={name}>
      {SVGs[props.name]}
      <span className="nav-tile--label">{props.name}</span>
    </Link>
  );
};