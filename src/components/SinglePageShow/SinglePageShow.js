import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

import './SinglePageShow.css'
const SinglePageShow = (props) => {
    const state = props.state;
    const content = props.content;
    console.log(props.content)
    console.log(state)
    return (
        <div className="backgroundSingleContent ">
            {
                state == false && content == 'about' &&
                <div className="mb-5">
                    <Header></Header>
                    <div className="  mt-5 mb-5  contentSection">
                        <About></About>
                    </div>
                    <Footer className=""></Footer>
                </div>
            }
            {
                state == false && content == 'contact' && <div className="">
                    <Header></Header>
                    <div className=" mb-5 mt-5 contentSection">
                        <Contact></Contact>

                    </div>
                    <Footer></Footer>
                </div>
            }
            {
                state == false && content == 'projects' &&
                <div className="">
                    <Header></Header>
                    <div className=" mb-5 mt-5  contentSection">
                        <Projects></Projects>
                    </div>
                    <Footer></Footer>
                </div>
            }
            {
                state == false && content == 'blogs' &&
                <div className="">
                    <Header></Header>
                    <div className="mt-5 mb-5  contentSection">
                        <Blogs></Blogs>
                    </div>
                    <Footer></Footer>
                </div>
            }



        </div>
    );
};

export default SinglePageShow;