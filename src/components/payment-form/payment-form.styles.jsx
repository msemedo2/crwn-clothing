import styled from 'styled-components';
import { CardElement } from '@stripe/react-stripe-js';

export const PaymentFormContainer = styled.div`
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;
	@media (max-width: 900px) {
		min-width: 300px;
	}
`;

export const CardInfo = styled(CardElement)`
	margin-bottom: 20px;
`;
