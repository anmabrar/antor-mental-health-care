import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedData, setSelectedData }) => {
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='mr-6 text-center'>
                        <DayPicker
                            mode="single"
                            selected={selectedData}
                            onSelect={setSelectedData}
                        />
                        <p>You have selected date: {format(selectedData, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;