
import React from 'react';

export const DrawerNavigationHeader = (props) => {
	return (
		<a className="sidebar-toc-header nav-link">{ props.children }</a>
	);
};

export const DrawerNavigation = (props) => {
	return (
		<div className="nav d-block">
			{ props.children }
		</div>
	);
};

