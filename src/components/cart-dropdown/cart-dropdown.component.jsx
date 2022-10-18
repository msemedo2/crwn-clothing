import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items"></div>
			<Button>Checkout</Button>
			{/* <span className="empty-message"></span>
			<span className="cart-items"></span>
			<Button> </Button> */}
		</div>
	);
};

export default CartDropdown;
