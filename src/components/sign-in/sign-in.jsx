import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase.util.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Clear form only after successful sign in
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error('Error signing in:', error);
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('No user found with this email');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                default:
                    alert('Error signing in');
            }
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton 
                            type="button" 
                            onClick={signInWithGoogle} 
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;