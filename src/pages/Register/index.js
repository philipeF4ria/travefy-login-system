import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Button from '../../components/Button';

import {
	Container,
	TextContainer,
	Title,
	FormAreaContainer,
	TextFormArea,
	Form,
	BackToLoginText,
	Error,
} from './styles';

const Register = () => {
	const history = useHistory();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [inputError, setInputError] = useState('');

	function handleInputChange(event) {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	}

	async function handleSubmit(event) {
		const { name, email, password } = formData;

		if (!name || !email || !password) {
			setInputError('It is necessary to enter the data.');
			return;
		}

		try {
			event.preventDefault();

			await api.post('/users', formData);
			setInputError('');
			history.push('/');
		} catch (err) {
			setInputError('Register failed. Try again later.');
		}
	}

	return (
		<Container>
			<TextContainer>
				<Title>
					Give us some of your information to get free access to{' '}
					<strong>Travefy</strong>
				</Title>
			</TextContainer>
			<FormAreaContainer>
				<TextFormArea>
					Create your <strong>account</strong>
				</TextFormArea>
				<Form hasError={!!inputError}>
					<input
						name="name"
						type="text"
						placeholder="Name"
						onChange={handleInputChange}
					/>

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
					Done
				</Button>

				{inputError && <Error>{inputError}</Error>}

				<Link to="/">
					<BackToLoginText>Back to Login</BackToLoginText>
				</Link>
			</FormAreaContainer>
		</Container>
	);
};

export default Register;
