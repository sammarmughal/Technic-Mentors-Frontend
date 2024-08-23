import React, { useEffect } from "react";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import FAQ from "./FAQ";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Helmet>
        {/* open grapgh tag */}
        {/* gzip-compression */}
        <meta property="og:title" content="About" />
        <meta property="og:description" content="Technic mentors is the best IT consulting company to look at when searching for extraordinary software and technology solutions. We provide value-added and.." />
        <meta property="og:image" content="https://technicmentors.com/assets/img/technologies.webp" />
        <meta property="og:url" content="https://technicmentors.com/about" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechnicMentors" />
        <meta name="twitter:title" content="About" />
        <meta name="twitter:description" content="Technic mentors is the best IT consulting company to look at when searching for extraordinary software and technology solutions. We provide value-added and.." />
        <meta name="twitter:image" content="https://technicmentors.com/assets/img/technologies.webp" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com/about",
            "name": "Technic Mentors",
            "description": "Technic mentors is the best IT consulting company to look at when searching for extraordinary software and technology solutions. We provide value-added and.." ,
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
        <link rel="canonical" href="https://technicmentors.com/about" />
        <meta name="description" content="Technic mentors is the best IT consulting company to look at when searching for extraordinary software and technology solutions. We provide value-added and.." />
      </Helmet>
      <div
        className="allHeaderBg"
      >
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
            >
              About Company
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
              className="col-md-6 mt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="about-bg-img">
                <img
                  src="assets/img/technologies.webp"
                  className="img-fluid"
                  alt="technic"
                />
              </div>
            </div>

            <div
              className="col-lg-6 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1>
                Committed to Delivering Excellence: Our IT Services Promise
              </h1>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                Technic mentors is the best <a href="https://urdustem.com/it-consulting-services-unveiled-navigating-success-with-expert-guidance/" target="blank" rel="noopener" style={{ textDecoration: "none" }}> IT consulting company</a> to look at
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
                  <h5>Our Mission</h5>
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
                  <h5>Our Vision</h5>
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
                <h1>2016</h1>
                <h6 className="m-top-8">Year Of Establishment</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <h1>550+</h1>
                <h6 className="m-top-8">Clients Worldwide</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <h1>20+</h1>
                <h6 className="m-top-8">Active Clients</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <h1>500+</h1>
                <h6 className="m-top-8">Projects</h6>
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
