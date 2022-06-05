
# react-bootstrap-drawer

## Support

This component was pulled from code written against react-bootstrap / Bootstrap 4. As such, only 4 is currently supported.

| Bootstrap Version | react-bootstrap Version | react-boostrap-drawer Version |
| --- | --- | --- |
| 3 | 0.33.1 | N/A |
| 4 | 1.6.x | 1.0.1 |
| 5 | 2.4.0 | N/A |

## Usage

### Quick Start

```javascript
import 'react-bootstrap-drawer/lib/style.css';
import React, { useState } from 'react';
import {
	Col,
	Collapse,
	Container,
	Row,
} from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';

const ApplicationDrawer = (props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<Drawer { ...props }>
			<Drawer.Toggle onClick={ handleToggle } />

			<Collapse in={ open }>
				<Drawer.Overflow>
					<Drawer.ToC>
						<Drawer.Header href="/">Application</Drawer.Header>

						<Drawer.Nav>
							<Drawer.Item href="/settings">Settings</Drawer.Item>
						</Drawer.Nav>
					</Drawer.ToC>
				</Drawer.Overflow>
			</Collapse>
		</Drawer>
	);
};

const Application = (props) => {
	return (
		<Container fluid>
			<Row className="flex-xl-nowrap">
				<Col as={ ApplicationDrawer } xs={ 12 } md={ 3 } lg={ 2 } />
				<Col xs={ 12 } md={ 9 } lg={ 10 }>{ props.children }</Col>
			</Row>
		</Container>
	);
};
```

### Customization

Note: One can use either `Drawer.Component` or `DrawerComponent` similar to `react-bootstrap` imports.

One can break-down usage into three core elements. The page in which the drawer resides, the drawer inside of the page, and the navigation inside of the drawer.

```javascript
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

```javascript
// CustomComponent.js
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

```javascript
// CustomPage.js
import 'react-bootstrap-drawer/src/style.css';
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

