import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
          <nav className="link-uix">
            <div className="images-img">
                hi
            </div>
          <div className='uix-container'>
           <Link>Home</Link>
            <Link>Shop</Link>
            <Link>Order</Link>
            <Link>Review</Link>
           </div>
           <div className="login-section">
            <Link>Login</Link>
            <Link>Registration</Link>
           </div>
          </nav>

          
        </div>
    );
};

export default Header;