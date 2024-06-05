import React from "react";
import Slider from "react-slick";
import homeHeader from "../images/mainHeader.avif";
import homeHeader1 from "../images/mainHeader1.avif";
import homeHeader2 from "../images/mainHeader2.avif";
import shape2 from "../images/hero_shape_2.png";
import shape3 from "../images/hero_shape_3.png";
import { Link } from "react-router-dom";

export default function MainHeader() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        fade: true,
        pauseOnHover: false,
        autoPlaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div
                        id="hero"
                        style={{ backgroundImage: `url(${homeHeader})` }}
                        className="d-flex align-items-center homeHeader"
                    >
                        <div className="homeHeader-overlay">
                            <div className="ripple-shape">
                                <span className="riple1"></span>
                                <span className="riple2"></span>
                                <span className="riple3"></span>
                                <span className="riple4"></span>
                                <span className="riple5"></span>
                                <span className="riple6"></span>
                            </div>
                            <div
                                className="container text-start"
                                data-aos="zoom-out"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                            >
                                <div className="row align-items-center py-6">
                                    <div className="col-md-6 mainHeaderText">
                                        <span className="text-uppercase text-white" style={{ fontSize: "20px", fontWeight: "600" }}>Empower Your Business</span>
                                        <h1
                                            style={{ color: "white", fontWeight: "bolder", fontSize: "50px" }}
                                            className="mb-2"
                                        >
                                            Innovative IT Solutions for Modern Businesses
                                        </h1>
                                        <p className="mb-4 mt-2" style={{ color: "white" }}>
                                            Unlock the potential of your enterprise with our cutting-edge software solutions. We specialize in delivering customized IT services tailored to meet your unique business needs.
                                        </p>
                                        <div className="d-flex row text-start">
                                            <div className="col-md-6 mt-2">
                                                <Link to="/about">  <button className="btn headBtn1 px-4 py-3">Explore More <i className="fas fa-arrow-right me-1"></i></button>
                                                </Link>
                                            </div>
                                            <div className="col-md-6 mt-2">
                                                <a
                                                    href="https://www.youtube.com/watch?v=ZX3JdYyJlds"
                                                    className="glightbox btn-watch-video"
                                                    target="blank"
                                                    style={{ textDecoration: "none" }}
                                                >

                                                    <button className="btn btn-outline-light px-4 py-3"> <i
                                                        className="bi bi-play-circle me-2"
                                                        style={{ color: "white" }}
                                                    ></i> Watch Video</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-shape1"></div>
                            <div className="hero-shape2">
                                <img src={shape2} alt="shape 2" />
                            </div>
                            <div className="hero-shape3">
                                <img src={shape3} alt="shape 3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        id="hero"
                        style={{ backgroundImage: `url(${homeHeader1})` }}
                        className="d-flex align-items-center homeHeader"
                    >
                        <div className="homeHeader-overlay">
                            <div className="ripple-shape">
                                <span className="riple1"></span>
                                <span className="riple2"></span>
                                <span className="riple3"></span>
                                <span className="riple4"></span>
                                <span className="riple5"></span>
                                <span className="riple6"></span>
                            </div>
                            <div
                                className="container text-start"
                                data-aos="zoom-out"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                            >
                                <div className="row align-items-center py-6">
                                    <div className="col-md-6 mainHeaderText">
                                        <span className="text-uppercase text-white" style={{ fontSize: "20px", fontWeight: "600" }}>24/7 Assistance</span>
                                        <h1
                                            style={{ color: "white", fontWeight: "bolder", fontSize: "50px" }}
                                            className="mb-2"
                                        >
                                            Reliable IT Support Around the Clock
                                        </h1>
                                        <p className="mb-4 mt-2" style={{ color: "white" }}>
                                            Experience peace of mind with our round-the-clock IT support services. Our dedicated team ensures your systems are always up and running, minimizing downtime and maximizing productivity.
                                        </p>
                                        <div className="d-flex row text-start">
                                            <div className="col-md-6 mt-2">
                                                <Link to="/about">  <button className="btn headBtn1 px-4 py-3">Explore More <i className="fas fa-arrow-right me-1"></i></button>
                                                </Link>
                                            </div>
                                            <div className="col-md-6 mt-2">
                                                <a
                                                    href="https://www.youtube.com/watch?v=ZX3JdYyJlds"
                                                    className="glightbox btn-watch-video"
                                                    target="blank"
                                                    style={{ textDecoration: "none" }}
                                                >

                                                    <button className="btn btn-outline-light px-4 py-3"> <i
                                                        className="bi bi-play-circle me-2"
                                                        style={{ color: "white" }}
                                                    ></i> Watch Video</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-shape1"></div>
                            <div className="hero-shape2">
                                <img src={shape2} alt="shape 2" />
                            </div>
                            <div className="hero-shape3">
                                <img src={shape3} alt="shape 3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        id="hero"
                        style={{ backgroundImage: `url(${homeHeader2})` }}
                        className="d-flex align-items-center homeHeader"
                    >
                        <div className="homeHeader-overlay">
                            <div className="ripple-shape">
                                <span className="riple1"></span>
                                <span className="riple2"></span>
                                <span className="riple3"></span>
                                <span className="riple4"></span>
                                <span className="riple5"></span>
                                <span className="riple6"></span>
                            </div>
                            <div
                                className="container text-start"
                                data-aos="zoom-out"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                            >
                                <div className="row align-items-center py-6">
                                    <div className="col-md-6 mainHeaderText">
                                        <span className="text-uppercase text-white" style={{ fontSize: "20px", fontWeight: "600" }}>Future-Proof Your Enterprise</span>
                                        <h1
                                            style={{ color: "white", fontWeight: "bolder", fontSize: "50px" }}
                                            className="mb-2"
                                        >
                                            Scalable IT Services for Business Growth
                                        </h1>
                                        <p className="mb-4 mt-2" style={{ color: "white" }}>
                                            Transform your business with our scalable IT solutions. We provide secure, efficient, and cost-effective services that adapt to your growing needs, ensuring seamless performance.
                                        </p>
                                        <div className="d-flex row text-start">
                                            <div className="col-md-6 mt-2">
                                                <Link to="/about">  <button className="btn headBtn1 px-4 py-3">Explore More <i className="fas fa-arrow-right me-1"></i></button>
                                                </Link>
                                            </div>
                                            <div className="col-md-6 mt-2">
                                                <a
                                                    href="https://www.youtube.com/watch?v=ZX3JdYyJlds"
                                                    className="glightbox btn-watch-video"
                                                    style={{ textDecoration: "none" }}
                                                    target="blank"
                                                >

                                                    <button className="btn btn-outline-light px-4 py-3"> <i
                                                        className="bi bi-play-circle me-2"
                                                        style={{ color: "white" }}
                                                    ></i> Watch Video</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-shape1"></div>
                            <div className="hero-shape2">
                                <img src={shape2} alt="shape 2" />
                            </div>
                            <div className="hero-shape3">
                                <img src={shape3} alt="shape 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

