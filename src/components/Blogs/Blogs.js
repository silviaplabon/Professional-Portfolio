import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const blogs = [
    {
        name: 'JS Popular Method Of String',
        link: 'https://silviaplabon.medium.com/js-popular-method-of-string-b15a9c8a9839',
        image: 'https://i.ibb.co/WzkTkZ6/javascript.jpg'
    },
    {
        name: 'Var Vs Let Vs Const',
        link: 'https://silviaplabon.medium.com/js-popular-method-of-string-b15a9c8a9839',
        image: 'https://i.ibb.co/2nDX5nf/javascript1or.jpg'
    },
    {
        name: 'Coming Soon',
        link: '',
        image: 'https://i.ibb.co/Cm7ZQjL/javascript2.jpg'
    }
]


const Blogs = (props) => {


    return (
        <div className="container text-white">
            <h4 className="text-center mt-5 mb-5">Blogs</h4>
            <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={3000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass=""
            itemClass="carousel-item-padding-40-px"
            focusOnSelect={true}
            renderDotsOutside={false}
              >
                <div className="ms-3">
                    <div className="card h-100">
                        <img src={blogs[0].image} className=" w-100 h-100" alt="..." style={{ height: '80%' }} />
                        <div className=" d-flex justify-content-between align-items-center mx-1 ">
                            <h5 className="card-title mt-3 " style={{color:'black'}}>{blogs[0].name}</h5>
                            <a href={blogs[0].link} ><button className="btn btnStyleBlog mt-2 mb-2">Visit</button></a>
                        </div>
                    </div>
                </div>
                <div className="ms-3">
                    <div className="card h-100">
                        <img src={blogs[1].image} className=" w-100" alt="..." style={{ height: '80%' }} />
                        <div className=" d-flex justify-content-between align-items-center mx-1 ">
                            <h5 className="card-title mt-3" style={{color:'black'}}>{blogs[1].name}</h5>
                            <a href={blogs[1].link} ><button className="btn btnStyleBlog mt-2 mb-2 ">Visit</button></a>
                        </div>
                    </div>
                </div>
                <div className="ms-3">
                    <div className="card h-100">
                        <img src={blogs[2].image} className=" w-100" alt="..." style={{ height: '80%' }} />
                        <div className=" d-flex justify-content-between align-items-center mx-1 ">
                            <h5 className="card-title mt-3" style={{color:'black'}}>{blogs[2].name}</h5>
                            <a href={blogs[2].link} ><button className="btn btnStyleBlog mt-2 mb-2 ">Visit</button></a>
                        </div>
                    </div>
                </div>
            </Carousel>
            {/* <h4 className="text-center mt-5 text-white mb-5">Blogs</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    blogs.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                }
                </div> */}
        </div>
    );
};

export default Blogs;