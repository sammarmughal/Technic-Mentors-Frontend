import React, { useEffect } from "react";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./FAQ";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="allHeaderBg"
      >
        <div className="allHeader-overlay">
          <div>
            <h1
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
            >
              Know About Best Software Company
            </h1>
          </div>
        </div>
      </div>
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="section-title text-center">
            <h2>About Us</h2>
            <h3>
              Choose The Best <span>IT Services Company</span>
            </h3>
            <p>
              Enhance your business operations and technological capabilities by
              partnering with the ideal IT services company to provide tailored
              solutions and support.
            </p>
          </div>

          <div className="row d-flex justify-content-between">
            <div
              className="col-lg-6 mt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="about-bg-img d-flex justify-content-center">
                <img
                  src="assets/img/technologies.webp"
                  className="img-fluid w-75 object-cover"
                  alt="technic"
                />
              </div>
            </div>

            <div
              className="col-lg-6 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p style={{ fontSize: "33px" }}>
                Committed to Delivering Excellence: Our IT Services Promise
              </p>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                Technic mentors is the best <a href="https://urdustem.com/it-consulting-services-unveiled-navigating-success-with-expert-guidance/" target="blank" rel="noopener" style={{ textDecoration: "none" }}> best software company</a> to look at
                when searching for extraordinary software and technology
                solutions. We provide value-added and quality products and
                services. Our team is specialized and experienced and provides
                our clients with the finest experience ever.
              </p>

              <p style={{ textAlign: "justify" }}>
                We provide IT solutions for commercial clients, government,
                institutions, and schools. Our solutions are all aimed to
                improve the learning and development ecosystem.
              </p>
              <p style={{ textAlign: "justify" }}>
                Our core values form the bedrock of our commitment to excellence and innovation. We pride ourselves on fostering a culture of integrity, collaboration, and continuous improvement. Our team is dedicated to delivering cutting-edge solutions that transcend industry standards, ensuring your business stays ahead in the ever-evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <p className="text-center" style={{ fontSize: "19px" }}>Client satisfaction is at the heart of what we do. We prioritize understanding your unique needs, providing personalized service, and exceeding expectations. With a relentless pursuit of quality, our skilled professionals leverage the latest technologies to empower your success. Trust Technic Mentors to be your strategic partner, delivering not just software but a seamless experience that propels your business forward. Your success is our success.</p>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mission">
              <div className="card mission-vision">
                <i className="bi bi-bullseye"></i>
                <div>
                  <h4>Our Mission</h4>
                  <p style={{ textAlign: "justify" }}>
                    Technic Mentors is dedicated to revolutionizing the software
                    landscape through innovative solutions and mentorship. Our
                    mission is to synergize technology and expertise, promoting
                    growth for individuals and businesses alike.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 vision">
              <div className="card mission-vision">
                <i className="bi bi-binoculars"></i>
                <div>
                  <h4>Our Vision</h4>
                  <p style={{ textAlign: "justify" }}>
                    Technic Mentors envisions a world where cutting-edge
                    technology converges with expert mentorship, creating an
                    ecosystem of continuous innovation, empowering individuals
                    and organizations to thrive in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="counts" className="counts mb-2 mt-2">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <h2>2016</h2>
                <p className="m-top-8">Year Of Establishment</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <h2>550+</h2>
                <p className="m-top-8">Clients Worldwide</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <h2>20+</h2>
                <p className="m-top-8">Active Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <h2>500+</h2>
                <p className="m-top-8">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </div>
  );
}
