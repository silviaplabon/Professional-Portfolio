import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Header from '../Header/Header';
import About from '../About/About';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Home.css'
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';
import Blogs from '../Blogs/Blogs';
import AboutSection from '../AboutSection/AboutSection';

const Home = () => {
    return (

        <div className="fullSection">
                 <Header></Header>
            <HeaderMain state={true}></HeaderMain>
            <About state={true}></About>
            <EducationAndExperience state={true}></EducationAndExperience>
            <Skills state={true}></Skills>
            <Projects state={true}></Projects>
            <Blogs></Blogs>
            <Contact state={true}></Contact>
            {/* <AboutSection></AboutSection> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;