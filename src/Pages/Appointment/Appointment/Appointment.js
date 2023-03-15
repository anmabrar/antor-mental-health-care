import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedData, setSelectedData] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedData={selectedData}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;