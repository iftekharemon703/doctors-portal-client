import React from 'react';
import doctors from '../../../images/appointment.png';
import Doctor from '../Doctor/Doctor';

const doctorsData = [
    {
        img: doctors,
        name: 'Dr. Soikot Imroz',
        phone: '+123567754443'
    },
    {
        img: doctors,
        name: 'Dr. Soikot Imroz',
        phone: '+123567754443'
    },
    {
        img: doctors,
        name: 'Dr. Soikot Imroz',
        phone: '+123567754443'
    },
]

const Doctors = () => {
    return (
        <section className="container my-5">
            <h5 style={{color: '#1CC7C1'}} className="text-center text-uppercase">Our doctor</h5>
            <div className="container">
                <div className="row text-center">
                    {
                        doctorsData.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;