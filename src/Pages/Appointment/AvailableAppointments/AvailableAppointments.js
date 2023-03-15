import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedData }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="mt-16">
      <p className="text-center font-bold text-info my-16 ">
        Available Appointments on {format(selectedData, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {
        treatment &&
        <BookingModal
          treatment={treatment}
          selectedData = {selectedData}
        ></BookingModal>
      }
    </section>
  );
};

export default AvailableAppointments;
