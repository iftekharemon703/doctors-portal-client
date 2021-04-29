import React from 'react';
import DentalCareImg from '../../../images/dentalCare.png';

const DentalCare = () => {
    return (
        <section className="container d-flex my-5 pb-5 mb-5">
            <div className="col-md-4">
                <img className="img-fluid" src={DentalCareImg} alt=""/>
            </div>
            <div className="col-md-8 mx-5">
                <h2 style={{color: '#3D4558'}} className="my-5">Exceptional Dental <br/> Care, On Your Terms</h2>
                <p style={{lineHeight: '1.5em'}} className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam. Deleniti a at totam sit repellat, facilis aliquid omnis deserunt itaque porro praesentium provident nulla in velit consequatur ea doloremque maxime aut explicabo ratione mollitia. Cumque sapiente ipsa at amet inventore nihil placeat repudiandae obcaecati dignissimos, tempore voluptatem necessitatibus fugit impedit corporis sequi? Voluptas, possimus ut quam voluptatem nobis nesciunt unde repudiandae, adipisci placeat incidunt assumenda beatae aspernatur quis excepturi ipsum provident optio ea, suscipit facilis odio. Sit qui impedit porro</p>
                
                <button style={{backgroundColor: '#15D2C9'}} className="btn btn-primary mt-5">Learn more</button>
            </div>
        </section>
    );
};

export default DentalCare;