
import React from 'react';

export const DrawerNavigationItem = (props) => {
	const { href } = props;

	return (
		<div className="nav-item">
			<a
				className="nav-link"
				href={ href }>
				{ props.children }
			</a>
		</div>
	);
};

