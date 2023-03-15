import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';


const Testimonial = () => {
    const reviews =[
        {
            id:1,
            name: 'Sakib Al Hasan',
            photo:people1,
            location:'Dhaka',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id:2,
            name: 'Sakib Al Hasan',
            photo:people2,
            location:'Dhaka',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id:3,
            name: 'Sakib Al Hasan',
            photo:people3,
            location:'Dhaka',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-info font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        user_review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;