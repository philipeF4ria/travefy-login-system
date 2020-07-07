import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Button from '../../components/Button';

import {
	Container,
	TextContainer,
	Title,
	Description,
	LoginAreaContainer,
	TextLoginArea,
	Form,
	RegisterText,
	Error,
} from './styles';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [inputError, setInputError] = useState('');

	function handleInputChange(event) {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	}

	async function handleSubmit(event) {
		const { email, password } = formData;

		if (!email || !password) {
			setInputError('It is necessary to enter the data.');
			return;
		}

		try {
			event.preventDefault();

			await api.post('/sessions', formData);
			setInputError('');
		} catch (err) {
			setInputError('Login failed. Try again later.');
		}
	}

	return (
		<Container>
			<TextContainer>
				<Title>
					Welcome to <strong>Travefy</strong>
				</Title>
				<Description>
					This is the best platform to organize your trips
				</Description>
			</TextContainer>

			<LoginAreaContainer>
				<TextLoginArea>
					Login to your <strong>account</strong>
				</TextLoginArea>
				<Form hasError={!!inputError}>
					<input
						name="email"
						type="text"
						placeholder="Email Address"
						onChange={handleInputChange}
					/>
					<input
						name="password"
						type="password"
						placeholder="Password"
						onChange={handleInputChange}
					/>
				</Form>
				<Button type="submit" onClick={handleSubmit}>
					Login
				</Button>

				{inputError && <Error>{inputError}</Error>}

				<Link to="/register">
					<RegisterText>Create a free account</RegisterText>
				</Link>
			</LoginAreaContainer>
		</Container>
	);
};

export default Login;
