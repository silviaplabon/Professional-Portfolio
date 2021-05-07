import React, { useEffect, useState } from 'react';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import './EducationAndExperience.css'
const EducationAndExperience = () => {
    const [state, setState] = useState(true);
    useEffect(()=>{
      document.getElementById('btn1').style.backgroundColor='#004b49';
      document.getElementById('btn2').style.backgroundColor='#212729';

      document.getElementById('btn1').style.color='white';
      document.getElementById('btn2').style.color='white';

      document.getElementById('btn2').addEventListener('mouseenter',function(){
        document.getElementById('btn1').style.backgroundColor='#212729';
        document.getElementById('btn2').style.backgroundColor='#004b49';
      })
    //   document.getElementById('btn2').addEventListener('mouseleave',function(){
    //     document.getElementById('btn2').style.backgroundColor='#212729';
    //     document.getElementById('btn1').style.backgroundColor='#004b49';
    //   })

      document.getElementById('btn1').addEventListener('mouseenter',function(){
        document.getElementById('btn1').style.backgroundColor='#004b49';
        document.getElementById('btn2').style.backgroundColor='#212729';
      })
    //   document.getElementById('btn1').addEventListener('mouseleave',function(){
    //     document.getElementById('btn2').style.backgroundColor='#212729';
    //     document.getElementById('btn1').style.backgroundColor='#004b49';
    //   })
    //   document.getElementById('btn1').addEventListener('click',function(){
    //     document.getElementById('btn1').style.backgroundColor='#004b49';
    //     document.getElementById('btn2').style.backgroundColor='#212729';
    //   })
    //   document.getElementById('btn2').addEventListener('click',function(){
    //     document.getElementById('btn1').style.backgroundColor='#212729';
    //     document.getElementById('btn2').style.backgroundColor='#004b49';
    //   })

    {
        state==true &&<>
         document.getElementById('btn2').style.backgroundColor='#212729';
        document.getElementById('btn1').style.backgroundColor='#004b49';</>
    }
    {
        state==false &&<>
         document.getElementById('btn1').style.backgroundColor='#212729';
        document.getElementById('btn2').style.backgroundColor='#004b49';</>
    }
    },[])


    return (
        <div className="mt-5 container">
            <h3 className="text-center text-white" >Education & Experience</h3>
            <div className=" d-flex justify-content-center align-items-center">
                <button className="btn btn1 btn-outline-primary text-center btnHoverEducation "  id="btn1" onClick={() => setState(true)}>Education</button>
                <button className="btn btn2 btn-outline-primary ms-2 text-center btnHoverExperience " id="btn2" onClick={() => setState(false)}>Experience</button>
            </div>
            {
                state == true ? <Education></Education> : <Experience></Experience>
            }

        </div>
    );
};

export default EducationAndExperience;