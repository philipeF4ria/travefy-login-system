import styled, { css } from 'styled-components';

import registerBackground from '../../assets/register-background.svg';

export const Container = styled.div`
	background: url(${registerBackground}) no-repeat 100% center;
	background-size: cover;
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

export const TextContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin: 32px 0 0 24px;
`;

export const Title = styled.h1`
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 48px;
	color: #e8e8e8;
	height: 71px;
	width: 427px;

	strong {
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		color: #29a0d3;
	}
`;

export const FormAreaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	background: #f3f3f3;
	width: 420px;
	height: 550px;
	margin: 40px 54px 0 0;
	padding: 28px;

	a {
		text-decoration: none;
		margin-top: 40px;
	}
`;

export const TextFormArea = styled.h1`
	font-family: 'Roboto Slab', serif;
	font-size: 36px;
	font-weight: 300;
	color: #595656;

	width: 335px;
	height: 95px;

	strong {
		font-weight: 400;
		color: #29a0d3;
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;

	input {
		width: 300px;
		height: 50px;
		border: 1px solid #636262;
		padding: 10px;
		background: #fff;
		color: #3f3c3c;
		border-radius: 5px 5px 0 0;

		& + input {
			border-top: 0;
			border-radius: 0 0 0 0;

			& + input {
				border-radius: 0 0 5px 5px;
			}
		}

		${(props) =>
			props.hasError &&
			css`
				border-color: #ff391f;
			`}
	}
`;

export const BackToLoginText = styled.strong`
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 20px;
	color: #595656;
`;

export const Error = styled.span`
	display: block;
	margin-top: 8px;
	font-weight: 400;
	font-family: 'Roboto Slab';
	color: #ff391f;
`;
