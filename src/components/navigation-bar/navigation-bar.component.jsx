import './navigation-bar.styles.scss';
import { Outlet } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<div>
			<div>
				<h1>I am a Navigation Bar</h1>
			</div>
			<Outlet />
		</div>
	);
};

export default NavigationBar;
