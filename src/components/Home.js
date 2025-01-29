import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Aboutcomp";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import Slider from "react-slick";
import ContactForm from "./ContactFrom";
import MainHeader from "./MainHeader";
import aboutImg from "../images/Technic-Mentors-Team.avif"
import HomeTeam from "./HomeTeam";
export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <MainHeader />
      <About />
      {/* Start Services Section */}

      <div id="services" className="services services-bg" >
        <div className="services-overlay">
          <div
            className="container">
            <div className="section-title">
              <div className="d-flex justify-content-center">
                <h2 className="text-center">Services</h2>
              </div>
              <h3 className="text-center"> We Provide <span> Exclusive Services</span> <br /> For Your Business</h3>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card icon-box py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-globe icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">01</div>
                    <p className="mt-4 pFont">
                      Web Design & Development</p>
                    <p className="mt-4">
                      Elevate your online presence with captivating web designs and
                      seamless development expertise.
                    </p>
                    <div className=" mt-4">
                      <Link to="/web-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          <span className="d-none"> Know about Web Design & Development</span> <i className="fas fa-arrow-right rightServiceArrow" style={{ color: "initial" }}></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5 mt-md-0">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-window-sidebar icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">02</div>
                    <p className="mt-4 pFont">
                      Software Development
                    </p>
                    <p className="mt-4">
                      From concept to code, we craft tailored software solutions
                      that drive efficiency and innovation.
                    </p>
                    <div className=" mt-4">
                      <Link to="/software-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          <span className="d-none"> Learn about Software Development</span> <i className="fas fa-arrow-right rightServiceArrow" style={{ color: "initial" }}></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5 mt-lg-0">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-phone-flip icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">03</div>
                    <p className="mt-4 pFont">
                      Mobile Apps Development</p>
                    <p className="mt-4">
                      Innovative mobile development for seamless experiences,
                      enhancing engagement and digital footprint.
                    </p>
                    <div className=" mt-4">
                      <Link to="/mobile-app-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          <span className="d-none"> Our Mobile Apps Development Service</span> <i className="fas fa-arrow-right rightServiceArrow" style={{ color: "initial" }}></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-megaphone icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">04</div>
                    <p className="mt-4 pFont">
                      <span>Digital Marketing</span>
                    </p>
                    <p className="mt-4">
                      Strategic digital marketing amplifying your brand, driving
                      growth, and captivating your target audience.
                    </p>
                    <div className=" mt-4">
                      <Link to="/digital-marketing-services">
                        <button type="button" className="btn px-3 py-2">
                          <span className="d-none">Explore Our Digital Marketing Services</span> <i className="fas fa-arrow-right rightServiceArrow" style={{ color: "initial" }}></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-search-heart icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">05</div>
                    <p className="mt-4 pFont">
                      SEO Services</p>
                    <p className="mt-4">
                      Optimize visibility and drive traffic with our result-oriented
                      SEO strategies and expert implementation.
                    </p>
                    <div className=" mt-4">
                      <Link to="/seo-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          <span className="d-none">Discover Our SEO Services</span> <i className="fas fa-arrow-right rightServiceArrow" style={{ color: "initial" }}></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5">
                <div className="icon-box card py-3">
                  <div className="icon-box card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-palette icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">06</div>
                    <p className="mt-4 pFont">
                      Graphics Designing
                    </p>
                    <p className="mt-4">
                      Impactful graphics translating ideas into stunning designs,
                      leaving lasting impressions for your visual needs.
                    </p>
                    <div className=" mt-4">
                      <Link to="/graphics-designing-services">
                        <button type="button" className="btn px-3 py-2">
                          <span className="d-none"> Do You Need Designs</span> <i className="fas fa-arrow-right rightServiceArrow" style={{ color: "initial" }}></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-center align-items-center">
                <Link to="/services">
                  <button
                    type="button"
                    className="btn mt-4 px-4 py-3 btnFill"
                  >
                    Explore All Services
                    <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Services Section */}

      {/* choose section start */}
      <section id="about" className="about aboutSection">
        <div
          className="container">

          <div className="row justify-content-between align-items-center">
            <div
              className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
              <div className="section-title">
                <h2>Why Choose Us</h2>
                <h3>
                  Innovating Ahead, Your <span> Business' Competitive</span> Edge
                </h3>
              </div>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                Technic mentors is the best <a href="https://urdustem.com/it-consulting-services-unveiled-navigating-success-with-expert-guidance/" target="blank" rel="noopener" style={{ textDecoration: "none" }}> IT consulting company</a> to look at
                when searching for extraordinary software and technology
                solutions.
              </p>

              <div className="row chooseH4 g-4 mt-1">
                <div className="col-md-6">

                  <p> <i className="fas fa-check"></i> Innovative Approach</p>
                </div>
                <div className="col-md-6">

                  <p> <i className="fas fa-check"></i> High Data Security</p>
                </div>
                <div className="col-md-6">

                  <p> <i className="fas fa-check"></i> 24/7 Online Support</p>
                </div>
                <div className="col-md-6">

                  <p> <i className="fas fa-check"></i> Expert Team</p>
                </div>
                <div className="col-md-6">

                  <p> <i className="fas fa-check"></i> Business Improvement</p>
                </div>
                <div className="col-md-6">

                  <p> <i className="fas fa-check"></i> Easy Solutions</p>
                </div>
              </div>

            </div>
            <div
              className="col-lg-6 mt-3">
              <div className="d-flex justify-content-center
              ">
                <img
                  src={aboutImg}
                  className="img-fluid teamImg"
                  alt="software-company-team"
                  width="400"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* choose section end */}

      {/* stats section start */}
      <div className="container statsBg mt-4 py-4">
        <div className="row p-4">
          <div className="col-md-6 col-lg-3 justify-content-center d-flex">
            <div className="icon"><i className="bi bi-emoji-smile"></i></div>
            <div>
              <h2 className="mt-2 text-white">2016</h2>
              <p className="text-white m-top-8">Established In</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 justify-content-center d-flex">
            <div className="icon"><i className="bi bi-people"></i></div>
            <div>
              <h2 className="mt-2 text-white">550+</h2>
              <p className="text-white m-top-8">Happy Clients</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 justify-content-center d-flex">
            <div className="icon"><i className="bi bi-headset"></i></div>
            <div>
              <h2 className="mt-2 text-white">20+</h2>
              <p className="text-white m-top-8">Active Clients</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 justify-content-center d-flex">
            <div className="icon"><i className="bi bi-journal-richtext"></i></div>
            <div>
              <h2 className="mt-2 text-white">500+</h2>
              <p className="text-white m-top-8">Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* stats section end */}

      {/* Start Clients Logo Section */}

      <section
        id="clients"
        className="clients section-bg py-5 mt-3"
        style={{ backgroundColor: "transparent", marginTop: "-60px" }}
      >
        <div className="container">
          <Slider {...settings}>
            <img
              src="assets/img/clients/client-homepainting-logo.avif?v=3"
              alt="alahad-marketing"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-farooqgraphics-logo.avif?v=3"
              alt="getwell"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-almahdia-logo.avif?v=3"
              alt="let-technologies"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/K2Land-LOGO.avif?v=3"
              alt="k2-land"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-almakah-logo.avif?v=3"
              alt="al-makkah"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-mobilefiksers-logo.avif?v=3"
              alt="mobilfiksern"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-punjabestate-logo.avif?v=3"
              alt="punjab-estate"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-lettechnologies-logo.avif?v=3"
              alt="let-technologies"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-sheikhlaw-logo.avif?v=3"
              alt="sheikh-law-company"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-capobrain-logo.avif?v=3"
              alt="capobrain"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-getwellpk-logo.avif?v=3"
              alt="getwell"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-photonics-logo.avif?v=3"
              alt="photonics"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-paradise-logo.avif?v=3"
              alt="paradise"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-capobiz-logo.avif?v=3"
              alt="capobiz"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-intermarket-logo.avif?v=3"
              alt="intermarket"
              width="200"
              height="110"
            />
          </Slider>
        </div>

      </section>

      {/* End Clients Logo Section */}

      {/* Start Products Section */}

      <section id="featured-services" className="productservice">
        <div
          className="container">
          <div
            className="section-title text-center mb-3">
            <h2> Our Products</h2>
            <h3>  Explore Our Best <span> Software Products</span></h3>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-mortarboard"></i>
                  <p>
                    <strong>Education Management System</strong></p>
                  <p>
                    An all-in-one solution for your educational management system activities
                  </p>
                  <div>
                    <Link to="/education-management-system">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                      <span className="d-none"><span className="d-none"> Education Management System-Capobrain</span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-bag-check"></i>
                  <p>
                    <strong>Enterprise Resource Planning</strong></p>
                  <p>
                    Seamlessly manage all resources for your large enterprise
                  </p>
                  <div>
                    <Link to="/erp-solutions">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                      <span className="d-none"><span className="d-none">erp-solutions</span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-bag-check"></i>
                  <p>
                    <strong>Ecommerce Solutions</strong></p>
                  <p>
                    Leverage the Ecommerce solutions for the businesses of all sizes, to seamlessly sealing your product online
                  </p>
                  <div>
                    <Link to="/ecommerce-solutions">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                      <span className="d-none"><span className="d-none"> Explore ecommerce solutions</span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-pc-display-horizontal"></i>
                  <p>
                    <strong>Point Of Sale</strong>
                  </p>
                  <p>
                    Manage your daily sales, transactions, inventory and monitor your cash flow with our POS system
                  </p>
                  <div>
                    <Link to="/point-of-sale">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                      <span className="d-none"><span className="d-none"> capobiz-point of sale software</span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center align-items-center">
              <Link to="/products">
                <button
                  type="button"
                  className="btn mt-4 px-4 py-3 btnFill"
                >
                  Explore All Products
                  {/* <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i> */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* End Products Section */}
      <Testimonials />
      <HomeTeam />
      <ContactForm />
    </div >
  );
}
