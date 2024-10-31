import React, { useRef } from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '../../../utlits/animations/slideUp';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const params = {
            to_name: "Ntando Mngomezulu", 
            from_name: form.current['user_name'].value,
            message: form.current['message'].value,
            user_email: form.current['user_email'].value
        };

        emailjs.send('personal_prtfolio', 'template_554ho5c', params, 'uzVqCyzrBPF_5cNJx')
            .then((result) => {
                alert("Message sent successfully!");
            }, (error) => {
                alert("An error occurred, please try again.");
            });
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form ref={form} onSubmit={sendEmail} className="contactForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="user_name" className="form-control" placeholder="Steve Milner" required data-error="Please enter your Name" />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="user_email" className="form-control" placeholder="hello@websitename.com" required data-error="Please enter your Email" />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required data-error="Please Write your Message"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Me Message <i><RiMailLine size={15} /></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    );
}

export default ContactForm;
