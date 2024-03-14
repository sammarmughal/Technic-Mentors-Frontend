import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section id="about" className="about section-bg">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">
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
              className="col-md-5 mt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <div className="">
                <img
                  src="assets/img/technologies.webp"
                  className="img-fluid"
                  alt="technic"
                />
              </div>
            </div>
            <div
              className="col-md-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <h3>
                Committed to Delivering Excellence: Our IT Services Promise
              </h3>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                Technic mentors is the best <a href="https://urdustem.com/it-consulting-services-unveiled-navigating-success-with-expert-guidance/" target="blank" rel="noopener" style={{textDecoration:"none"}}> IT consulting company</a> to look at
                when searching for extraordinary software and technology
                solutions. We provide value-added and quality products and
                services. Our team is specialized and experienced and provides
                our clients with the finest experience ever.
              </p>
              <ul>
                <li>
                  <i className="bi bi-bullseye"></i>
                  <div>
                    <h5>Our Mission</h5>
                    <p style={{ textAlign: "justify" }}>
                      Technic Mentors is dedicated to revolutionizing the
                      software landscape through innovative solutions and
                      mentorship. Our mission is to synergize technology and
                      expertise, promoting growth for individuals and businesses
                      alike.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-binoculars"></i>
                  <div>
                    <h5>Our Vision</h5>
                    <p style={{ textAlign: "justify" }}>
                      Technic Mentors envisions a world where cutting-edge
                      technology converges with expert mentorship, creating an
                      ecosystem of continuous innovation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <p style={{ textAlign: "justify" }}>
                    We provide comprehensive IT solutions tailored to the unique
                    needs of our diverse client base, which includes commercial
                    clients, government agencies, educational institutions, and
                    schools. Our innovative solutions are designed to foster a
                    dynamic learning and development ecosystem, enhancing
                    efficiency, productivity, and knowledge sharing. By
                    leveraging cutting-edge technology and a deep understanding
                    of our clients' specific requirements, we are committed to
                    driving success and growth across various sectors,
                    ultimately contributing to a more connected and advanced
                    digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
