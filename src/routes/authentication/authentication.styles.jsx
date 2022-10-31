import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
	display: flex;
	max-width: 1000px;
	justify-content: space-between;
	align-items: center;
	margin: 30px auto;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
