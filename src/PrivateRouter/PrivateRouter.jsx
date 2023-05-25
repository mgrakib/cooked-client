import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
			<div className='flex items-center justify-center h-[100vh]'>
				<progress className='progress w-56'></progress>
			</div>
		);
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>;
};

export default PrivateRouter;