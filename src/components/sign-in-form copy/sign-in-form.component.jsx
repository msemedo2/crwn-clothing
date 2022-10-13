import { useState } from 'react';

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await signInAuthWithEmailAndPassword(email, password);
			console.log(response);
			resetFormFields();
		} catch (err) {}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className="buttons-container">
					<Button type="submit">Sign Email</Button>
					<Button onClick={signInWithGoogle} buttonType="google">
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
