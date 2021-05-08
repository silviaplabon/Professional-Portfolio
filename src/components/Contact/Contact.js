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
        <div className="container mt-5">
             <h4 className="ms-1  mt-4 text-center fw-bold" style={{color:'white'}}>CONTACT US</h4> 
        <div className="row mt-5  text-white" id="contact">
            <div className="col-md-5 col-lg-6 col-sm-6 col-xs-12">
            <div className="row mt-5 d-flex  flex-sm-row-reverse flex-md-row  rowContactEmail">
                <div className="col-md-8 col-sm-9 colContactText">  
                <h6 className=" centerText">Email</h6> 
                  <p className=" centerText">silviaplabon@gmail.com</p>
                </div>
                <div className="col-md-4 col-sm-3   iconSec colContactIcon centerText">
                <FontAwesomeIcon icon={faEnvelope} className="iconContact mt-3" />
                </div>
                </div>
                <div className="row mt-3 d-flex  flex-sm-row-reverse flex-md-row  rowContact">
                <div className="col-md-8 col-sm-9 colContactText">
                    <h6 className="centerText">Address</h6>
                    <p className="centerText">Akborshah,Chittagong</p>
                </div>
                <div className="col-md-4 col-sm-3  iconSec colContactIcon centerText">
                    <FontAwesomeIcon icon={faMapMarkerAlt}  className="iconContact mt-3" />
                </div>
                </div>
                <div className="row mt-3 d-flex  flex-sm-row-reverse flex-md-row  rowContact">
                <div className="col-md-8 col-sm-9 colContactText"> 
                 <h6 className="centerText">Let's Talk</h6>
                    <p className="centerText">+8801743202786</p>
                </div>
                <div className="col-md-4  col-sm-3  iconSec centerText colContactIcon  ">
                   <FontAwesomeIcon icon={faPhoneAlt}  className="iconContact mt-3" />
                </div>
                </div>
               
            </div>
            <div className="col-md-7  col-lg-6 col-sm-6 col-xs-12 ">
                <div className="d-flex justify-content-center align-items-center">
                    <form onSubmit={onSubmit} className="text-white w-100 mt-5 text-white ">
                        <input type='text' name='from_name' id="from_name" className="btnHover form-control w-100 my-1  btn btn-outline-primary text-white"
                            style={{backgroundColor:'#212729'}} placeholder='name'
                            value={toSend.from_name} onChange={handleChange} />
                        <input type='text' name='to_name' id="to_name" placeholder='name' className="btnHover  form-control w-100 my-1   btn btn-outline-primary text-white "
                            style={{backgroundColor:'#212729'}} value={'Silvia Satoar Plabon'} onChange={handleChange} />
                        <input type='text' name='reply_to' id="reply_to" className="btnHover  form -control w-100 my-1  btn btn-outline-primary  text-white "
                            style={{backgroundColor:'#212729'}} placeholder='Your email' value={toSend.reply_to} onChange={handleChange} />
                        <textarea name='message' id="message"
                         className=" btnHover  form-control w-100 my-1  btn btn-outline-primary text-white"
                          style={{backgroundColor:'#212729'}} placeholder='Your message' value={toSend.message} onChange={handleChange} />
                        <div className="justify-content-center align-items-center ">
                            <button type='submit' className="mb-5 fw-bold btnHoverSubmit btn btn-sm w-50 mt-2 btn-outline-primary  text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div></div>
    );
};

export default Contact;