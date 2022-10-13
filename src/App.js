import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation-bar.component';
import SignIn from './routes/sign-in/sign-in.component';

import Home from './routes/home/home.component';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<Home />} />
				{/* <Route index element={<Shop />} /> */}
				<Route path="signIn" element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
