import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button from '../button/button.component';

import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}
	};

	return (
		<PaymentFormContainer>
			<FormContainer>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<Button buttonType="inverted">Pay Now</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
