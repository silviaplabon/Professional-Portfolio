import React from 'react';
import EducationAndExperienceShow from '../EducationAndExperienceShow/EducationAndExperienceShow';

const Experience = () => {

    return (
        <div className="mt-2 row">
            <div className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="card text-white " style={{backgroundColor:'#333'}} >
                    <div className="card-body">
                        <h5 className="card-title">Teaching Assistant</h5>
                        <p className="card-text">International Islamic University Chittagong</p>
                        <p className="card-text">January 2021 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;