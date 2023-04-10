import React from 'react';
import Mental_health_about from '../../assets/images/Mental_health_about.jpg'

const About = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url(${Mental_health_about})` }}></div>
            <div>
                <h1 className="text-3xl text-center my-6 font-bold">Antor Mental Health Care</h1>
                <p className="py-6 mx-36">Antor strives to serve health care services locally and globally. Its goal is to be easily accessible to everyone who needs health support, be it mental or physical. Moreover, it really wants to educate people about mental health, cure mental disorders, and achieve victory over mental illness.</p>
                <hr></hr>
            </div>
        </div>
    );
};

export default About;