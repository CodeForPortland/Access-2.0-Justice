import * as React from 'react';

import {SVGs} from "../../commons/svg.list";

export const NavTileComponent = (props: {name: string, active: boolean, handler: (name: string) => void }) => {

  const className = () => {
    const baseClass =  'nav-tile_' + props.name;
    return props.active ? baseClass.concat(' active') : baseClass;
  };

  return (
    <div className={className()}>
      {SVGs[props.name]}
      <span className="nav-tile--label">{props.name}</span>
    </div>
  );
};