import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
	margin-top: 12px;
	width: 145px;
	height: 50px;
	border: 0;
	background: #29a0d3;
	color: #fff;
	font-family: 'Roboto';
	font-weight: 400;
	font-size: 16px;
	transition: background-color 0.2s;

	&:hover {
		background: ${shade(0.2, '#29a0d3')};
	}
`;
