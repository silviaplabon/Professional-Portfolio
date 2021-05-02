import React from 'react';

const EducationAndExperienceShow = (props) => {
    const { institution, year, course } = props.education;

    return (
        <div className="col mt-2  mb-5">
            <div className="card text-white h-100" style={{ backgroundColor: '#232423' }} >
                <div className="card-body h-100 p-4">
                    <div className="" style={{height:'40%'}}>
                        <h6 className="card-title">{institution}</h6>
                    </div>
                    <div className=" mb-1" style={{height:'60%'}}>
                        <p className="mb-0">{year}</p>
                        <p className="mb-0">{course}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EducationAndExperienceShow;