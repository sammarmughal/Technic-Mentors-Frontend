import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="allHeaderBg"
      >
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1 className="head text-center text-white animate__animated animate__zoomIn allHeaderP">
              Our Software Development Team
            </h1>
          </div>
        </div>
      </div>

      <section id="team" className="team section-bg dev-team">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="section-title text-center">
            <h2>Meet Our Expert Team</h2>
            <h3>
              Our Skilled <span>Mentors</span>
            </h3>
            <p>At Technic Mentors, our team is the heart of our success. Comprised of passionate developers, innovative designers, and forward-thinking strategists, we are dedicated to delivering world-class software solutions. Together, we turn visionary ideas into impactful realities, driving excellence at every stage of the development process.</p>
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
                  <p>Nadeem Munir</p>
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
                    alt="moazzama-bukhari-mentors"
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
                  <p>Moazzama Bukhari</p>
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
                  <p>Waseem Munir</p>
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
                    alt="danish-mirza-mentors"
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
                  <p>Danish Mirza</p>
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
                    alt="hadeed-ul-hassan-mentors"
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
                  <p>Hadeed Ul Hassan</p>
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
                    alt="haram-ashraf-mentors"
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
                  <p>Haram Ashraf</p>
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
                    alt="darakhshan-naeem-mentors"
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
                  <p>Darakhshan Naeem</p>
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
                    alt="usama-munir-mentors"
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
                  <p>Usama Munir</p>
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
                    alt="bilal-yousuf-mentors"
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
                  <p>Bilal Yousuf</p>
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
                    alt="iqra-maqsood-mentors"
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
                  <p>Iqra Maqsood</p>
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
                    alt="makhshaf-sharif-mentors"
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
                  <p>Makhshaf Sharif</p>
                  <span>Software Quality Assurance Analyst</span>
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
                    src="assets\img\team\Maria Faisal Technic Mentors.webp"
                    className="img-fluid team-member"
                    alt="maria-faisal-mentors"
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
                  <p>Maria Faisal</p>
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
                    alt="muhammad-anas-faizan-mentors"
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
                  <p>Muhammad Anas Faizan</p>
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
                    alt="zeshan-murtaza-mentors"
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
                  <p>Zeshan Murtaza</p>
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
                    alt="ata-ur-rehman-mentors"
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
                  <p>Ata Ur Rehman</p>
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
                    alt="muhammad-adan-mentors"
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
                  <p>Muhammad Adan</p>
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
