import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';



const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">SHOP</a>
                <a href="/review">ORDER DETAILS</a>
                <a href="/manage">MANAGE INVENTORY</a>
            </nav>
        </div>
    );
};

export default Header;