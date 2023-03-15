import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedData }) => {
  const { name, slots } = treatment;
  const date = format(selectedData, 'PP');
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
            {name}
          </h3>
          <form className="grid grid-cols-1 gap-3 mt-10" action="">
            <input type="text" disabled value={date} className="input w-full input-bordered" />
            <select className="select select-bordered w-full">
              <option disabled selected>Which slot you select ?</option>
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" placeholder="Type here" className="input w-full input-bordered" />
            <input type="text" placeholder="Type here" className="input w-full input-bordered" />
            <input type="text" placeholder="Type here" className="input w-full input-bordered" />

            <input className="btn btn-info w-full max-w-xl" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
