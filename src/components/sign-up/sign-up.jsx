import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './sign-up.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleChange =(event) => {

        const { name, value } = event.target;
        this.setState({ [name]: value });

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignUp;