import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../images/profilepic.png';
import Typist from 'react-text-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import './HeaderMain.css'
import Blink from 'react-blink-text'



const HeaderMain = () => {
    const [state, setState] = useState(false);
    useEffect(() => {
        document.getElementById('application').addEventListener('mouseenter', function () {
            setState(true);
        })
        document.getElementById('application').addEventListener('mouseleave', function () {
            setState(false);
        })


    })
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12  headerMain mt-5 mb-5 ">

                    {
                        state == true ? <h2 className="mt-5 text-center text-white fw-bold" id="application"> <div className="Application">
                            <Blink color='white' text='I AM SILVIA SATOAR PLABON' fontSize='20'>

                            </Blink>  </div>
                        </h2> :
                            <h2 className="mt-5 text-center text-white" id="application">I AM SILVIA SATOAR PLABON</h2>
                    }
                    <h6 className="text-center text-white"><Typist sentences={['WEB DEVELOPER', 'PROGRAMMER']} loop={true} /></h6>
                    <div className="text-center">
                        <a href="https://drive.google.com/file/d/1AIYBvCQ8PllfECtzfjcT7sGaq5ha7S8H/view" className="text-center">
                            <button data-mdb-ripple-color="primary" className="btn btn-primary btnDownload">
                                <FontAwesomeIcon icon={faDownload} className="me-1" />Download CV</button>
                        </a>
                        <Link to="/projects" className="text-center">
                            <button className="btn btn-primary btnProject ms-2 text-center"> <FontAwesomeIcon icon={faProjectDiagram} className="me-1" />My Project</button></Link>

                    </div>
                </div>

            </div></div>

    );
};

export default HeaderMain;
{/* <div class="section-title">
    <h1><span>My</span> Service<i class="fa fa-rocket"></i></h1>
</div> */}


// .section-title h1::before {
//     position: absolute;
//     bottom: -1px;
//     content: "";
//     left: 50%;
//     margin-left: -35%;
//     width: 70%;
//     height: 2px;
//     border-radius: 100%;
// }
// .section-title h1 {
//     font-size: 30px;
//     margin-bottom: 20px;
//     padding-bottom: 20px;
//     position: relative;
//     display: inline-block;
//     color: #353535;
//     text-transform: uppercase;
// }