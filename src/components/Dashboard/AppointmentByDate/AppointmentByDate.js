import React from 'react';
import AppointmentByShortList from '../AppointmentByShortList/AppointmentByShortList';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointments.length ?
                 <AppointmentByShortList appointments={appointments} ></AppointmentByShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;