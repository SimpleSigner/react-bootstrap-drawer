import React, { LegacyRef } from 'react';
import { DrawerProps } from './Drawer';

export interface DrawerOverflowProps extends DrawerProps {
  ref: LegacyRef<HTMLDivElement> | undefined;
}
export const DrawerOverflow = React.forwardRef(
  (props: DrawerProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    const { className, ...other } = props;
    const classNameActual = `react-bootstrap-drawer-overflow ${
      className || ''
    }`.trim();

    return (
      <div ref={ref} {...other} className={classNameActual}>
        {props.children}
      </div>
    );
  }
);
