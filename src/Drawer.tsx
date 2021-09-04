import React from 'react';

import { DrawerNavigationHeader } from './DrawerNavigationHeader';
import { DrawerNavigationItem } from './DrawerNavigationItem';
import { DrawerNavigation } from './DrawerNavigation';
import { DrawerOverflow } from './DrawerOverflow';
import { DrawerToC } from './DrawerToC';
import { DrawerToggle } from './DrawerToggle';

export interface DrawerProps {
  className?: string;
  children?: React.ReactNode;
}

// type DrawerType = React.ForwardRefExoticComponent<
//   React.RefAttributes<DrawerProps>
// > &
//   DrawerMembers;
// interface DrawerMembers {
//   Header: React.ForwardRefExoticComponent<React.RefAttributes<DrawerProps>>;
//   Item: React.ForwardRefExoticComponent<React.RefAttributes<DrawerProps>>;
//   Nav: React.ForwardRefExoticComponent<React.RefAttributes<Drawer>>;
//   Overflow: React.ForwardRefExoticComponent<React.RefAttributes<DrawerProps>>;
//   ToC: React.ForwardRefExoticComponent<React.RefAttributes<DrawerProps>>;
//   Toggle: React.ForwardRefExoticComponent<React.RefAttributes<DrawerProps>>;
// }

const Drawer = (props: DrawerProps) => {
  const { className, ...other } = props;
  const classNameActual = `react-bootstrap-drawer d-flex flex-column ${
    className || ''
  }`.trim();

  return (
    <div {...other} className={classNameActual}>
      {props.children}
    </div>
  );
};

Drawer.Header = DrawerNavigationHeader;
Drawer.Item = DrawerNavigationItem;
Drawer.Nav = DrawerNavigation;
Drawer.Overflow = DrawerOverflow;
Drawer.ToC = DrawerToC;
Drawer.Toggle = DrawerToggle;

export { Drawer };
