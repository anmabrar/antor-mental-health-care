import React from 'react';
import mental_health_02 from '../../../assets/images/mental_health_02.jpg';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <img src={mental_health_02} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='mr-6 text-center'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You have selected date: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;