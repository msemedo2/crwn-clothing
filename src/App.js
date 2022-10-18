import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation-bar.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';

import Home from './routes/home/home.component';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
