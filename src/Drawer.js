
import React from 'react';

// TODO: Change `sidebar-` to `react-bootstrap-drawer-`
export const DrawerToC = (props) => {
	const { className, ...other } = props;
	const classNameActual = `react-bootstrap-drawer-toc pt-2 pb-4 ${className || ''}`.trim();

	return (
		<div
			{ ...other }
			className={ classNameActual }>
			{ props.children }
		</div>
	);
};

export const DrawerOverflow = (props) => {
	const { className, ...other } = props;
	const classNameActual = `react-bootstrap-drawer-overflow ${className || ''}`.trim();

	return (
		<div
			{ ...other }
			className={ classNameActual }>
			{ props.children }
		</div>
	);
};

export const Drawer = (props) => {
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

