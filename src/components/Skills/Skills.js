import React, { useEffect } from "react";

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
 useEffect(()=>{
  document.getElementById('textShowHTML5').style.display="none";
  document.getElementById('HTML5').addEventListener('mouseenter',function(){
    document.getElementById('textShowHTML5').style.display="block"; 
  })
  document.getElementById('HTML5').addEventListener('mouseleave',function(){
    document.getElementById('textShowHTML5').style.display="none";
  })
  //C++
  document.getElementById('textShowC++').style.display="none";
  document.getElementById('C++').addEventListener('mouseenter',function(){
    document.getElementById('textShowC++').style.display="block"; 
  })
  document.getElementById('C++').addEventListener('mouseleave',function(){
    document.getElementById('textShowC++').style.display="none";
  })
  //C
  document.getElementById('textShowC').style.display="none";
  document.getElementById('C').addEventListener('mouseenter',function(){
    document.getElementById('textShowC').style.display="block"; 
  })
  document.getElementById('C').addEventListener('mouseleave',function(){
    document.getElementById('textShowC').style.display="none";
  })
},[])
 
  return (
    <div className="container">
      <h4 className="text-white text-center mb-4 mt-5">Skills</h4>
      <div className="row ">
        <div className="col-md-4 imgSkillStyle">
          <img src={webdevelopment} className="  w-100 h-100"></img>
        </div>
        <div className="col-md-8 ">
          <h5 className="text-white">Full Stack Deployment</h5><br />
          <div className="row row-cols-5">
            <div className="cards col mt-2 ms-2 d-flex justify-content-center align-items-center" id="HTML5">
              <FontAwesomeIcon icon={faHtml5} className=" iconSkill  w-100" style={{ color: '#e34c26' }} />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">

              <FontAwesomeIcon icon={faCss3} style={{ color: '#264de4' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>

            </div>
            <div className="cards col ms-2 mt-2  d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faBootstrap} style={{ color: '#563d7c' }} className="iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faJs} style={{ color: '#F0DB4F' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faReact} style={{ color: '#61DBFB' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faJsfiddle} style={{ color: '#68a063' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faNodeJs} style={{ color: '#3c873a' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faDatabase} style={{ color: '#4DB33D' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2  d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faGit} style={{ color: '#f34f29' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faGithub} style={{ color: '#945c54' }} className=" iconSkill" />
              <h6 className="text-center text-white" id="textShowHTML5">HTML5</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center" id="Firebase">
              <img src={firebaselogo} style={{ color: '#264de4' }} className="image  iconSkill" ></img>
              <h6 className="text-center text-white" id="textShowFirebase">HTML5</h6>
            </div>


            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center" id="Netlify">

              <img src={netlifylogo} style={{ backgroundColor: '#264de4' }} className="image  iconSkill" id="Netlify" />
              <h6 className="text-center text-white" id="textShowNetlify">Netlify</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">

              <img src={herokuimg} style={{ color: '#264de4' }} className="image  iconSkill " id="Heroku"/>
              <h6 className="text-center text-white" id="textShowHeroku">Heroku</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center">

              <img src={c} style={{ color: '#264de4' }} className="image iconSkill" id="C" />
              <h6 className="text-center text-white" id="textShowC">C</h6>
            </div>
            <div className="cards col ms-2 mt-2 d-flex justify-content-center align-items-center" id="C++">

              <img src={ccc} style={{ color: '#264de4' }} className="image  iconSkill" />
              <h6 className="text-center text-white" id="textShowC++">C++</h6>
            </div>

          </div>

        </div>





      </div>
    </div>

  );
};

export default Skills;