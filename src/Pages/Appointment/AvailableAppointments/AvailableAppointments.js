import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP');

  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data
    }
  });

  if(isLoading){
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  return (
    <section className="mt-16">
      <p className="text-center text-2xl font-bold text-secondary my-16 ">
        Available Appointments on {format(selectedDate, 'PP')}
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
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch = {refetch}
        ></BookingModal>
      }
    </section>
  );
};

export default AvailableAppointments;
