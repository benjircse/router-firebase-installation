import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase-inte';
const auth= getAuth(app)
const RequerAuth = ({children}) => {
    const [user]=useAuthState(auth)
    const location=useLocation()
    if(!user){
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return children
};

export default RequerAuth;