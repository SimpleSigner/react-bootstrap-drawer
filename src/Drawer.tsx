
import React from 'react';

import { DrawerNavigationHeader } from './DrawerNavigationHeader';
import { DrawerNavigationItem } from './DrawerNavigationItem';
import { DrawerNavigation } from './DrawerNavigation';
import { DrawerOverflow } from './DrawerOverflow';
import { DrawerToC } from './DrawerToC';
import { DrawerToggle } from './DrawerToggle';

const Drawer = (props) => {
	const { className, ...other } = props;
	const classNameActual = `react-bootstrap-drawer d-flex flex-column ${className || ''}`.trim();

	return (
		<div
			{ ...other }
			className={ classNameActual }>
			{ props.children }
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

