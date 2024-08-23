import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [successMessage, setSuccessMessage] = useState("");
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
      nameI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      nameI.innerText = ""
    }

    if (!email) {
      emailI.innerText = 'please fill this field'
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

      .then((response) => {
        formRef.current.reset();
        setSuccessMessage("Your Message Is Sent Successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Contact Us" />
        <meta property="og:description" content="Have any query? Our support team is always there to respond you. Just drop a message here and we will get back to you.P" />
        <meta property="og:url" content="https://technicmentors.com/contact" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechnicMentors" />
        <meta name="twitter:title" content="Contact Us" />
        <meta name="twitter:description" content="Have any query? Our support team is always there to respond you. Just drop a message here and we will get back to you.P" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com/contact" ,
            "name": "Technic Mentors",
            "description": "Have any query? Our support team is always there to respond you. Just drop a message here and we will get back to you.P" ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>

        <link rel="canonical" href="https://technicmentors.com/contact" />
        <meta name="description" content="Have any query? Our support team is always there to respond you. Just drop a message here and we will get back to you.P" />
      </Helmet>
      <div
        className="allHeaderBg"
      >
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
            >
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <section
        id="contact"
        className="contact"
        style={{ backgroundColor: "#f6f9fe" }}
      >
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="section-title text-center">
            <h1>
              Reach Out<span> To Us</span>
            </h1>
            <p>
              Have any query? Our support team is always there to respond you.
              Just drop a message here and we will get back to you.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="100">
            <div className="col-lg-6">
              <div
                className="info-box mb-4"
                style={{ backgroundColor: "white" }}
              >
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>United Kingdom | Norway | Pakistan</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="info-box  mb-4"
                style={{ backgroundColor: "white" }}
              >
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <a href="mailto:info@technicmentors.com" style={{ textDecoration: "none", color: "#777777" }}> <p>info@technicmentors.com</p></a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="info-box  mb-4"
                style={{ backgroundColor: "white" }}
              >
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+923 111 122 144</p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="100">
            <div className="col-lg-6 ">
              <iframe
                className="mb-4 mb-lg-0"
                src="https://www.google.com/maps/d/u/0/embed?mid=1DGgSINjLUssm-lD0CO8LjBztg3FiAZE&ehbc=2E312F"
                title="map"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="col-lg-6" style={{ backgroundColor: "white" }}>
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
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <div id="nameI" style={{ color: "red" }}></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                    <div id="emailI" style={{ color: "red" }}></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                  <div id="subjectI" style={{ color: "red" }}></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                  <div id="messageI" style={{ color: "red" }}></div>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-primary" type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
