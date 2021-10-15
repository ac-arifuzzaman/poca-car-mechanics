import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // console.log(service)
    // Service = (props) =>{
    //     const {service} = props;
    const { id, name, img, description, price } = service;
    return (
        <div className='service pb-2'>
            <img className="pt-2" src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-5">{description}</p>
            <Link to={`/Booking/${id}`}>
                <button className='btn btn-primary'>Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;