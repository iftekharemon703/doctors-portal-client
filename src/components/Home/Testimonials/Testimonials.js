import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]


const Testimonials = () => {
    return (
        <section className="testimonials pb-5">
            <div className="container">
                <h5 className="px-4" style={{color: '#1CC7C1'}}>Testimonial</h5>
                <h2 className="my-4 px-4" style={{color: '#3F475B'}}>What's our patient <br/> say's</h2>
                <div className="container">
                    <div className="row">
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;