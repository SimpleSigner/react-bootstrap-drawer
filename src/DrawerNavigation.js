
import React from 'react';

export const DrawerNavigationHeader = (props) => {
	const { className, ...other } = props;
	const classNameActual = `sidebar-toc-header nav-link ${className}`.trim();

	return (
		<a
			{ ...other }
			className={ classNameActual }>
			{ props.children }
		</a>
	);
};

export const DrawerNavigation = (props) => {
	const { className, ...other } = props;
	const classNameActual = `d-block nav ${className}`.trim();

	return (
		<div
			{ ...other }
			className={ classNameActual }>
			{ props.children }
		</div>
	);
};

