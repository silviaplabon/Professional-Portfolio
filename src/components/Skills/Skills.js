import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faCss3, faBootstrap, faJs, faReact, faNodeJs, faGit, faGithub, faJsfiddle } from '@fortawesome/free-brands-svg-icons'
import './Skills.css'
import firebaselogo from '../../images/firebase (2).png';
import netlifylogo from '../../images/netlif.png';
import herokuimg from '../../images/heroku (2).png';
import c from '../../images/clogo.png';
import webdevelopment from '../../images/web1.png';
import ccc from '../../images/c++.png';

const Skills = () => {
  return (
    <div className="container">
      <h4 className="text-white text-center mb-4 mt-5">Skills</h4>
      <div className="row ">
        <div className="col-md-7 imgSkillStyle">
            <img src={webdevelopment} className="  w-100 h-100"></img>
        </div>
        <div className="col-md-5 ">
          <h5 className="text-white">Full Stack Deployment</h5><br/>
          <div className="d-flex flex-wrap">
          <FontAwesomeIcon icon={faHtml5} className=" iconSkill me-2 mt-2" style={{ color: '#e34c26' }} />
          <FontAwesomeIcon icon={faCss3} style={{ color: '#264de4' }} className="me-2 mt-2 iconSkill" />
          <FontAwesomeIcon icon={faBootstrap} style={{ color: '#563d7c' }} className="me-2 mt-2 iconSkill" />
          <FontAwesomeIcon icon={faJs} style={{ color: '#F0DB4F' }} className="me-2  mt-2 iconSkill" />
          <FontAwesomeIcon icon={faReact} style={{ color: '#61DBFB' }} className="me-2 mt-2 iconSkill" />

          <FontAwesomeIcon icon={faJsfiddle} style={{ color: '#68a063' }} className="me-2  mt-2 iconSkill" />
          <FontAwesomeIcon icon={faNodeJs} style={{ color: '#3c873a' }} className="me-2 mt-2 iconSkill" />
          <FontAwesomeIcon icon={faDatabase} style={{ color: '#4DB33D' }} className="me-2 mt-2 iconSkill" />

          <FontAwesomeIcon icon={faGit} style={{ color: '#f34f29' }} className="me-2 mt-2 iconSkill" />
          <FontAwesomeIcon icon={faGithub} style={{ color: '#945c54' }} className="me-2  mt-2 iconSkill" />
          </div>
         
          <img src={firebaselogo} style={{ color: '#264de4' }} className="image me-2 mt-2 iconSkill" ></img>
          <img src={netlifylogo} style={{ backgroundColor: '#264de4' }} className="image mt-2 me-2 iconSkill" />
          <img src={herokuimg} style={{ color: '#264de4' }} className="image me-2 iconSkill mt-2" />
          <img src={c} style={{ color: '#264de4' }} className="image me-2 iconSkill mt-2" />
          <img src={ccc} style={{ color: '#264de4' }} className="image me-2 iconSkill mt-2" />


        </div>





      </div>
    </div>

  );
};

export default Skills;