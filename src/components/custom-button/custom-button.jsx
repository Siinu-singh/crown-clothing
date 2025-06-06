import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={ ` ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${inverted ? 'inverted' : ''}` }
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;