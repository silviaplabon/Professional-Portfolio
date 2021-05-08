import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './EducationAndExperience.css'

const EducationAndExperienceShow = (props) => {
    const { institution, year, course } = props.education;

    return (
        <div className="col mt-1  colSection h-100 mb-4">
             <div className=" text-white h-100 colEducation p-0" style={{ color:'black'}} >
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
  >
    <FrontSide
      style={{
        backgroundColor: '#00201d',
      }}
    >
         
         <div className="card-body h-100 cardBody" style={{color:'white'}}>
                     <div className="" style={{height:'45%'}} >
                         <p className="card-title">{institution}</p>
                     </div>
                     <div className=" mb-1 h-50"  style={{height:'55%'}} >
                         <p className="mb-0">{year}</p>
                     <p className="mb-0">{course}</p>
                     </div>
                 </div>
    </FrontSide>


           
                 
        

    <BackSide
      style={{ backgroundColor: '#00201d'}}>
       <div className="card-body h-100 cardBody" style={{color:'white'}}>
                     <div className=""  style={{height:'45%'}} >
                         <p className="card-title text-white">{institution}</p>
                     </div>
                     <div className=" mb-1  "  style={{height:'55%'}} >
                         <p className="mb-0 text-white">{year}</p>
                     <p className="mb-0 text-white">{course}</p>
                     </div>
                 </div>
        
    </BackSide>
  </Flippy> 
  </div>

</div>
    );
};

export default EducationAndExperienceShow;