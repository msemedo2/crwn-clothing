import { Routes, Route } from 'react-router';
import CategoriesPreview from '../categories-preview/category-preview.component';

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			{/* <Route path='/hats'></Route>
				<Route path=''></Route>
				<Route path=''></Route> */}
		</Routes>
	);
};

export default Shop;
