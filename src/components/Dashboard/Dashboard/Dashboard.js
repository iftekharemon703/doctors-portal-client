import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date.toDateString())
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({date: selectedDate})
    })
    .then(res => res.json())
    .then(data => setAppointments(data));
    }, [selectedDate])

    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100%'
    }

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>  
        </section>
    );
};

export default Dashboard;