import React from 'react';
import profilePic from '../../images/profilepic.jpg'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    return (
        <div className="aboutSection  container">
            <h3 className="text-white ms-4 ps-1 mt-2">About me</h3>
            <div className="row">
                <div className="col-md-4 col-xs-4 mb-2 imageDiv d-flex justify-content-center align-items-center">
                    <div className="imageSectionAbout  d-flex justify-content-center align-items-center w-75 mt-3">
                        <img src={profilePic} className="img-fluid w-75 pt-1"></img>
                    </div>
                </div>
                <div className="col-md-8 col-xs-8 text-white detailsContainer">
                    <p className="ms-2 me-4 text-justify ">
                    Hello, I’m SILVIA, web-developer.
                    I am a goal-oriented problem solver with energy for web development, 
                    who might want to join a group of similar engineers. I have a lot of involvement in making both legitimate
                     and creative answers for complex web issues. I am exhaustive and exact in all that I do and have a distinct 
                     fascination for innovation and web applications, programming-related undertakings,
                     in addition to the client experience. I have rich experience in web site design & building
                      and customization. Also I am good at
                </p>
              
                {/* <button className="btn btn-outline-primary">HTML</button>
                <button className="btn btn-outline-primary ms-1">CSS</button>
                <button className="btn btn-outline-primary ms-1">Node.js</button>
                <button className="btn btn-outline-primary ms-1">MongoDB</button>
                <button className="btn btn-outline-primary ms-1">Express.js</button>
                <button className="btn btn-outline-primary ms-1">Bootstrap</button> */}
                <br/>
                
                <div className="mt-3 mb-2">
                   <a href="https://www.linkedin.com/in/silviaplabon" target="_blank">
                       <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
                    </a>
                    <FontAwesomeIcon icon={faGithub}  className="ms-2 icon"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faLinkedin} className="ms-2 icon"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} className="ms-2 icon"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram} className="ms-2 icon"></FontAwesomeIcon>

                </div>
                </div>

            </div>
        </div>
    );
};

export default About;