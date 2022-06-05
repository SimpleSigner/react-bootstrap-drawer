
import React from 'react';

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

