import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation-bar.component';

import Home from './routes/home/home.component';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<Home />} />
				{/* <Route index element={<Sho />} /> */}
			</Route>
		</Routes>
	);
};

export default App;
