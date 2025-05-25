import React from "react";
import { ReactComponent as Logo } from '../../components/Asset/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util.js';
import { connect } from 'react-redux';

import './header.scss';
import CartIcon from "../cart/cart-icon.jsx";

const Header = ({ currentUser }) => (
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
            <CartIcon />
        </div>
    </div>

);
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);