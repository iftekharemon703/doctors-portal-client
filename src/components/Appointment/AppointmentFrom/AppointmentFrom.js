import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentFrom = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date.toDateString();
    data.created = new Date();
    
    fetch('http://localhost:5000/addAppointment', {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert('appointment successfully created')
      }
    })
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: "#1CC7C1" }} className="text-center">
          {appointmentOn}
        </h2>
        <p class="text-center text-secondary">On{date.toDateString()}</p>

        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group my-4">
            <input
              {...register('name', { required: true})}
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            {errors && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group my-4">
            <input
              {...register('phone', { required: true})}
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control"
            />
            {errors && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group my-4">
            <input
              {...register('email', { required: true})}
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
            />
            {errors && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group row my-4">
            <div className="col-4">
              <select
                {...register('gender', { required: true})}
                className="form-control"
                name="gender"
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register('age', { required: true})}
                className="form-control"
                name="age"
                placeholder="Your Age"
                type="number"
              />
              {errors && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register('weight', { required: true})}
                className="form-control"
                name="weight"
                placeholder="Weight"
                type="number"
              />
              {errors && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-group my-4 text-end">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentFrom;
