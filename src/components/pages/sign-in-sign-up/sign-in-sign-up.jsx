import React from 'react';

import './sign-in-sign-up.scss';
import SignIn from '../../sign-in/sign-in.jsx';
import SignUp from '../../sign-up/sign-up.jsx';

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;