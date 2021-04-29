import React from "react";
import appointmentImg from "../../../images/appointment.png";
import './MakeAppointment.css';

const MakeAppointment = () => {
  return (
    <section className="appointment my-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={appointmentImg} alt="" />
          </div>
          <div className="col-md-8 mt-5 pt-5 px-5">
            <h4 style={{ color: "#15D2C9" }}>Appointment</h4>
            <h2 style={{ color: "#3A4357" }} className="py-2 text-white">
              Make an appointment Today
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              deserunt aliquam blanditiis, suscipit labore perspiciatis quia!
              Dolores esse labore cumque!
            </p>
            <button
              style={{ backgroundColor: "#15D2C9" }}
              className="btn btn-primary mt-3"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
