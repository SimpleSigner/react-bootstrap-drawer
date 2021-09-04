import React from 'react';
import { DrawerProps } from './Drawer';

export const DrawerNavigationHeader = (props: DrawerProps) => {
  const { className, ...other } = props;
  const classNameActual = `react-bootstrap-drawer-toc-header nav-link ${
    className || ''
  }`.trim();

  return (
    <a {...other} className={classNameActual}>
      {props.children}
    </a>
  );
};
