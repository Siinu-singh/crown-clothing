import React from "react";
import { ReactComponent as Logo } from '../../components/Asset/crown.svg';
import { Link } from 'react-router';

import './header.scss';

const Header = () => (
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
        </div>
    </div>
);

export default Header;