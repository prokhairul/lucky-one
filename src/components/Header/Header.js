import React from 'react';
import logo from '../../logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className=' header-nav'>

            <div className='logo'>
                <img src={logo} alt="Apple Logo" />
            </div>

            <div className='logo-text'>
                <h2>Apple Store Official</h2>
            </div>

        </div>
    );
};

export default Header;