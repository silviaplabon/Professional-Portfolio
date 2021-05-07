import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import { UserContext } from '../../App';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import './ProjectModal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const ProjectModal = ({ modalIsOpen, closeModal, data }) => {
    const { name, description, image, features, tools, livelink, clientlink } = data;
    console.log(name)
    return (

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="modalSection p-3">
                <div className="d-flex justify-content-center align-items-center">

                    <button className="btn btn-primary" onClick={closeModal}>

                        <FontAwesomeIcon className="crossIcon text-center" className="" icon={faTimes} />
                    </button>
                </div>
                <h4 className="text-center text-white fw-bold">{name}</h4>


                <h6 className="mx-2 text-white">{description}</h6>
                <ul>

                    {
                        features?.map(detail => <li className="p-1 text-white ms-1 featureLi">{detail.feature}</li>)
                    }
                </ul>
                <p className="fw-bold text-white mx-1">Tools:</p>
                <ul className="ulStyle ">
                    {
                        tools?.map(tool => <li className="liButton   ms-2 mb-2 text-white">{tool}</li>)
                    }
                </ul>
                <hr style={{borderTop:'2px solid red'}}/>
                <div className="d-flex justify-content-center mb-2">
                    <a href={livelink} target="_blank" className=" btn btn-outline-primary me-2 btnLive"> Live </a>
                    <a href={clientlink} target="_blank" className="btn btn-outline-primary btnGithub"> GitHub </a>
                </div>


            </div>

        </Modal>


    );
};

export default ProjectModal;