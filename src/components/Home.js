import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Aboutcomp";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
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
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Enhance your business operations and technological capabilities by partnering with the ideal IT services company to provide tailored solutions and support.." />
        <meta property="og:image" content="https://technicmentors.com/static/media/technicblue.524a6a4b92880f2eb36b.png" />
        <meta property="og:url" content="https://technicmentors.com" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechnicMentors" />
        <meta name="twitter:title" content="Home" />
        <meta property="twitter:description" content="Enhance your business operations and technological capabilities by partnering with the ideal IT services company to provide tailored solutions and support.." />
        <meta name="twitter:image" content="https://technicmentors.com/static/media/technicblue.524a6a4b92880f2eb36b.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com",
            "name": "Technic Mentors",
            "description": "Enhance your business operations and technological capabilities by partnering with the ideal IT services company to provide tailored solutions and support.",
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

        <link rel="canonical" href="https://technicmentors.com" />
        <meta name="description" content="Enhance your business operations and technological capabilities by partnering with the ideal IT services company to provide tailored solutions and support.." />
      </Helmet>

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
              <h1 className="text-center"> We Provide <span> Exclusive Services</span> <br /> For Your Business</h1>
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
                    <h4 className="mt-4">
                      <span> Web Design & Development</span></h4>
                    <p className="mt-4">
                      Elevate your online presence with captivating web designs and
                      seamless development expertise.
                    </p>
                    <div className=" mt-4">
                      <Link to="/web-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          Read More <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
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
                    <div className=" mt-4">
                      <Link to="/software-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          Read More <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-phone-flip icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">03</div>
                    <h4 className="mt-4">
                      <span> Mobile Apps Development</span></h4>
                    <p className="mt-4">
                      Innovative mobile development for seamless experiences,
                      enhancing engagement and digital footprint.
                    </p>
                    <div className=" mt-4">
                      <Link to="/mobile-app-development-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          Read More <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
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
                    <div className=" mt-4">
                      <Link to="/digital-marketing-services">
                        <button type="button" className="btn px-3 py-2">
                          Read More <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box card py-3">
                  <div className="card-body p-4">
                    <div className="shape-icon">
                      <i className="bi bi-search-heart icon"></i>
                      <span className="circle"></span>
                    </div>
                    <div className="service-card_number">05</div>
                    <h4 className="mt-4">
                      <span> SEO Services</span></h4>
                    <p className="mt-4">
                      Optimize visibility and drive traffic with our result-oriented
                      SEO strategies and expert implementation.
                    </p>
                    <div className=" mt-4">
                      <Link to="/seo-services">
                        {" "}
                        <button type="button" className="btn px-3 py-2">
                          Read More <i className="fas fa-arrow-right rightServiceArrow"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
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
                      Impactful graphics translating ideas into stunning designs,
                      leaving lasting impressions for your visual needs.
                    </p>
                    <div className=" mt-4">
                      <Link to="/graphics-designing-services">
                        <button type="button" className="btn px-3 py-2">
                          Read More <i className="fas fa-arrow-right rightServiceArrow"></i>
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
          className="container"
        // data-aos="fade-up"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-out"
        >

          <div className="row justify-content-between align-items-center">
            {/* <div className={`row justify-content-between align-items-center ${isVisible ? 'fadeIn' : ''}`}> */}

            <div
              className="col-md-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="2000"
            // data-aos-easing="ease-in-out"
            >
              <div className="section-title">
                <h2>Why Choose Us</h2>
                <h1>
                  Innovating Ahead, Your <span> Business' Competitive</span> Edge
                </h1>
              </div>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                Technic mentors is the best <a href="https://urdustem.com/it-consulting-services-unveiled-navigating-success-with-expert-guidance/" target="blank" rel="noopener" style={{ textDecoration: "none" }}> IT consulting company</a> to look at
                when searching for extraordinary software and technology
                solutions.
              </p>

              <div className="row chooseH4 g-4 mt-1">
                <div className="col-md-6">

                  <h4> <i className="fas fa-check"></i> Innovative Approach</h4>
                </div>
                <div className="col-md-6">

                  <h4> <i className="fas fa-check"></i> High Data Security</h4>
                </div>
                <div className="col-md-6">

                  <h4> <i className="fas fa-check"></i> 24/7 Online Support</h4>
                </div>
                <div className="col-md-6">

                  <h4> <i className="fas fa-check"></i> Expert Team</h4>
                </div>
                <div className="col-md-6">

                  <h4> <i className="fas fa-check"></i> Business Improvement</h4>
                </div>
                <div className="col-md-6">

                  <h4> <i className="fas fa-check"></i> Easy Solutions</h4>
                </div>
              </div>

            </div>
            <div
              className="col-md-6 mt-3"
            // data-aos="fade-up"
            // data-aos-duration="2000"
            // data-aos-easing="ease-in-out"
            >
              <div className="d-flex justify-content-end">
                <img
                  src={aboutImg}
                  className="img-fluid teamImg"
                  alt="technic"
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
          <div className="col-md-3 d-flex">
            <div className="icon"><i className="bi bi-emoji-smile"></i></div>
            <div>
              <h1 className="mt-2">2016</h1>
              <h6 className="m-top-8">Established In</h6>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="icon"><i className="bi bi-people"></i></div>
            <div>
              <h1 className="mt-2">550+</h1>
              <h6 className="m-top-8">Happy Clients</h6>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="icon"><i className="bi bi-headset"></i></div>
            <div>
              <h1 className="mt-2">20+</h1>
              <h6 className="m-top-8">Active Clients</h6>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="icon"><i className="bi bi-journal-richtext"></i></div>
            <div>
              <h1 className="mt-2">500+</h1>
              <h6 className="m-top-8">Projects</h6>
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
              src="assets/img/clients/client-homepainting-logo.avif?v=2"
              alt="client-logo-alahad-marketing"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-farooqgraphics-logo.avif?v=2"
              alt="client-getwell-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-almahdia-logo.avif?v=2"
              alt="client-lettechnologies-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/K2Land-LOGO.avif?v=2"
              alt="client-lettechnologies-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-almakah-logo.avif?v=2"
              alt="client-sheikhlawcompany-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-mobilefiksers-logo.avif?v=2"
              alt="client-danishgrouco-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-punjabestate-logo.avif?v=2"
              alt="client-logo-alahad-marketing"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-lettechnologies-logo.avif?v=2"
              alt="client-lettechnologies-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-sheikhlaw-logo.avif?v=2"
              alt="client-sheikhlawcompany-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-capobrain-logo.avif?v=2"
              alt="client-danishgrouco-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-getwellpk-logo.avif?v=2"
              alt="client-danishgrouco-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-photonics-logo.avif?v=2"
              alt="client-danishgrouco-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-paradise-logo.avif?v=2"
              alt="client-danishgrouco-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-capobiz-logo.avif?v=2"
              alt="client-danishgrouco-logo"
              width="200"
              height="110"
            />
            <img
              src="assets/img/clients/client-intermarket-logo.avif?v=2"
              alt="client-danishgrouco-logo"
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
            <h1>  Explore Our Best <span> Software Products</span></h1>
          </div>
          <div className="row g-4">
            <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-mortarboard"></i>
                  <h5>
                    <strong>Education Management System</strong></h5>
                  <p>
                    An all-in-one solution for your educational management system activities
                  </p>
                  <div>
                    <Link to="/education-management-system">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-bag-check"></i>
                  <h5>
                    <strong>Enterprise Resource Planning</strong></h5>
                  <p>
                    Seamlessly manage all resources for your large enterprise
                  </p>
                  <div>
                    <Link to="/erp-solutions">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-bag-check"></i>
                  <h5>
                    <strong>Ecommerce Solutions</strong></h5>
                  <p>
                    Leverage the Ecommerce solutions for the businesses of all sizes, to seamlessly sealing your product online
                  </p>
                  <div>
                    <Link to="/ecommerce-solutions">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-pc-display-horizontal"></i>
                  <h5>
                    <strong>Point Of Sale</strong>
                  </h5>
                  <p>
                    Manage your daily sales, transactions, inventory and monitor your cash flow with our POS system
                  </p>
                  <div>
                    <Link to="/point-of-sale">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
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
