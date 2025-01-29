import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="allHeaderBg">
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1 className="head text-center text-white animate__animated animate__zoomIn allHeaderP">
              Our Exclusive Portfolio
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
            <div className="col-lg-6">
              <div
                className="section-title text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h2> Our past Work Speaks Of Our Quality</h2>
                <h3>
                  Explore Our <span>Portfolio</span>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                Technic Mentors is more than a software company; we're your
                technology partners, bringing innovative ideas to life. Our
                portfolio showcases a spectrum of software services, from web
                and mobile app development to custom solutions, AI, blockchain,
                and cloud technologies. We're driven by your success and
                collaborate closely to create digital solutions that surpass
                expectations.
              </p>
              <p>
                Our exclusive portfolio represents our passion for creativity
                and client success. Projects like the groundbreaking mobile app
                in different industries and the game-changing e-commerce
                platform for several local and international companies stand as
                testaments to our dedication to excellence. With a commitment to
                quality, security, and peak performance, we aim to set new
                industry standards. Reach out to us, and together, we can turn
                your vision into a remarkable digital reality.
              </p>
            </div>

            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/portfolio-img.png"
                className="img-fluid"
                alt="mentors-portfolio"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div
            className="row flex-md-row-reverse"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="col-lg-6 order-md-1">
              <div
                className="section-title text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h2>Journey of Excellence</h2>
                <h3>
                  Exploring Our <span> Diverse Portfolio</span>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                Step into our Portfolio, a showcase that transcends boundaries
                and defines our journey through impactful projects. As you
                navigate, each project unfolds its unique narrative, a testament
                to the diverse tapestry of work we've undertaken. From the sleek
                sophistication of corporate websites to the intricate
                functionality of custom software, our portfolio mirrors the
                breadth and depth of our capabilities.
              </p>
              <p>
                Dive into a world where innovation knows no bounds. Our projects
                span industries, from cutting-edge e-commerce solutions that
                redefine online experiences to intuitive mobile applications
                that breathe life into ideas. Whether it's the seamless design
                of digital storefronts, the development of bespoke software
                solutions, or the integration of pioneering technologies, our
                portfolio speaks volumes about our commitment to turning visions
                into reality. Explore the mosaic of our past endeavors, each a
                canvas painted with the passion and precision that defines our
                craft.
              </p>
              <p>
                Each project is a collaborative journey, a fusion of our
                expertise and client aspirations, resulting in solutions that
                not only meet expectations but exceed them. Welcome to a gallery
                of success stories, where your project could be the next chapter
                in our narrative of innovation and achievement.
              </p>
            </div>
            <div className="col-lg-6 order-md-2 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/portfolio.webp"
                className="img-fluid"
                alt="our-diverse-portfolio"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="row">
            <div className="col-md-4 port-column mt-4">
              <div className="portfolio-cards">
                <div className="card-body">
                  <div className="fa-2x ">
                    <i
                      className="fa-regular fa-lightbulb mb-4"
                      style={{ color: "#106ec6" }}
                    ></i>
                    <p style={{ color: "#106ec6" }}>
                      <strong>Innovative Solutions</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 port-column mt-4">
              <div className="portfolio-cards">
                <div className="card-body">
                  <div className="fa-2x">
                    <i
                      className="fa-regular fa-handshake mb-4"
                      style={{ color: "#106ec6" }}
                    ></i>
                    <p style={{ color: "#106ec6" }}>
                      <strong>Collaborative Partnerships</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 port-column mt-4">
              <div className="portfolio-cards ">
                <div className="card-body">
                  <div className="fa-2x">
                    <i
                      className="fa-solid fa-fingerprint mb-4"
                      style={{ color: "#106ec6" }}
                    ></i>
                    <p style={{ color: "#106ec6" }}>
                      <strong>Quality And Security</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="clients-portfolio-section "
        style={{ backgroundColor: "#f1f3fe" }}
      >
        <div className="container mt-4">
          <div
            className="section-title mb-3 text-center"
            style={{ paddingBottom: "0" }}
          >
            <h2> Web Development Projects </h2>
            <h3>
              Our Portfolio Of <span>Web Development Projects</span>{" "}
            </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="mb-4 text-center">
                Our Portfolio of Web Development Projects showcases the diverse
                range of websites we've created for clients across various
                industries. From sleek corporate websites to dynamic ecommerce
                platforms, each project reflects our commitment to quality,
                innovation, and user experience. Our portfolio highlights custom
                designs tailored to each client's needs, ensuring functionality
                and visual appeal. Whether it's educational websites that
                promote learning, service-oriented sites that drive business, or
                creative portfolio pages that showcase talent, our web
                development projects demonstrate our versatility and expertise
                in delivering top-tier digital solutions. Explore our portfolio
                to see how we bring visions to life.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <a
                  href="https://totaldentallab.com/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\total-dental-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="total-dental-lab-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    TOTAL DENTAL LAB
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <a
                  href="https://capobrain.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\capobrain-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="capobrain-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    CAPOBRAIN
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <a
                  href="https://www.lettechnologies.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\lettech-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="let-technologies-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    LET TECHNOLOGIES
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <a
                  href="https://alahadmarketing.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\alahad-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="al-ahad-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    AL-AHAD
                  </p>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6 col-lg-3 ">
                <a
                  href="https://mobilfiksern.no/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\mobilfiksern-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="mobile-fiksern-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    MOBIL FIKSERN
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <a href="https://pinar.pk/" target="_blank" rel="noreferrer">
                  <img
                    src="assets\img\portfolio\pinar-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="pinar-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    <a
                      href="https://pinar.pk/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      PINAR
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3  ">
                <a href="https://k2land.pk/" target="_blank" rel="noreferrer">
                  <img
                    src="assets\img\portfolio\k2land-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="k2-land-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    <a
                      href="https://k2land.pk/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      k2 LAND
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-3  ">
                <a
                  href="https://bcdserve.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\BCD Serve Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="bcd-services-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    BCD SERVICES
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3  ">
                <a
                  href="https://firstclicksolutions.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\first-click-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="first-click-solutions-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    FIRST CLICK SOLUTIONS
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <a
                  href="https://farooqgraphics.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\farooq-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="farooq-graphics-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    FAROOQ GRAPHICS
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <a
                  href="https://legalexglobal.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets\img\portfolio\legalexglobal-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="legalex-global-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    LEGALEX GLOBAL
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <a href="https://getwell.pk/" target="_blank" rel="noreferrer">
                  <img
                    src="assets\img\portfolio\getwell-portfolio Adan Technic Mentors.webp"
                    className="img-fluid portfolio-images"
                    alt="get-well-site"
                  />
                </a>
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    <a
                      href="https://getwell.pk/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      GET WELL
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/Website-portfolio">
            <button className="btn btnFill px-4 py-2">
              Explore More <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </section>
      {/* wen portfolio */}

      <section
        className="clients-portfolio-section"
        style={{ backgroundColor: "#f1f3fe" }}
      >
        <div className="container">
          <div className="section-title mb-3 text-center">
            <h2> Web Software Projects </h2>
            <h3>
              Our Portfolio Of <span>Web Softwares</span>{" "}
            </h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 ">
                <img
                  src="assets\img\software portfolio\desktop-pos Adan Technic Mentors.webp"
                  className="img-fluid portfolio-images"
                  alt="desktop-pos-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    Desktop pos
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3  ">
                <img
                  src="assets\img\software portfolio\web pos Adan Technic Mentors.webp"
                  className="img-fluid portfolio-images"
                  alt="web-pos-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    web pos
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <img
                  src="assets\img\software portfolio\restaurant-management-system Adan Technic Mentors.webp"
                  className="img-fluid portfolio-images"
                  alt="resturant-management-system-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    Restaurant Management system
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3  ">
                <img
                  src="assets\img\software portfolio\tailoring-software Adan Technic Mentors.webp"
                  className="img-fluid portfolio-images"
                  alt="tailoring-software-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    Tailoring software
                  </p>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6 col-lg-3 ">
                <img
                  src="assets\img\software portfolio\real-estate-management-system Adan Technic Mentors.png"
                  className="img-fluid portfolio-images"
                  alt="real-estate-management-system-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    real estate management system
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <img
                  src="assets\img\software portfolio\election-management-system Adan Technic Mentors.webp"
                  className="img-fluid portfolio-images"
                  alt="election-management-system"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    Election Management System
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3  ">
                <img
                  src="assets\img\software portfolio\trading-software Adan Technic Mentors.webp"
                  className="img-fluid portfolio-images"
                  alt="trading-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    trading software
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">
                <img
                  src="assets\img\software portfolio\precasting-manufacturing-software Adan Technic Mentors.jpg"
                  className="img-fluid portfolio-images"
                  alt="precasting-manufacturing-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    Precasting-manufacturing Software
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-3">
                <img
                  src="assets\img\software portfolio\billing software Adan Technic Mentors.webp"
                  className="img-fluid portfolio-images"
                  alt="billing-software"
                />
                <div className="portfolio-title text-center">
                  <p className="mt-2" style={{ backgroundColor: "white" }}>
                    Billing Software
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* wen portfolio */}
    </div>
  );
}
