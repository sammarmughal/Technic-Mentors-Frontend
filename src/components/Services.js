import React, { useEffect } from "react";
import Calltoaction from "./Calltoaction";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesImg from "../images/software-development.avif";
export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="allHeaderBg">
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1 className="head text-center text-white animate__animated animate__zoomIn allHeaderP">
              Top Notch IT Services
            </h1>
          </div>
        </div>
      </div>

      <section id="services-section">
        <div className="container">
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="col-lg-6 col-sm-12">
              <div
                className="section-title text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h2> Our Services</h2>
                <h3>
                  Grow Your Business With Our <span>Top IT Services</span>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                At Technic Mentors, we specialize in cutting-edge software
                solutions to drive your business forward. Our services include
                custom software development, web development, mobile app
                development, cloud solutions, software integration, IT
                consultation, cybersecurity, and more. We provide tailored,
                expert solutions that meet your specific needs and help you stay
                competitive in the digital age. Let us be your technology
                partner, guiding you through the ever-evolving world of software
                and IT.
                <br />
                <br />
                From crafting custom software solutions to ensuring seamless
                integration across your systems, Technic Mentors is your go-to
                source for innovation and efficiency. With a dedicated team of
                technologists, we provide end-to-end services that optimize your
                technology infrastructure, enhance security, and unlock valuable
                insights through data analytics. Discover how our expertise can
                empower your business today.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                src={servicesImg}
                className="img-fluid"
                max-width="100%"
                height="auto"
                alt="it-services"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Start Services Section */}

      <div id="services" className="services services-bg">
        <div className="services-overlay">
          <div className="container">
            <div className="section-title">
              <div className="d-flex justify-content-center">
                <h2 className="text-center">Services</h2>
              </div>
              <h1 className="text-center">
                {" "}
                We Provide Exclusive Service <br /> For Your Business
              </h1>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card icon-box py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-globe icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">01</div>
                    <h4 className="mt-4">
                      <span> Web Design & Development</span>
                    </h4>
                    <p className="mt-4">
                      Elevate your online presence with captivating web designs
                      and seamless development expertise.
                    </p>
                    <Link to="/web-development-services" className="read-more-link d-flex align-items-end">
                      <p>Read More <i className="fas fa-arrow-right rightServiceArrow"></i></p>
                    </Link>
                    <div className=" mt-4">
                      <Link to="/web-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          <i className="fas fa-arrow-right rightServiceArrow">
                            {" "}
                          </i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-window-sidebar icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">02</div>
                    <h4 className="mt-4">
                      <span>Software Development</span>
                    </h4>
                    <p className="mt-4">
                      From concept to code, we craft tailored software solutions
                      that drive efficiency and innovation.
                    </p>
                    <Link to="/software-development-services" className="read-more-link d-flex align-items-end">
                      <p>Read More <i className="fas fa-arrow-right rightServiceArrow"></i></p>
                    </Link>
                    <div className=" mt-4">
                      <Link to="/software-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-phone-flip icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">03</div>
                    <h4 className="mt-4">
                      <span> Mobile Apps Development</span>
                    </h4>
                    <p className="mt-4">
                      Innovative mobile development for seamless experiences,
                      enhancing engagement and digital footprint.
                    </p>
                    <Link to="/mobile-app-development-services" className="read-more-link d-flex align-items-end">
                      <p>Read More <i className="fas fa-arrow-right rightServiceArrow"></i></p>
                    </Link>
                    <div className=" mt-4">
                      <Link to="/mobile-app-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-megaphone icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">04</div>
                    <h4 className="mt-4">
                      <span>Digital Marketing</span>
                    </h4>
                    <p className="mt-4">
                      Strategic digital marketing amplifying your brand, driving
                      growth, and captivating your target audience.
                    </p>
                    <Link to="/digital-marketing-services" className="read-more-link d-flex align-items-end">
                      <p>Read More <i className="fas fa-arrow-right rightServiceArrow"></i></p>
                    </Link>
                    <div className=" mt-4">
                      <Link to="/digital-marketing-services">
                        <button type="button" className="btn px-3 py-2">
                          <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-search-heart icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">05</div>
                    <h4 className="mt-4">
                      <span> SEO Services</span>
                    </h4>
                    <p className="mt-4">
                      Optimize visibility and drive traffic with our
                      result-oriented SEO strategies and expert implementation.
                    </p>
                    <Link to="/seo-services" className="read-more-link d-flex align-items-end">
                      <p>Read More <i className="fas fa-arrow-right rightServiceArrow"></i></p>
                    </Link>
                    <div className=" mt-4">
                      <Link to="/seo-services">
                        <button type="button" className="btn px-3 py-2">
                          <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
                <div className="icon-box card py-3">
                  <div className="icon-box card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-palette icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">06</div>
                    <h4 className="mt-4">
                      <span>Graphics Designing</span>
                    </h4>
                    <p className="mt-4">
                      Impactful graphics translating ideas into stunning
                      designs, leaving lasting impressions for your visual
                      needs.
                    </p>
                    <Link to="/graphics-designing-services" className="read-more-link d-flex align-items-end">
                      <p>Read More <i className="fas fa-arrow-right rightServiceArrow"></i></p>
                    </Link>
                    <div className="mt-4">
                      <Link to="/graphics-designing-services">
                        <button type="button" className="btn px-3 py-2">
                          <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Services Section */}

      {/* <section id="services" className="services">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="section-title">
            <h2>Services</h2>
            <h3>
              We Are Dedicated To <span>Serve You All Time</span>
            </h3>
            <p>
              Explore a comprehensive range of IT solutions designed to empower
              your business and drive success.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-globe"></i>
                </div>
                <h4>
                  Web Design & Development
                </h4>
                <p>
                  Elevate your online presence with captivating web designs and
                  seamless development expertise.
                </p>
                <div className="know-service mt-4">
                 <Link to="/web-development-services"> <button type="button" className="btn btn-primary service-detail">Know More</button></Link>
                </div>
              </div>
              
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
              <div className="icon-box different-card">
                <div className="icon">
                  <i className="bi bi-window-sidebar"></i>
                </div>
                <h4 className="text-white">
                  Software Development
                </h4>
                <p style={{color: "white"}}>
                  From concept to code, we craft tailored software solutions
                  that drive efficiency and innovation.
                </p>
                <div className="know-service mt-4">
                 <Link to="/software-development-services"> <button type="button" className="btn btn-primary service-detail">Know More</button></Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-phone-flip"></i>
                </div>
                <h4>
                 Mobile Apps Development
                </h4>
                <p>
                  Innovative mobile development for seamless experiences,
                  enhancing engagement and digital footprint.
                </p>
                <div className="know-service mt-4">
                 <Link to="/mobile-app-development-services"> <button type="button" className="btn btn-primary service-detail">Know More</button></Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
              <div className="icon-box different-card">
                <div className="icon">
                  <i className="bi bi-megaphone"></i>
                </div>
                <h4 className="text-white">
                  Digital Marketing
                </h4>
                <p style={{color: "white"}}>
                  Strategic digital marketing amplifying your brand, driving
                  growth, and captivating your target audience.
                </p>
                <div className="know-service mt-4">
                  <Link to="/digital-marketing-services"><button type="button" className="btn btn-primary service-detail">Know More</button></Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-search-heart"></i>
                </div>
                <h4>
                  SEO Services
                </h4>
                <p>
                  Optimize visibility and drive traffic with our result-oriented
                  SEO strategies and expert implementation.
                </p>
                <div className="know-service mt-4">
                 <Link to="/seo-services"> <button type="button" className="btn btn-primary service-detail">Know More</button></Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-duration="1000" data-aos-easing="ease-in-out"
            >
              <div className="icon-box different-card">
                <div className="icon">
                  <i className="bi bi-palette"></i>
                </div>
                <h4 className="text-white">
                  Graphics Designing
                </h4>
                <p style={{color: "white"}}>
                  Impactful graphics translating ideas into stunning designs,
                  leaving lasting impressions for your visual needs.
                </p>
                <div className="know-service mt-4">
                  <Link to="/graphics-designing-services"><button type="button" className="btn btn-primary service-detail">Know More</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Calltoaction />
    </div>
  );
}
