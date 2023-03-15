import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

class Home extends Component {
    render() {
        return (
            <div className='mx-5'>
                <Banner></Banner>
                <InfoCards></InfoCards>
                <Services></Services>
                <MakeAppointment></MakeAppointment>
                <Testimonial></Testimonial>
            </div>
        );
    }
}

export default Home;