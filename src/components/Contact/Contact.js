import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import './Contact.css'
import emailjs from 'emailjs-com';
import contactImg from '../../images/contact.jfif';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    useEffect(() => {
        document.getElementById('to_name').style.display = 'none';
    })

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('silviaplabon', 'template_bk8pchm', e.target, 'user_MjJoSgwcS2C82hs0rwZky')
            .then((result) => {
                console.log(result.text);
                document.getElementById('from_name').value = '';
                document.getElementById('reply_to').value = '';
                document.getElementById('message').value = '';
                const newData = { ...toSend };
                newData.from_name = '';
                newData.message = '';
                newData.reply_to = '';
                setToSend(newData);
                console.log(toSend, "ddddddddddddddddd");

            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="row mt-5  text-white  ">
            <div className="col-md-5 featureImage  featureStyle ">
                {/* <img src={contactImg} id="bg"></img> */}
                <div className="col-md-12 w-75 m-auto mt-5">
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt} />Address</h5>
                    <h6>Akborshah,Chittagong</h6>
                </div>
                <div className="col-md-12 w-75 m-auto">
                    <h5><FontAwesomeIcon icon={faEnvelope} />Let's Talk</h5>
                    <h6>+8801743202786</h6>
                </div>
                <div className="col-md-12 w-75 m-auto">
                    <h5><FontAwesomeIcon icon={faPhoneAlt} />General Support</h5>
                    <h6>silviaplabon@gmail.com</h6>
                </div>

            </div>
            <div className="col-md-7 w-50">
                <h4 className="mx-5 mt-3 mb-3 fw-bold " style={{color:'black'}}>CONTACT US</h4>
                <div className=" d-flex justify-content-center align-items-center">
                    <form onSubmit={onSubmit} className="text-white w-75 ">
                        <input type='text' name='from_name' id="from_name" className="btnHover form-control w-100 my-1  btn btn-outline-primary text-white"
                            style={{}} placeholder='name'
                            value={toSend.from_name} onChange={handleChange} />
                        <input type='text' name='to_name' id="to_name" placeholder='name' className="btnHover  form-control w-100 my-1   btn btn-outline-primary text-white "
                            style={{backgroundColor:''}} value={'Silvia Satoar Plabon'} onChange={handleChange} />
                        <input type='text' name='reply_to' id="reply_to" className="btnHover  form -control w-100 my-1  btn btn-outline-primary  text-white "
                            style={{backgroundColor:''}} placeholder='Your email' value={toSend.reply_to} onChange={handleChange} />
                        <textarea name='message' id="message" className=" btnHover  form-control w-100 my-1  btn btn-outline-primary text-white" style={{}} placeholder='Your message' value={toSend.message} onChange={handleChange} />
                        <div className="justify-content-center align-items-center ">
                            <button type='submit' className=" fw-bold btnHover btn btn-sm w-50 mt-2 btn-outline-primary  text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;