import React from 'react';
import { Link } from 'react-router-dom';

const Service = ( {service}) => {
    const {name, description, img} = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to="/appointment" className="btn btn-info text-white">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;