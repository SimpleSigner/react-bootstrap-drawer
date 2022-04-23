
import React from 'react';

export const DrawerNavigationHeader = (props) => {
	const { className, ...other } = props;
	const classNameActual = `react-bootstrap-drawer-toc-header nav-link ${className || ''}`.trim();

	return (
		<a
			{ ...other }
			className={ classNameActual }>
			{ props.children }
		</a>
	);
};

