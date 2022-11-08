import { getAuth,signOut} from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase-inte';
import{useAuthState} from 'react-firebase-hooks/auth'
import './Header.css'
const auth=getAuth(app)
const Header = () => {
  const [user]=useAuthState(auth)
    return (
        <div>
          <nav className="link-uix">
            <div className="images-img">
                hi
            </div>
          <div className='uix-container'>
           <Link to='/home'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/order'>Order</Link>
            <Link to='/review'>Review</Link>
           </div>
           <div className="login-section">
           <Link to='/register'>Register</Link>
         
            {
              user?.email?
              <Link onClick={()=>signOut(auth)}>Singout</Link>
              : <Link to='/login'>Login</Link>
              
            }
           </div>
          </nav>

          
        </div>
    );
};

export default Header;