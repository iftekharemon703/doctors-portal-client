import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '50px'}} className="img-fluid mt-md-2" src={service.img}/>
            <h4 className="my-4">{service.name}</h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, molestiae.</p>
        </div>
    );
};

export default ServiceDetail;