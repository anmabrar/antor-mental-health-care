import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone
    }

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking confirmed')
          refetch();
        }
        else{
          toast.error(data.message);
        }
      })


  }
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {treatmentName}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10" action="">
            <input type="text" disabled value={date} className="input w-full input-bordered" />
            <select name="slot" className="select select-bordered w-full">
              {
                slots.map((slot, i) => <option
                  value={slot}
                  key={i}
                >{slot}</option>)
              }
            </select>
            <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
            <input name="email" type="email" defaultValue={user?.email} placeholder="E-mail" className="input w-full input-bordered" />
            <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" />

            <input className="btn btn-info w-full max-w-xl" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
