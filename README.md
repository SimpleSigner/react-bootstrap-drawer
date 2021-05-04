
# react-bootstrap-drawer

## Usage

### Quick Start

```
```

### Customization

One can break-down the component into three core elements. The page in which the drawer resides, the drawer inside of the page, and the navigation inside of the drawer.

```
// CustomNavigation.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import {
	DrawerNavigationHeader
	DrawerNavigation,
} from 'react-bootstrap-drawer';

export const CustomNavigation = (props) => {
	return (
		<>
			<DrawerNavigationHeader href="/">An Application</DrawerNavigationHeader>

			<DrawerNavigation>
				{ /* Standard react-bootstrap Nav.Item / Nav.Link */ }
				{ /* Caveat: CSS provides custom styles */ }
				<Nav.Item>
					<Nav.Link href="/">Home</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link href="/settings">Settings</Nav.Link>
				</Nav.Item>
			</DrawerNavigation>
		</>
	);
};
```

```
// CustomComponent.js
import 'react-bootstrap-drawer/src/style.css';
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import {
	Drawer,
	DrawerOverflow,
	DrawerToC,
	DrawerToggle,
} from 'react-bootstrap-drawer';

import CustomNavigation from './CustomNavigation';

export const CustomDrawer = (props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<Drawer className={ props.className }>
			<DrawerToggle onClick={ handleToggle } />

			<Collapse in={ open }>
				<DrawerOverflow>
					<DrawerToC>
						{ /* Your Navigation Goes Here */ }
						<CustomNavigation />
					</DrawerToC>
				</DrawerOverflow>
			</Collapse>
		</Drawer>
	);
};
```

```
// CustomPage.js
import React from 'react';
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';

import CustomDrawer from './CustomDrawer';

export const CustomPage = (props) => {
	return (
		<Container fluid>
			<Row className="flex-xl-nowrap">
				<Col as={ CustomDrawer } xs={ 12 } md={ 3 } lg={ 2 } />
				<Col xs={ 12 } md={ 9 } lg={ 10 }>
					{ props.children }
				</Col>
			</Row>
		</Container>
	);
};
```

## Notes

### References

- [react-bootstrap / Documentation / Example](https://react-bootstrap.github.io/components/alerts)
- [react-bootstrap / Original Source / Components](https://github.com/react-bootstrap/react-bootstrap/blob/984e22702e811467a06dba084f18414adced47b4/www/src/components/Main.js#L67)
- [react-bootstrap / Original Source / Component Usage](https://github.com/react-bootstrap/react-bootstrap/blob/984e22702e811467a06dba084f18414adced47b4/www/src/components/SideNav.js#L189)

### Credit

The real credit goes to the [react-bootstrap](https://github.com/react-bootstrap/) project for performing the development of this component. We have simply reverse-engineered their documents page and their source-code to provide a ready-made component that is as library-agnostic as possible.

