import './categories.styles.scss';

const App = () => {
	const categories = [
		{
			id: 1,
			title: 'Hats',
		},
		{
			id: 1,
			title: 'Jackets',
		},
		{
			id: 1,
			title: 'Sneakers',
		},
		{
			id: 1,
			title: 'Women',
		},
		{
			id: 1,
			title: 'Men',
		},
	];

	return (
		<div className="categories-container">
			{categories.map(({ title, id }) => (
				<div key={id} className="category-container">
					<div className="background-image" />
					<div className="category-body-container">
						<h2>{title}</h2>
						<p>Shop Now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
