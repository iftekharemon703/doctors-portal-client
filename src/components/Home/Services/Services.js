import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/teeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: teeth
    }

];

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center my-md-5">
                <h5 style={{color: '#1CC7C1'}}>Our Services</h5>
                <h2 style={{color: '#383F52'}}>Services We Provide</h2>
            </div>
            <div className="container">
                <div className="row mb-5">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;