import React from "react";
import { ReactComponent as Logo } from '../../components/Asset/crown.svg';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.util.js';

import './header.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
             : 
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            }
        </div>
    </div>
);

export default Header;