import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
  const {user ,hendelSingOut}=useFirebase();
  console.log(user)
    return (
        <div>
          <nav className="link-uix">
            <div className="images-img">
                hi
            </div>
          <div className='uix-container'>
           <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/order'>Order</Link>
            <Link to='/review'>Review</Link>
           </div>
           <div className="login-section">
           <Link to='/register'>Register</Link>
         
            {
              user?.email?
              <Link onClick={hendelSingOut}>Singout</Link>
              : <Link to='/login'>Login</Link>
              
            }
             <span className='text-danger'>{ user?.displayName && user.displayName}</span>
           </div>
          </nav>

          
        </div>
    );
};

export default Header;