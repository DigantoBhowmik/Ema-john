import React from 'react';
import logo from "../../images/logo.png";
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='img'>
                 <img src={logo} alt="" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;