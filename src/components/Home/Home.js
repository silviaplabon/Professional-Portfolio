import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Header from '../Header/Header';
import About from '../About/About';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Home.css'
import Skills from '../Skills/Skills';

const Home = () => {
    return (
      
                <div className="container fullSection">
                    <Header></Header>
                <HeaderMain></HeaderMain>
                <About></About>
                
                <EducationAndExperience></EducationAndExperience>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                </div>
    );
};

export default Home;