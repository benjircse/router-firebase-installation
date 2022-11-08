import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user}=useFirebase()
    return (
        <div>
            <h2 className='text- danger mx-auto w-25'>{user ? user.displayName :'voooooot'}</h2>
        </div>
    );
};

export default Home;