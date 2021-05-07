import React from 'react';
import EducationAndExperienceShow from '../EducationAndExperienceShow/EducationAndExperienceShow';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Experience.css'

const Experience = () => {

    return (
        <div className="mt-2 row " >
        <div className="row-cols-1 row-cols-md-2 row-cols-lg-3">
  
        <Flippy

    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    // ref={(r) => this.flippy = r}  to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
  >
    <FrontSide
      style={{
        backgroundColor: '',
      }}
    >
        
             <div className="" >
                     <div className="card-body">
                         <h5 className="card-title textWhite" >Teaching Assistant</h5>
                         <p className="card-text textWhite" >International Islamic University Chittagong</p>
                         <p className="card-text textWhite" >January 2021 - Present</p>
                 </div>
                 </div>
         
      
    </FrontSide>
    <BackSide
      style={{ backgroundColor: ''}}>
      <div className="" >
                     <div className="card-body">
                         <h5 className="card-title text-white" >Teaching Assistant</h5>
                         <p className="card-text text-white" >International Islamic University Chittagong</p>
                         <p className="card-text text-white" >January 2021 - Present</p>
                 </div>
                 </div>
    </BackSide>
  </Flippy>    </div>
         </div>
        
    );
};

export default Experience;