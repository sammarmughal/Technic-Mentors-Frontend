import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Aboutcomp";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import homeHeader from "../img/home-header.png";
import headerImg from "../img/header-small-img.png";
import Slider from "react-slick";
import { Helmet } from 'react-helmet';

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
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
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
      {/* Start Header Section */}
      <section
        id="hero"
        style={{ backgroundImage: `url(${homeHeader})` }}
        className="d-flex align-items-center"
      >
        <div
          className="container text-start"
          data-aos="zoom-out"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <h1
                style={{ color: "white", fontWeight: "bolder" }}
                className="mb-2"
              >
                Accelerate Your <br />
                <span
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "135%",
                  }}
                >
                  Business Growth
                </span>{" "}
                <br />
                With Our IT Services
              </h1>
              <p className="mb-4 mt-2" style={{ color: "white" }}>
                Helping you grow your business by enabling technology for your
                business. We will be your technology partners to make your
                business standout outplay the competitors!
              </p>
              <div className="d-flex text-start">
                <Link to="/about" className="btn headStart text-white scrollto">
                  Get Started
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=ZX3JdYyJlds"
                  className="glightbox btn-watch-video"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <i
                    className="bi bi-play-circle me-2"
                    style={{ color: "white" }}
                  ></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src={headerImg}
                className="img-fluid mb-3"
                alt="header-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* End Header Section */}

      {/* Start About Section */}

      <About />

      {/* Start Services Section */}

      <section id="services" className="services services-bg" style={{}}>
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">
            <h2>Services</h2>
            <p> We Are Dedicated To <span>Serve You All Time</span></p>
            <p>
              Explore a comprehensive range of IT solutions designed to empower
              your business and drive success.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-globe"></i>
                </div>
                <h4>Web Design & Development</h4>
                <p>
                  Elevate your online presence with captivating web designs and
                  seamless development expertise.
                </p>
                <div className=" mt-4">
                  <Link to="/web-development-services">
                    {" "}
                    <button type="button" className="btn btn-outline-primary ">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="icon-box different-card">
                <div className="icon">
                  <i className="bi bi-window-sidebar"></i>
                </div>
                <h4>
                  <span style={{ color: "white" }}>Software Development</span>
                </h4>
                <p style={{ color: "white" }}>
                  From concept to code, we craft tailored software solutions
                  that drive efficiency and innovation.
                </p>
                <div className=" mt-4">
                  <Link to="/software-development-services">
                    {" "}
                    <button type="button" className="btn btn-outline-light">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-phone-flip"></i>
                </div>
                <h4>Mobile Apps Development</h4>
                <p>
                  Innovative mobile development for seamless experiences,
                  enhancing engagement and digital footprint.
                </p>
                <div className=" mt-4">
                  <Link to="/mobile-app-development-services">
                    {" "}
                    <button type="button" className="btn btn-outline-primary ">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="icon-box different-card">
                <div className="icon">
                  <i className="bi bi-megaphone"></i>
                </div>
                <h4>
                  <span style={{ color: "white" }}>Digital Marketing</span>
                </h4>
                <p style={{ color: "white" }}>
                  Strategic digital marketing amplifying your brand, driving
                  growth, and captivating your target audience.
                </p>
                <div className=" mt-4">
                  <Link to="/digital-marketing-services">
                    <button type="button" className="btn btn-outline-light">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-search-heart"></i>
                </div>
                <h4>SEO Services</h4>
                <p>
                  Optimize visibility and drive traffic with our result-oriented
                  SEO strategies and expert implementation.
                </p>
                <div className=" mt-4">
                  <Link to="/seo-services">
                    {" "}
                    <button type="button" className="btn btn-outline-primary ">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="icon-box different-card">
                <div className="icon">
                  <i className="bi bi-palette"></i>
                </div>
                <h4>
                  <span style={{ color: "white" }}>Graphics Designing</span>
                </h4>
                <p style={{ color: "white" }}>
                  Impactful graphics translating ideas into stunning designs,
                  leaving lasting impressions for your visual needs.
                </p>
                <div className=" mt-4">
                  <Link to="/graphics-designing-services">
                    <button type="button" className="btn btn-outline-light ">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center align-items-center">
              <Link to="/services">
                <button
                  type="button"
                  className="btn mt-4 btn-outline-primary  "
                >
                  Explore All Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* End Services Section */}

      {/* End About Section */}

      {/* Start Counter Section */}

      <section
        id="counts"
        className="counts"
        style={{ backgroundColor: "#f6f9fe" }}
      >
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="row pt-3">
            <div className="col-lg-3 col-md-6">
              <div className="count-box" style={{ backgroundColor: "white" }}>
                <i className="bi bi-emoji-smile"></i>
                {/* <CountUp end={2013} duration={2} /> */}
                <h2 className="mt-2">2013</h2>
                <p className="m-top-8">Year Of Establishment</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box" style={{ backgroundColor: "white" }}>
                <i className="bi bi-journal-richtext"></i>
                <CountUp end={150} duration={2} />
                <p className="m-top-8">Clients Worldwide</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box" style={{ backgroundColor: "white" }}>
                <i className="bi bi-headset"></i>
                <CountUp end={8} duration={5} />
                <p className="m-top-8">Countries With Active Client</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box" style={{ backgroundColor: "white" }}>
                <i className="bi bi-people"></i>
                <CountUp end={500} duration={5} />
                <p className="m-top-8">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Count Section */}

      {/* Start Clients Logo Section */}

      <section
        id="clients"
        className="clients section-bg py-5"
        style={{ backgroundColor: "#f6f9fe", marginTop: "-60px" }}
      >
        <div className="section-title">
          <h3 className="text">
            Our <span>Clients</span>
          </h3>
        </div>
        <div className="container">
          <Slider {...settings}>
            <img
              src="assets\img\clients\client-alahadmarketing-logo.png"
              alt="client-logo-alahad-marketing"
            />
            <img
              src="assets\img\clients\client-getwell-logo.webp"
              alt="client-getwell-logo"
            />
            <img
              src="assets\img\clients\client-almahdia-logo.png"
              alt="client-lettechnologies-logo"
            />
            <img
              src="assets\img\clients\K2Land-LOGO.png"
              alt="client-lettechnologies-logo"
            />
            <img
              src="assets\img\clients\client-almakah-logo.png"
              alt="client-sheikhlawcompany-logo"
            />
            <img
              src="assets\img\clients\client-mobilefiksers-logo.png"
              alt="client-danishgrouco-logo"
            />
            <img
              src="assets\img\clients\client-punjabestate-logo.png"
              alt="client-logo-alahad-marketing"
            />
            <img
              src="assets\img\clients\client-lettechnologies-logo.png"
              alt="client-lettechnologies-logo"
            />
            <img
              src="assets\img\clients\client-sheikhlaw-logo.png"
              alt="client-sheikhlawcompany-logo"
            />
            <img
              src="assets\img\clients\client-danish-groupco-logo.png"
              alt="client-danishgrouco-logo"
            />
            <img
              src="assets\img\clients\client-getwellpk-logo.png"
              alt="client-danishgrouco-logo"
            />
          </Slider>
        </div>
      </section>

      {/* End Clients Logo Section */}

      {/* Start Products Section */}

      <section id="featured-services" className="featured-services">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div
            className="section-title text-center mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2> Our Products</h2>
            <p>  Explore Our <span>Best Software Products</span></p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <Link
                to="/education-management-system"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="icon-box product-icon-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-mortarboard"></i>
                  </div>
                  <h4 className="title">Education Management System</h4>
                  <p className="description">
                    An all-in-one solution for your school mangement activites
                  </p>
                  <br />
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <Link to="/erp-solutions" style={{ textDecoration: "none" }}>
                <div
                  className="icon-box product-icon-box different-card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i
                      className="bi bi-building"
                      style={{ color: "white" }}
                    ></i>
                  </div>
                  <h4 className="title text-white">
                    Enterprise Resource Planning
                  </h4>
                  <p className="description" style={{ color: "white" }}>
                    Seamlessly manage all resources of your large enterprise
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <Link
                to="/ecommerce-solutions"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="icon-box product-icon-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-bag-check"></i>
                  </div>
                  <h4 className="title">Ecommerce Solutions</h4>
                  <p className="description">
                    Leverage the Ecommerce solutions for the businesses of all
                    sizes, to seamlessly selling your products online
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <Link to="/point-of-sale" style={{ textDecoration: "none" }}>
                <div
                  className="icon-box product-icon-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bi bi-pc-display-horizontal"></i>
                  </div>
                  <h4 className="title">Point Of Sale</h4>
                  <p className="description">
                    Manage your daily sales, transactions, inventory and monitor
                    your cash flow with our POS system
                  </p>
                </div>
              </Link>
            </div>

            <div className=" mt-5 d-flex justify-content-center align-items-center">
              <Link to="/products">
                <button type="button" className="btn btn-outline-primary ">
                  Explore All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* End Products Section */}

      {/* Start Testimonials Section */}

      <Testimonials />
      {/* End Testimonials Section */}

      {/* Start Team Section */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="section-title">
            <h2>Team</h2>
            <p> Meet Our <span>Team of Executives</span></p>
            <p>Meet the team that converts your ideas into reality.</p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\nadeem Technic Mentors.webp"
                    className="img-fluid executive"

                    alt="ceo-img"
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Nadeem Munir</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Waseem Technic Mentors.webp"
                    className="img-fluid executive"

                    alt="waseem-img"
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Waseem Munir</h4>
                  <span>Head Sales & Marketing</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Danish Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt="software-company-team"
                  />
                  <div className="social">
                    <a href="#/">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Danish Mirza</h4>
                  <span>Head Development Department</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Team Section */}

      {/* Start FAQ Section */}

      <section id="faq" className="faq section-bg ">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">
            <h2>F.A.Q</h2>
            <p> Frequently Asked <span>Questions</span> </p>
            <p>
              Our curated list of the most frequently asked questions about us.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul className="faq-list">
                <li>
                  <div
                    data-bs-toggle="collapse"
                    className="collapsed question text-start"
                    href="#faq1"
                  >
                    What services does your company provide?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq1"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Our company offers a wide range of IT services, including
                      software development, web development, mobile app
                      development, IT consulting, cloud solutions,
                      cybersecurity, and more. We specialize in tailoring
                      solutions to meet your specific business needs.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    className="collapsed question text-start"
                  >
                    How much will it cost to develop a custom software solution
                    for my business?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq2"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The cost of developing custom software depends on various
                      factors, such as project complexity, features, and
                      technology stack. We provide personalized quotes after a
                      detailed project assessment. Our goal is to offer
                      cost-effective solutions that align with your budget and
                      requirements.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    className="collapsed question text-start"
                  >
                    What is your approach to ensuring data security and privacy?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq3"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      We take data security and privacy seriously. Our team
                      follows industry best practices and adheres to stringent
                      security measures to safeguard your data. We implement
                      encryption, access controls, and regular security audits
                      to protect your information.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    className="collapsed question text-start"
                  >
                    How long will it take to complete a software development
                    project? <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq4"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Project timelines vary based on project scope and
                      complexity. During the project planning phase, we provide
                      you with a detailed timeline. We work diligently to meet
                      deadlines and keep you updated on the project's progress
                      throughout its lifecycle.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    className="collapsed question text-start"
                  >
                    Do you provide ongoing support and maintenance after the
                    project is completed?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq5"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, we offer post-development support and maintenance
                      services. Our team is available to address any issues,
                      implement updates, and provide technical assistance to
                      ensure your software continues to perform optimally.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq6"
                    className="collapsed question text-start"
                  >
                    Can you provide references or examples of past projects
                    you've completed?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq6"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Absolutely! We can share case studies and provide
                      references from previous clients. You can also browse our
                      portfolio on our website to see examples of projects we've
                      successfully delivered.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="faq-bg"></div>
    </div>
  );
}
