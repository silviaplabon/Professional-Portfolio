import React from 'react';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';
import EducationAndExperienceShow from '../EducationAndExperienceShow/EducationAndExperienceShow';

const Education = () => {
    const educations = [
        {
            institution: 'International Islamic University Chittagong',
            year: '2017-Present',
            course: 'Bsc in CSE(8th Semester)'
        },
        {
            institution: 'Chittagong Govt Muslim High School',
            year: '2011-2013',
            course: 'SSC'
        },
        {
            institution: 'Chittagong Cantonment Public College',
            year: '2013-2015',
            course: 'HSC'
        }
    ]
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-2">
            {
                educations.map(education=><EducationAndExperienceShow education={education}></EducationAndExperienceShow>)
            }
        </div>
    );
};

export default Education;