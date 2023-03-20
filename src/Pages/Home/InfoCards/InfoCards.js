import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {

    const cardData =[
        {
            id: 1,
            name: 'Opening Hour',
            description:'Open 9.00am to 5.00pm everyday.',
            icon: clock,
            bgColor: 'bg-info'
        },
        {
            id: 2,
            name: 'Our location',
            description:'Green Road, Dhaka',
            icon: marker,
            bgColor: 'bg-info'
        },
        {
            id: 3,
            name: 'Contact Us',
            description:'01521332925',
            icon: phone,
            bgColor: 'bg-info'
        },
    ]
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card =><InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;