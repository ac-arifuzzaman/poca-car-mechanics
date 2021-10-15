import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { ServiceId } = useParams();
    return (
        <div>
            <h2>This is booking: {ServiceId}</h2>
            <br />
            <Link to='/'>
                <button className='btn btn-primary'>Go Home</button>
            </Link>
        </div>
    );
};

export default Booking;