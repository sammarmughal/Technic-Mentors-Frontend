import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

export default function ContactForm() {
    const [successMessage, setSuccessMessage] = useState("")
    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        const nameI = document.getElementById("nameI");
        const emailI = document.getElementById("emailI");
        const subjectI = document.getElementById("subjectI");
        const messageI = document.getElementById("messageI");

        let hasError = false;

        if (!name) {
            nameI.innerText = "Please fill this field";
            hasError = true;
        } else {
            nameI.innerText = ""
        }

        if (!email) {
            emailI.innerText = 'Please fill this field'
            hasError = true;
        } else {
            emailI.innerText = "";
        }

        if (!subject) {
            subjectI.innerText = "Please fill this field ";
            hasError = true;
        } else {
            subjectI.innerText = "";
        }

        if (!message) {
            messageI.innerText = "Please fill this field ";
            hasError = true;
        } else {
            messageI.innerText = "";
        }

        if (hasError) {
            return;
        }

        emailjs
            .sendForm(
                "service_9x25qjf",
                "template_wfomn52",
                formRef.current,
                "ZFbDufHGULjHKZGqF"
            )

            .then((responce) => {
                formRef.current.reset();
                setSuccessMessage("Your Message Is Sent Successfully");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000);
            });
    };
    return (
        <div className='contactBg'>
            <section
                id="contact"
                className="contact"
            >
                <div className="container">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title">
                                <h2>Free Consultation</h2>
                                <h3>
                                    Let's <span> Connect And Ignite</span> Possibilities!
                                </h3>
                            </div>
                            <p>We're excited to hear from you. Drop us a message, and let's start building something incredible together. Reach out to us today, and let our experties fuel your next Project to success. Ready to take the next step? Get in touch with our team, and let's make your vision a reality.</p>
                            <hr className='mt-4' />
                            <div className='row formContact mt-4'>
                                <div className='col-lg-6 mt-3'>
                                    <div className='card'>
                                        <div className='card-body d-flex align-items-center'>
                                            <i className='fas fa-phone'></i>
                                            <span>Call Us On : <h4 style={{ fontSize: "15px", fontWeight: "600" }}>+923 111 122 144</h4></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 mt-3'>
                                    <div className='card'>
                                        <div className='card-body d-flex align-items-center'>
                                            <i className='fas fa-envelope'></i>
                                            <span>Quick Mail Us : <h4 style={{ fontSize: "15px", fontWeight: "600" }}> info@technicmentors.com</h4></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <form
                                id="contactForm"
                                onSubmit={sendEmail}
                                ref={formRef}
                                className="contactform"
                            >
                                {successMessage && (
                                    <div className="alert alert-info">{successMessage}</div>
                                )}

                                <div className="row">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control py-3"
                                            id="name"
                                            placeholder="Your Name"
                                        // required
                                        />
                                        <div id="nameI" style={{ color: "red" }}></div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control py-3"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                        // required
                                        />
                                        <div id="emailI" style={{ color: "red" }}></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control py-3"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                    // required
                                    />
                                    <div id="subjectI" style={{ color: "red" }}></div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows="7"
                                        placeholder="Message"
                                    // required
                                    ></textarea>
                                    <div id="messageI" style={{ color: "red" }}></div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btnFill px-4 py-2" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
