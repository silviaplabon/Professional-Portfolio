import React from 'react';
import profilePic from '../../images/silvia-removebg-preview (1).png'
import './About.css'
import Blink from 'react-blink-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import ImageFadeIn from 'react-image-fade-in'
// import RippleImage from 'ripple-image'
const About = () => {

    return (
        <div className="aboutSection  container text-white mt-5">
            <h3 className="text-white ms-4 ps-1 mt-2 text-center " >About me</h3>
            <div className="row">
                <div className="col-md-5 col-xs-4 mb-2 imageDiv d-flex justify-content-center align-items-center">
                    <div className="imageSectionAbout  d-flex justify-content-center align-items-center w-75 mt-3" id="fade_out">
                    
                        <img src={profilePic} className="img-fluid w-75 h-75"></img>
                    {/* <ImageFadeIn width={640} height={480}  src={profilePic} /> */}
                    {/* <CrossfadeImage src={profilePic} /> */}
                    {/* <RippleImage /> */}
                    </div>
                </div>
                <div className="col-md-6 col-xs-8 text-white detailsContainer">
                    
                    <p className="ms-2 me-4 text-justify mt-5 " style={{ color: 'white' }}>
                        Hello, I’m SILVIA, web-developer.
                        I am a goal-oriented problem solver with energy for web development,
                        who might want to join a group of similar engineers. I have a lot of involvement in making both legitimate
                        and creative answers for complex web issues. I am exhaustive and exact in all that I do and have a distinct
                        fascination for innovation and web applications, programming-related undertakings,
                        in addition to the client experience. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion
                        of mine. I like to learn new tools and technologies and challenge myself with new projects.
                </p>
                    <br />

                    <div className="mt-3 mb-2 text-white">
                        <a href="https://www.linkedin.com/in/silviaplabon" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="icon iconlinkedin"></FontAwesomeIcon></a>
                        <a href="https://github.com/silviaplabon" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="ms-3 icon icongithub "></FontAwesomeIcon></a>

                        <a href="https://www.facebook.com/profile.php?id=100012297911476" target="blank">
                            <FontAwesomeIcon icon={faFacebook} className="icon ms-3 iconfb"></FontAwesomeIcon>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;