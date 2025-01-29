import React from "react";
import Slider from "react-slick";
import homeHeader from "../images/Reuse-Image.avif";
import shape2 from "../images/hero_shape_2.png";
import shape3 from "../images/hero_shape_3.png";

export default function MainHeader() {
    const settings = {
        dots: false,
        arrows: false,
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

            <div
                id="hero"
                style={{ backgroundImage: `url(${homeHeader})` }}
                className="d-flex align-items-center homeHeader d-lg-block d-none"
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
                            <Slider {...settings}>
                                <div className="col-md-6 mainHeaderText">
                                    <span className="text-uppercase text-white" style={{ fontSize: "20px", fontWeight: "600" }}>Empower Your Business</span>
                                    <h1
                                        style={{ color: "white", fontWeight: "bolder", fontSize: "50px" }}
                                        className="mb-2"
                                    >
                                        Choose The Best IT Services Company
                                    </h1>
                                    <p className="mb-4 mt-2" style={{ color: "white" }}>
                                        Unlock the potential of your enterprise with our cutting-edge software solutions. We specialize in delivering customized IT services tailored to meet your unique business needs.
                                    </p>

                                </div>
                                <div className="col-md-6 mainHeaderText">
                                    <span className="text-uppercase text-white" style={{ fontSize: "20px", fontWeight: "600" }}>24/7 Assistance</span>
                                    <h2
                                        style={{ color: "white", fontWeight: "bolder", fontSize: "50px" }}
                                        className="mb-2"
                                    >
                                        Reliable IT Support Around The Clock
                                    </h2>
                                    <p className="mb-4 mt-2" style={{ color: "white" }}>
                                        Experience peace of mind with our round-the-clock IT support services. Our dedicated team ensures your systems are always up and running, minimizing downtime and maximizing productivity.
                                    </p>

                                </div>
                                <div className="col-md-6 mainHeaderText">
                                    <span className="text-uppercase text-white" style={{ fontSize: "20px", fontWeight: "600" }}>Future-Proof Your Enterprise</span>
                                    <h2
                                        style={{ color: "white", fontWeight: "bolder", fontSize: "50px" }}
                                        className="mb-2"
                                    >
                                        Scalable IT Services For Business Growth
                                    </h2>
                                    <p className="mb-4 mt-2" style={{ color: "white" }}>
                                        Transform your business with our scalable IT solutions. We provide secure, efficient, and cost-effective services that adapt to your growing needs, ensuring seamless performance.
                                    </p>

                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="hero-shape1"></div>
                    <div className="hero-shape2">
                        <img src={shape2} alt="it-consulting-company" />
                    </div>
                    <div className="hero-shape3">
                        <img src={shape3} alt="software-company" />
                    </div>
                </div>
            </div>
            <div
                id="hero"
                style={{ backgroundImage: `url(${homeHeader})` }}
                className="d-flex align-items-center homeHeader d-lg-none"
            >
                <div className="homeHader-overlay w-100">
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
                            <div className="col-lg-6 mainHeaderText">
                                <span className="text-uppercase text-white" style={{ fontSize: "20px", fontWeight: "600" }}>Your Trusted IT Partner</span>
                                <h2
                                    style={{ color: "white", fontWeight: "bolder", fontSize: "50px" }}
                                    className="mb-2"
                                >
                                    Streamlined IT Solutions, Anytime, Anywhere
                                </h2>
                                <p className="mb-4 mt-2" style={{ color: "white" }}>
                                    Whether you're on the go or at the office, our tailored IT services ensure smooth and reliable operations. Get the support you need, when you need it, with our 24/7 assistance.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="hero-shape1"></div>
                    <div className="hero-shape2">
                        <img src={shape2} alt="it-consulting-company" />
                    </div>
                    <div className="hero-shape3">
                        <img src={shape3} alt="software-company" />
                    </div>
                </div>
            </div>
        </div >
    );
}

