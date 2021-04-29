import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        subject: 'Teeth Orthodontics', 
        visitingHour: '8:00 AM - 6:00 PM',
        totalSpace: '10'
    },
    {
        subject: 'Teeth Orthodontics', 
        visitingHour: '8:00 AM - 6:00 PM',
        totalSpace: '10'
    },
    {
        subject: 'Teeth Orthodontics', 
        visitingHour: '8:00 AM - 6:00 PM',
        totalSpace: '10'
    },
    {
        subject: 'Teeth Orthodontics', 
        visitingHour: '8:00 AM - 6:00 PM',
        totalSpace: '10'
    },
    {
        subject: 'Teeth Orthodontics', 
        visitingHour: '8:00 AM - 6:00 PM',
        totalSpace: '10'
    },
    {
        subject: 'Teeth Orthodontics', 
        visitingHour: '8:00 AM - 6:00 PM',
        totalSpace: '10'
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 style={{color: '#12D0D5'}} className="text-center mb-5">Available Appointment on {date.toDateString()}</h2>
            <div className="container">
                <div className="row">
                    {
                        bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;