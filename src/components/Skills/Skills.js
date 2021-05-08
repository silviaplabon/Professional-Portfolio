import React, { useEffect, useState } from "react";

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
import Blink from 'react-blink-text'

const Skills = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    document.getElementById('textShowHTML5').style.display = "none";
    document.getElementById('HTML5').addEventListener('mouseenter', function () {
      document.getElementById('textShowHTML5').style.display = "block";
      setState(true);
    })
    document.getElementById('HTML5').addEventListener('mouseleave', function () {
      document.getElementById('textShowHTML5').style.display = "none";
      setState(false);
    })
    //C++
    document.getElementById('textShowC++').style.display = "none";
    document.getElementById('C++').addEventListener('mouseenter', function () {
      document.getElementById('textShowC++').style.display = "block";
      setState(true);
    })
    document.getElementById('C++').addEventListener('mouseleave', function () {
      document.getElementById('textShowC++').style.display = "none";
      setState(false)
    })
    //C
    document.getElementById('textShowC').style.display = "none";
    document.getElementById('C').addEventListener('mouseenter', function () {
      document.getElementById('textShowC').style.display = "block";
      setState(true);
    })
    document.getElementById('C').addEventListener('mouseleave', function () {
      document.getElementById('textShowC').style.display = "none";
    })
    //Heroku
    document.getElementById('textShowHeroku').style.display = "none";
    document.getElementById('Heroku').addEventListener('mouseenter', function () {
      document.getElementById('textShowHeroku').style.display = "block";
      setState(true);
    })
    document.getElementById('Heroku').addEventListener('mouseleave', function () {
      document.getElementById('textShowHeroku').style.display = "none";
      setState(false)
    })
    //Netlify
    document.getElementById('textShowNetlify').style.display = "none";
    document.getElementById('Netlify').addEventListener('mouseenter', function () {
      document.getElementById('textShowNetlify').style.display = "block";
      setState(true);
    })
    document.getElementById('Netlify').addEventListener('mouseleave', function () {
      document.getElementById('textShowNetlify').style.display = "none";
      setState(false)
    })
    //Firebase
    document.getElementById('textShowFirebase').style.display = "none";
    document.getElementById('Firebase').addEventListener('mouseenter', function () {
      document.getElementById('textShowFirebase').style.display = "block";
      setState(true);
    })
    document.getElementById('Firebase').addEventListener('mouseleave', function () {
      document.getElementById('textShowFirebase').style.display = "none";
      setState(false)
    })
    //Firebase
    document.getElementById('textShowFirebase').style.display = "none";
    document.getElementById('Firebase').addEventListener('mouseenter', function () {
      document.getElementById('textShowFirebase').style.display = "block";
      setState(true);
    })
    document.getElementById('Firebase').addEventListener('mouseleave', function () {
      document.getElementById('textShowFirebase').style.display = "none";
      setState(false)
    })
    //Github
    document.getElementById('textShowGithub').style.display = "none";
    document.getElementById('Github').addEventListener('mouseenter', function () {
      document.getElementById('textShowGithub').style.display = "block";
      setState(true);
    })
    document.getElementById('Github').addEventListener('mouseleave', function () {
      document.getElementById('textShowGithub').style.display = "none";
    })
    //Github
    document.getElementById('textShowGit').style.display = "none";
    document.getElementById('Git').addEventListener('mouseenter', function () {
      document.getElementById('textShowGit').style.display = "block";
      setState(true);
    })
    document.getElementById('Git').addEventListener('mouseleave', function () {
      document.getElementById('textShowGit').style.display = "none";
      setState(false)
    })
    //NodeJS
    document.getElementById('textShowNodeJS').style.display = "none";
    document.getElementById('NodeJS').addEventListener('mouseenter', function () {
      document.getElementById('textShowNodeJS').style.display = "block";
      setState(true);
    })
    document.getElementById('NodeJS').addEventListener('mouseleave', function () {
      document.getElementById('textShowNodeJS').style.display = "none";
      setState(false)
    })
    //Express
    document.getElementById('textShowExpress').style.display = "none";
    document.getElementById('Express').addEventListener('mouseenter', function () {
      document.getElementById('textShowExpress').style.display = "block";
      setState(true);
    })
    document.getElementById('Express').addEventListener('mouseleave', function () {
      document.getElementById('textShowExpress').style.display = "none";
      setState(false)
    })
    //JS
    document.getElementById('textShowJS').style.display = "none";
    document.getElementById('JS').addEventListener('mouseenter', function () {
      document.getElementById('textShowJS').style.display = "block";
      setState(true);
    })
    document.getElementById('JS').addEventListener('mouseleave', function () {
      document.getElementById('textShowJS').style.display = "none";
      setState(false)
    })

    //React
    document.getElementById('textShowReact').style.display = "none";
    document.getElementById('React').addEventListener('mouseenter', function () {
      document.getElementById('textShowReact').style.display = "block";
      setState(true);
    })
    document.getElementById('React').addEventListener('mouseleave', function () {
      document.getElementById('textShowReact').style.display = "none";
      setState(false)
    })

    //Database
    document.getElementById('textShowDatabase').style.display = "none";
    document.getElementById('Database').addEventListener('mouseenter', function () {
      document.getElementById('textShowDatabase').style.display = "block";
      setState(true);
    })
    document.getElementById('Database').addEventListener('mouseleave', function () {
      document.getElementById('textShowDatabase').style.display = "none";
      setState(false)
    })

    //Bootstrap
    document.getElementById('textShowBootstrap').style.display = "none";
    document.getElementById('Bootstrap').addEventListener('mouseenter', function () {
      document.getElementById('textShowBootstrap').style.display = "block";
      setState(true);
    })
    document.getElementById('Bootstrap').addEventListener('mouseleave', function () {
      document.getElementById('textShowBootstrap').style.display = "none";
      setState(false)
    })
    //CSS3
    document.getElementById('textShowCSS3').style.display = "none";
    document.getElementById('CSS3').addEventListener('mouseenter', function () {
      document.getElementById('textShowCSS3').style.display = "block";
      setState(true);
    })
    document.getElementById('CSS3').addEventListener('mouseleave', function () {
      document.getElementById('textShowCSS3').style.display = "none";
      setState(false)
    })
  }, [])

  return (
    <div className="container ">
      <h4 className="text-white text-center mb-4 mt-5">Skills</h4>
      <div className="row mb-5 ">
        <div className="col-md-4 imgSkillStyle">
          <img src={webdevelopment} className="  w-100 h-100"></img>
        </div>
        <div className="col-md-8 ">
          <h5 className="text-white">Full Stack Deployment</h5>
          <div className="row row-cols-3  row-cols-sm-4  row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="HTML5">
                <FontAwesomeIcon icon={faHtml5} className=" iconSkill" style={{ color: '#e34c26' }} />

                <p className="pSkill mt-2 fw-bold text-center  " id="textShowHTML5">
                  {
                    state == true && <div className="Application"> <Blink color='black' text='HTML5' fontSize='10'>

                    </Blink>  </div>
                  }

                </p>
              </div>
            </div>
            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="CSS3">
                <FontAwesomeIcon icon={faCss3} style={{ color: '#264de4' }} className=" iconSkill" />
                <p className="pSkill  mt-2 fw-bold text-center " id="textShowCSS3"> {
                  state == true && <div className="Application"> <Blink color='black' text='CSS3' fontSize='10'>
                  </Blink>  </div>
                }
                </p>
              </div>
            </div>


            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="Bootstrap">
                <FontAwesomeIcon icon={faBootstrap} style={{ color: '#0275d8' }} className="iconSkill" />
                <p className="pSkill  mt-2 fw-bold text-center  mt-2" id="textShowBootstrap">
                  {
                    state == true && <div className="Application"> <Blink color='black' text='Bootstrap' fontSize='10'>

                    </Blink>  </div>}
                </p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="JS">
                <FontAwesomeIcon icon={faJs} style={{ color: '#F0DB4F' }} className=" iconSkill" />
                <p className="pSkill mt-2 fw-bold text-center " id="textShowJS">
                  {
                    state == true && <div className="Application"> <Blink color='black' text='JS' fontSize='10'>

                    </Blink>  </div>
                  }
                  </p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards  mt-1 d-flex justify-content-center align-items-center" id="React">
                <FontAwesomeIcon icon={faReact} style={{ color: '#61DBFB' }} className=" iconSkill" />
                <p className="pSkill mt-2 fw-bold text-center  " id="textShowReact">
                {
                    state == true && <div className="Application"> <Blink color='black' text='React' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="Express">
                <FontAwesomeIcon icon={faJsfiddle} style={{ color: '#68a063' }} className=" iconSkill" />
                <p className="pSkill mt-2 fw-bold text-center" id="textShowExpress">
                {
                    state == true && <div className="Application"> <Blink color='black' text='Express.js' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="NodeJS">
                <FontAwesomeIcon icon={faNodeJs} style={{ color: '#3c873a' }} className=" iconSkill" />
                <p className="pSkill mt-2 fw-bold text-center  " id="textShowNodeJS">
                {
                    state == true && <div className="Application"> <Blink color='black' text='Node.js' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards  mt-1 d-flex justify-content-center align-items-center" id="Database">
                <FontAwesomeIcon icon={faDatabase} style={{ color: '#4DB33D' }} className=" iconSkill" />
                <p className="pSkill  mt-2 fw-bold text-center " id="textShowDatabase">
                {
                    state == true && <div className="Application"> <Blink color='black' text='MongoDB' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="Git">
                <FontAwesomeIcon icon={faGit} style={{ color: '#f34f29' }} className=" iconSkill" />
                <p className="pSkill mt-2  fw-bold text-center " id="textShowGit">
                {
                    state == true && <div className="Application"> <Blink color='black' text='Git' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="Github">
                <FontAwesomeIcon icon={faGithub} style={{ color: '#945c54' }} className=" iconSkill" />
                <p className="pSkill mt-2 fw-bold text-center" id="textShowGithub">
                {
                    state == true && <div className="Application"> <Blink color='black' text='Github' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1  d-flex justify-content-center align-items-center" id="Firebase">
                <img src={firebaselogo} style={{ color: '#264de4' }} className="image  iconSkill" ></img>
                <p className="pSkill mt-2  fw-bold text-center" id="textShowFirebase"> {
                    state == true && <div className="Application"> <Blink color='black' text='Firebase' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="Netlify">
                <img src={netlifylogo} style={{ backgroundColor: '#264de4' }} className="image  iconSkill" />
                <p className="pSkill mt-2  fw-bold text-center " id="textShowNetlify">
                {
                    state == true && <div className="Application"> <Blink color='black' text='Netlify' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>


            <div className="col colStyle">
              <div className="cards  mt-1 d-flex justify-content-center align-items-center" id="Heroku" >
                <img src={herokuimg} style={{ color: '#264de4' }} className="image  iconSkill " />
                <p className="pSkill mt-2  fw-bold text-center" id="textShowHeroku">
                {
                    state == true && <div className="Application"> <Blink color='black' text='Heroku' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>

            <div className="col colStyle">
              <div className="cards mt-1  d-flex justify-content-center align-items-center" id="C">
                <img src={c} style={{ color: '#264de4' }} className="image iconSkill" />
                <p className="pSkill  mt-2 fw-bold text-center " id="textShowC">
                {
                    state == true && <div className="Application"> <Blink color='black' text='C' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>


            <div className="col colStyle">
              <div className="cards mt-1 d-flex justify-content-center align-items-center" id="C++">
                <img src={ccc} style={{ color: '#264de4' }} className="image  iconSkill" />
                <p className="pSkill  mt-2  fw-bold text-center " id="textShowC++">
                {
                    state == true && <div className="Application"> <Blink color='black' text='C++' fontSize='10'>

                    </Blink>  </div>
                  }</p>
              </div>
            </div>


          </div>

        </div>





      </div>
    </div>

  );
};

export default Skills;