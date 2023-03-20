import React from 'react';
import coaching from '../../../assets/images/Coaching.png';
import child from '../../../assets/images/Child.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Professional Coaching and Mentorship',
            description: 'Antor is now offering professional counseling and guidance service for individuals seeking career growth and success. ',
            img: coaching
        },
        {
            id: 2,
            name: 'Child Development',
            description: 'Antor can provide the best solution in the path of child development and the IQ Test for children.',
            img: child
        },
        {
            id: 3,
            name: 'Anger Management',
            description: 'Anger management is a psycho-therapeutic program for anger prevention and control. It has been described as deploying anger successfully.',
            img: whitening
        }
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-info uppercase'>Our Services</h3>
                <h2 className='text-xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;