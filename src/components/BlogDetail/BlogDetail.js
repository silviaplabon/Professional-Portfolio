import React from 'react';
import './BlogDetail.css'
const BlogDetail = (props) => {
    const { name, link, image } = props.blog;
    return (
        <div className="col mt-2">
        <div className="card h-100">
          <img src={image} className=" w-100" alt="..." style={{height:'80%'}}/>
          <div className=" d-flex justify-content-between align-items-center mx-1 ">
            <h5 className="card-title mt-3">{name}</h5>
           <a href={link} ><button className="btn btnStyleBlog mt-3 ">Visit</button></a>
          </div>
        </div>
      </div>

    );
};

export default BlogDetail;