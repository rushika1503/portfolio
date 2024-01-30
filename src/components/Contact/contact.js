import React, { useRef } from "react";
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_27s5e8d', 'template_etlpckv', form.current, 'mI5Uxzmdzc2e_xXuS')
            .then((result) => {
                console.log(result.text);
                alert('Email Sent!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact">
            <h1 className="contactTitle">Contact Me</h1>
            <p className="contactDescription">If you'd like to contact me, please fill in the form below. I aim to get back within 2 days.</p>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" required  name="from_name"/>
                <input type="email" className="email" placeholder="Example: YourEmail@gmail.com" name="your_email"/>
                <input type="subject" className="subject" placeholder="Subject" required name="from_subject"/>
                <textarea name="message" rows="5" className="message" placeholder="Your Message" required />
                <button type="submit" value="send" className="SubmitBtn">SEND ME</button>
            </form>
        </section>

    )
}

export default Contact;