import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card bg-base-100 shadow-xl ">
      <div className="card-body text-center ">
        <h2 className="text-2xl text-info font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"}
        </p>
        <div className="card-actions justify-center">
          {/* The button to open modal */}
          <label
            onClick={()=> setTreatment(appointmentOption)} 
            htmlFor="booking-modal" 
            className="btn btn-info text-white">
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
