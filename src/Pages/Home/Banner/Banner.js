import React from 'react';
import banner from '../../../assets/images/mental-health.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-cyan-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Antor Mental Health Care</h1>
                    <p className="py-6">Antor strives to serve health care services locally and globally. Its goal is to be easily accessible to everyone who needs health support, be it mental or physical. Moreover, it really wants to educate people about mental health, cure mental disorders, and achieve victory over mental illness.</p>
                   <Link to="/appointment">
                   <button className='btn btn-primary'>Get Started</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;