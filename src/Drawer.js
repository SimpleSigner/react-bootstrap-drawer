
import React from 'react';

// TODO: Change `sidebar-` to `react-bootstrap-drawer-`
export const DrawerToC = (props) => {
	return (
		<div className="sidebar-toc pt-2 pb-4">
			{ props.children }
		</div>
	);
};

export const DrawerOverflow = (props) => {
	return (
		<div className="sidebar-overflow">
			{ props.children }
		</div>
	);
};

export const Drawer = (props) => {
	const className = `sidebar-panel d-flex flex-column ${props.className}`.trim();

	return (
		<div className={ className }>
			{ props.children }
		</div>
	);
};


/*
const Drawer = (props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<>
			<div className={ `sidebar-panel d-flex flex-column ${props.className}` }>
				<Button size="lg" variant="link" className="sidebar-toggle p-0 d-md-none ml-3" onClick={ handleToggle }>
					<List />
				</Button>

				<Collapse in={ open }>
					<div className="sidebar-overflow">
						<div className="sidebar-toc pt-2 pb-4">
							<CoreNavigation />

							<SettingNavigation />

							<Restrict role={ UserRole.APPLICATION_ADMINISTRATOR }>
								<AdministratorNavigation />
							</Restrict>
						</div>
					</div>
				</Collapse>
			</div>
		</>
	);
};
*/

