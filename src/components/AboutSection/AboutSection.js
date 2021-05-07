import React, { useEffect } from 'react';
import './AboutSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const AboutSection = () => {
    useEffect(() => {
        document.getElementById('liSkill').style.display = "none";
        document.getElementById('liFacebook').addEventListener('mouseenter', function () {
            document.getElementById('liSkill').style.display = "block";
        })
        document.getElementById('liFacebook').addEventListener('mouseleave', function () {
            document.getElementById('liSkill').style.display = "none";
        })

        document.getElementById('liWhy').style.display = "none";
        document.getElementById('liInstragram').addEventListener('mouseenter', function () {
            document.getElementById('liWhy').style.display = "block";
        })
        document.getElementById('liWhy').addEventListener('mouseleave', function () {
            document.getElementById('liWhy').style.display = "none";
        })
        document.getElementById('liGood').style.display = "none";
        document.getElementById('liLinkedIn').addEventListener('mouseenter', function () {
            document.getElementById('liGood').style.display = "block";
        })
        document.getElementById('liLinkedIn').addEventListener('mouseleave', function () {
            document.getElementById('liGood').style.display = "none";
        })
        document.getElementById('liBad').style.display = "none";
        document.getElementById('liGithub').addEventListener('mouseenter', function () {
            document.getElementById('liBad').style.display = "block";
        })
        document.getElementById('liGithub').addEventListener('mouseleave', function () {
            document.getElementById('liBad').style.display = "none";
        })
    })
    return (
        // <div className="container">

        //     <div className="row">
        //         <div className="col-md-1">
        //             <ul className="text-white p-0">

        //                 <li id="liFacebook"><FontAwesomeIcon icon={faFacebook} /></li>
        //                 <li className=" border "></li>
        //                     <li className="" id="liSkill">Skill</li>
        //                 <li className="border"></li>
        //                 <li><FontAwesomeIcon id="liInstragram" icon={faInstagram} /></li>
        //                 <li className="border"></li>  
        //                 <li className="" id="liWhy" style={{height:'2rem'}}>Why Me</li>
        //                 <li className="border"></li>
        //                 <li id="liLinkedIn"><FontAwesomeIcon icon={faLinkedin} /></li>
        //                 <li className="half-border border "><li className="" id="liGood" style={{height:'2rem'}}>Good</li></li>
        //                 <li className="border"></li>
        //                 <li id="liGithub"><FontAwesomeIcon icon={faGithub} /></li>
        //                 <li className="half-border border "><li className="" id="liBad" style={{height:'2rem'}}>Bad</li></li>
        //                 <li className="border"></li>
        //             </ul>
        //         </div>
        //         <div className="col-md-11">







        //         <ul className="nav nav-tabs" role="tablist">
		// 						<li role="presentation" className="active"><span className="tooltips">About Me</span><a href="#welcome" role="tab" data-toggle="tab"><i className="fa fa-user"></i></a></li>
		// 						<li role="presentation"><span className="tooltips">My Skill</span><a href="#skill" role="tab" data-toggle="tab"><i className="fa fa-rocket"></i></a></li>
		// 						<li role="presentation"><span className="tooltips">why Me</span><a href="#why" role="tab" data-toggle="tab"><i className="fa fa-question"></i></a></li>
		// 						<li role="presentation"><span className="tooltips">My Vision</span><a href="#vision" role="tab" data-toggle="tab"><i className="fa fa-graduation-cap"></i></a></li>
		// 		</ul>

        //         </div>
        //     </div>
        // </div>
        <></>
    );
};

export default AboutSection;