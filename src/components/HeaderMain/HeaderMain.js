import React from 'react';
import profilePic from '../../images/profilepic.jpg'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="container">
        <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-7  headerMain mt-5 mb-5 text-white">
                       <h1 className="mt-5">I AM SILVIA SATOAR PLABON</h1>
                       <h6><span></span></h6>
                       <button className="btn btn-primary">Download CV</button>
                       <button className="btn btn-success ms-2 ">My Project</button>
            </div>

        </div></div>

    );
};

export default HeaderMain;