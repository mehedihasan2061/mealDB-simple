import React from 'react';

import './Header.css'


const Header = () => {
    return (
        <nav className='navbar'>
           <h1>MealDB</h1>
            <div>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;