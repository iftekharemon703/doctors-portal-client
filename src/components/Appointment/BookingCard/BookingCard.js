import React from "react";
import { useState } from "react";
import AppointmentFrom from "../AppointmentFrom/AppointmentFrom";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
  return (
    <div className="container col-md-4 col-sm-12 p-4">
      <div className="row  shadow p-4 rounded text-center">
        <h5 style={{color: '#16D2C1'}}>{booking.subject}</h5>
        <h6>{booking.visitingHour}</h6>
        <p>{booking.totalSpace} SPACES AVAILABLE</p>
        <button onClick={openModal} style={{backgroundColor: '#16D2C1'}} className="btn text-white py-2"><b>Book Appointment</b></button>
        <AppointmentFrom date={date} modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject}></AppointmentFrom>
      </div>
    </div>
  );
};

export default BookingCard;
