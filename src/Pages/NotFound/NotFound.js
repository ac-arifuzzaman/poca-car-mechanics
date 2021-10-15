import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <br />
            <Link to="/">
                <button className='btn-primary'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;