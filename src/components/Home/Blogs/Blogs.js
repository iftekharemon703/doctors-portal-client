import React from 'react';
import moment from "moment";
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';

const blogsData = [
    {
        authorImg: wilson,
        authorName: 'Jhon De',
        date: moment().format("DD-MM-YYYY"),
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati libero natus adipisci voluptatem eaque enim tempore, minima quibusdam'
    },
    {
        authorImg: wilson,
        authorName: 'Jhon De',
        date: moment().format("DD-MM-YYYY"),
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati libero natus adipisci voluptatem eaque enim tempore, minima quibusdam'
    },
    {
        authorImg: wilson,
        authorName: 'Jhon De',
        date: moment().format("DD-MM-YYYY"),
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati libero natus adipisci voluptatem eaque enim tempore, minima quibusdam'
    },
]

const Blogs = () => {
    return (
        <section className="blogs">
            <h5 style={{color: '#1CC7C1'}} className="text-uppercase text-center">Our Blog</h5>
            <h2 className="text-center mb-5" style={{color: '#3D4457'}}>From Our Blog News</h2>
            <div className="container">
                <div className="row">
                {
                    blogsData.map(blog => <BlogPost blog={blog}></BlogPost>)
                }
                </div>
            </div>
        </section>
    );
};

export default Blogs;