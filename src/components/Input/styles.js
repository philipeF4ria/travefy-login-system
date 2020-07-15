import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;

	background: #fafafa;
	height: 50px;
	width: 100%;
	padding: 8px;
	border: 1px solid #919191;

	& + div {
		margin-top: 8px;
	}

	input {
		flex: 1;
		background: transparent;
		border: 0;

		color: #595656;
		font-size: 16px;
	}
`;
