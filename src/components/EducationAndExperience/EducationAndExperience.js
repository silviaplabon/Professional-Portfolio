import React, { useEffect, useState } from 'react';
import Education from '../Education/Education';
import Experience from '../Experience/Experience'
const EducationAndExperience = () => {
    const [state, setState] = useState(true);
    useEffect(()=>{
        document.getElementById('btn1').addEventListener('click',function(){
            document.getElementById('btn1').style.backgroundColor='#212729';
            document.getElementById('btn2').style.backgroundColor="white";
            document.getElementById('btn2').style.color="black";
            document.getElementById('btn1').style.color="white";
        } ) 
        document.getElementById('btn2').addEventListener('click',function(){
            document.getElementById('btn2').style.backgroundColor='#212729';
            document.getElementById('btn1').style.backgroundColor="white";
            document.getElementById('btn2').style.color="white";
            document.getElementById('btn1').style.color="black";
        } ) 

      })

    return (
        <div className="mt-5">
            <h3 className="text-center">Education & Experience</h3>
            <div className=" d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-success text-center " style={{backgroundColor:'#212729'}} id="btn1" onClick={() => setState(true)}>Education</button>
                <button className="btn btn-outline-success ms-2 text-center " id="btn2" onClick={() => setState(false)}>Experience</button>
            </div>
            {
                state == true ? <Education></Education> : <Experience></Experience>
            }

        </div>
    );
};

export default EducationAndExperience;