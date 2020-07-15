import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
	Container,
	TextContainer,
	Title,
	FormAreaContainer,
	TextFormArea,
	BackToLoginText,
	Error,
} from './styles';

const Register = () => {
	const history = useHistory();

	const [inputError, setInputError] = useState('');

	const handleSubmit = useCallback(
		async (data) => {
			try {
				const schema = Yup.object({
					name: Yup.string().required('Name is required'),
					email: Yup.string()
						.required('Email is required')
						.email('Submit a valid email'),
					password: Yup.string().min(6, 'At least 6 digits'),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				const { name, email, password } = data;

				await api.post('/users', { name, email, password });

				history.push('/');
			} catch (err) {
				setInputError('An error has occurred');
			}
		},
		[history],
	);

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
				<Form onSubmit={handleSubmit}>
					<Input name="name" type="text" placeholder="Name" />

					<Input name="email" type="text" placeholder="Email Address" />

					<Input name="password" type="password" placeholder="Password" />

					<Button type="submit">Done</Button>

					{inputError && <Error>{inputError}</Error>}
				</Form>

				<Link to="/">
					<BackToLoginText>Back to Login</BackToLoginText>
				</Link>
			</FormAreaContainer>
		</Container>
	);
};

export default Register;
