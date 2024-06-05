import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Team" />
        <meta property="og:description" content="Technic mentors team displayed in this page" />
        <meta property="og:image" content="https://technicmentors.com/assets/img/team/nadeem-pic Technic Mentors.webp" />
        <meta property="og:url" content="https://technicmentors.com/team" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechnicMentors" />
        <meta name="twitter:title" content="Team" />
        <meta name="twitter:description" content="Technic mentors team displayed in this page" />
        <meta name="twitter:image" content="https://technicmentors.com/assets/img/team/nadeem-pic Technic Mentors.webp" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com/team",
            "name": "Technic Mentors",
            "description": "Technic mentors team displayed in this page" ,
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

        <link rel="canonical" href="https://technicmentors.com/team" />
        <meta name="description" content="Technic mentors team displayed in this page" />
      </Helmet>
      <div
        className="allHeaderBg"
      >
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1 className="head text-center text-white animate__animated animate__zoomIn allHeaderP">
              Our Team
            </h1>
          </div>
        </div>
      </div>

      <section id="team" className="team section-bg dev-team">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="section-title text-center">
            <h2>Our Team Of Mentors</h2>
            <h3>
              Our Skilled <span>Mentors</span>
            </h3>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
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
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Moazzama Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Moazzama Bukhari</h4>
                  <span>Business Success Manager</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
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
                  <span>Head Of Graphics Designing</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Danish Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <span>Head Of Development Department</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Hadeed Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Hadeed Ul Hassan</h4>
                  <span>React.js Developer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Haram ashraf Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Haram Ashraf</h4>
                  <span>Software Quality Assurance Analyst</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Maham naeem Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Darakhshan Naeem</h4>
                  <span>Laravel Developer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Usama Munir Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Usama Munir</h4>
                  <span>Laravel Developer</span>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
          <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Bilal Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Bilal Yousuf</h4>
                  <span>React.Js | Node.Js Developer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\iqra Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Iqra Maqsood</h4>
                  <span>React.Js Devevloper</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Makhshaf Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Makhshaf Sharif</h4>
                  <span>Software Quality Assurance Analyst</span>
                </div>
              </div>
            </div>
            {/* <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Wajiha Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Wajiha Zainab</h4>
                  <span>Software Quality Assurance Analylst</span>
                </div>
              </div>
            </div> */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Maria Faisal Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Maria Faisal</h4>
                  <span>QA Engineer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\ANAS Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Muhammad Anas Faizan</h4>
                  <span>Flutter Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\faizan Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Zeshan Murtaza</h4>
                  <span>Jr. Laravel Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\ata Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Ata Ur Rehman</h4>
                  <span> React.Js | Node.Js Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets\img\team\Adan Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt=""
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
                  <h4>Muhammad Adan</h4>
                  <span>Graphic Designer</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
