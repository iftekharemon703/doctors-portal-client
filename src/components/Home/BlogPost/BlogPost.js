import React from "react";

const BlogPost = (props) => {
    const {authorImg, authorName, date, title, description} = props.blog;

  return (
    <div class="container col-md-4 col-sm-12 p-4">
        <div className="row shadow p-4 rounded">
            <div className="col-md-3">
                <img src={authorImg} alt=""/>
            </div>
            <div className="col-md-9 py-4 px-5">
                <h6>{authorName}</h6>
                <p>{date}</p>
            </div>
            <h5 className="py-3">{title}</h5>
            <p className="text-secondary">{description}</p>
        </div>
    </div>
  );
};

export default BlogPost;
