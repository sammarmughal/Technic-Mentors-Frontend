import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../images/about-img1.avif"
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section id="about" className="about aboutSection">
        <div
          className="container"
        // data-aos="fade-up"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-out"
        >

          <div className="row d-flex justify-content-between">
            <div
              className="col-md-5 mt-3"
            // data-aos="fade-up"
            // data-aos-duration="2000"
            // data-aos-easing="ease-in-out"
            >
              <div className="">
                <img
                  src={aboutImg}
                  className="img-fluid"
                  width="500"
                  height="500"
                  alt="technic"
                />
              </div>
            </div>
            <div
              className="col-md-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="2000"
            // data-aos-easing="ease-in-out"
            >
              <div className="section-title">
                <h2>About Us</h2>
                <h1>
                  Choose The Best <span> IT Services</span> Company
                </h1>
              </div>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                Technic mentors is the best <a href="https://urdustem.com/it-consulting-services-unveiled-navigating-success-with-expert-guidance/" target="blank" rel="noopener" style={{ textDecoration: "none" }}> IT consulting company</a> to look at
                when searching for extraordinary software and technology
                solutions. We provide value-added and quality products and
                services. Our team is specialized and experienced and provides
                our clients with the finest experience ever.
              </p>

              <div className="row ">
                <div className="col-md-6 mt-3 d-flex align-items-center">
                  <div>
                    <i class="fas fa-award"></i>
                  </div>
                  <div>
                    <h4>Certified Company</h4>
                    <p>Approved And Registered</p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 d-flex align-items-center">
                  <div>
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h4>Expert Team</h4>
                    <p>Bunch Of Skilled Individuals</p>
                  </div>
                </div>
              </div>

              <hr className="mt-4" />

              <div className="row justify-content-between aboutContact">
                <div className="col-md-5 mt-3">
                  <Link to="/about"> <button className="btn btnFill px-4 py-3">Discover More <i className="fas fa-arrow-right" style={{ fontSize: "initial", color: "white", marginLeft: "4px" }}></i></button></Link>
                </div>
                <div className="col-md-6 mt-3 d-flex align-items-center">
                  <div className="callIcon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div style={{ marginLeft: "3%" }}>
                    <p>Call Us On:</p>
                    <h5 style={{ marginTop: "-5px" }}>+923 111 122 144</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
