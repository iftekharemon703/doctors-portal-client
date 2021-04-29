import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="container bg-dark p-5 text-center contact">
            <h5 style={{color: '#50DCE2'}} className=" text-uppercase">Contact us</h5>
            <h2 style={{color: '#fff'}}>Always Contact With Us</h2>
            <div className="col-md-9 mx-auto">
            <form action="" className="mt-5">
                       <div className="form-group mb-4">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-4">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group mb-4">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group mb-4 text-center">
                           <button style={{backgroundColor: '#1CC7C1'}} type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
            </div>
        </section>
    );
};

export default Contact;