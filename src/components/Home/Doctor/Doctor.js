import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctor from '../../../images/appointment.png'

const Doctor = (props) => {
    const {img, name, phone} = props.doctor;
    return (
        <div class="container col-md-4 col-sm-12 p-4">
        <div className="row p-4">
            <img style={{height: '200px'}} src={`http://localhost:5000/${doctor.img}`} alt=""/>
            <h6 className="mt-3">{name}</h6>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    </div>
    );
};

export default Doctor;