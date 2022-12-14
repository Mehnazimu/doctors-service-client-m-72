import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;   //treatment is appointment options just different name

    // const date = format(selectedDate, 'PP')
    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" value={format(selectedDate, 'PP')} className="input w-full input-bordered " disabled />
                        <select className="select select-bordered w-full">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="submit"></input>

                    </form>
                </div>
            </div>

        </>

    );
};

export default BookingModal;