import { useState } from 'react';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				alert('Email already in use');
			} else {
				console.log('there was an error', err);
			}
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					name="displayName"
					value={displayName}
					required
					onChange={handleChange}
				/>
				<FormInput
					label="Email"
					type="email"
					name="email"
					value={email}
					required
					onChange={handleChange}
				/>
				<FormInput
					label="Password"
					type="password"
					name="password"
					value={password}
					required
					onChange={handleChange}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					required
					onChange={handleChange}
				/>
				<button type="submit">Sign up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
