import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
	Container,
	TextContainer,
	Title,
	Description,
	LoginAreaContainer,
	TextLoginArea,
	RegisterText,
	Error,
} from './styles';

const Login = () => {
	const formRef = useRef(null);
	const [inputError, setInputError] = useState('');

	const handleSubmit = useCallback(async (data) => {
		try {
			const schema = Yup.object({
				email: Yup.string()
					.required('Email is required')
					.email('Submit a valid email'),
				password: Yup.string().required('Password is required'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			const { email, password } = data;

			await api.post('/sessions', { email, password });
		} catch (err) {
			setInputError('Login failed. Try again later.');
		}
	}, []);

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

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input name="email" type="text" placeholder="Email" />
					<Input name="password" type="password" placeholder="Password" />

					<Button type="submit">Login</Button>

					{inputError && <Error>{inputError}</Error>}
				</Form>

				<Link to="/register">
					<RegisterText>Create a free account</RegisterText>
				</Link>
			</LoginAreaContainer>
		</Container>
	);
};

export default Login;
