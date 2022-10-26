import { useDispatch, useSelector } from 'react-redux';

import './product-card.styles.scss';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add
			</Button>
		</div>
	);
};

export default ProductCard;
