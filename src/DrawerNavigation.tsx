
import React from 'react';

export const DrawerNavigation = (props) => {
	const { className, ...other } = props;
	const classNameActual = `d-block nav ${className || ''}`.trim();

	return (
		<div
			{ ...other }
			className={ classNameActual }>
			{ props.children }
		</div>
	);
};

