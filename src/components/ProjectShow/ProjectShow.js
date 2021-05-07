import React, { useState } from 'react';
import './ProjectShow.css'
import ProjectModal from '../ProjectModal/ProjectModal';


const ProjectShow = (props) => {
    const { name, description, image, features, tools, livelink, clientlink } = props.project;
    console.log(image)

    const [modalIsOpen, setIsOpen] = useState(false);
    const [state, setState] = useState(false);
    function openModal() {
        setState(true);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="mb-5 col-lg-4 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded ">
                <div className="d-flex justify-content-center align-items-center h-100 contain ">
                    <img src={image} className="card-img-top w-100 h-100 p-3" />
                    <div className="overlay d-flex justify-content-center align-items-center">
                        <div className="button d-flex-row align-items-center justify-content-center">
                        <h4 className="text-center text-white mt-5"> {name}</h4>
                            <button className="btn btn-lg mt-2 text-white" style={{ backgroundColor: '#2d524a' }}
                                onClick={openModal} >Detail</button>
                            <ProjectModal modalIsOpen={modalIsOpen} closeModal={closeModal} data={props.project}></ProjectModal>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default ProjectShow;
