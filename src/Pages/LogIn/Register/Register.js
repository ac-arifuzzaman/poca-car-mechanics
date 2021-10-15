import React from 'react';
import useAuth from './../../../hooks/useAuth'

const Register = () => {
    const { signinUsingGoogle } = useAuth()
    return (
        <div>
            <h2>please register</h2>
            <button onClick={signinUsingGoogle} className='btn btn-primary'>Google Sign In</button>
        </div>
    );
};

export default Register;