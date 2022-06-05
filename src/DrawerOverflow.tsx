
import React from 'react';

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

