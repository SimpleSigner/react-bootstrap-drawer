import React from 'react';
import { DrawerProps } from './Drawer';

export interface DrawerNavigationProps extends DrawerProps {
  href?: string;
}

export const DrawerNavigationItem = React.forwardRef(
  (props: DrawerNavigationProps, ref) => {
    const { href } = props;

    return (
      <div className="nav-item">
        <a className="nav-link" href={href}>
          {props.children}
        </a>
      </div>
    );
  }
);
