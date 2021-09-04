import React from 'react';
import { DrawerProps } from './Drawer';

export const DrawerNavigation = (props: DrawerProps) => {
  const { className, ...other } = props;
  const classNameActual = `d-block nav ${className || ''}`.trim();

  return (
    <div {...other} className={classNameActual}>
      {props.children}
    </div>
  );
};
