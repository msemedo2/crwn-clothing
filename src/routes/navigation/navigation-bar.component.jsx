import { Fragment } from 'react';
import './navigation-bar.styles.scss';
import { Outlet, Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div>Logo</div>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default NavigationBar;
