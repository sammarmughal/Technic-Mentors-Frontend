import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import webDevelopment from "../images/web-development.avif"

export default function Webdevelopmentservices() {
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
            <h1
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
            // style={{ fontSize: 60 }}
            >
              Web Development Services
            </h1>
          </div>
        </div>
      </div>


      <section>
        <div className="container">
          <div className="row justify-content-between align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="col-lg-6 col-sm-12">
              <div className="section-title text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2> Our Services</h2>
                <h3>
                  Grow Your Business With Our <span>Web Development Services</span>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                Web development services encompass two essential steps: web design and web development. Web design focuses on the aesthetics and visual appeal of your website, while web development emphasizes its functionality and performance. Now, you might be wondering: Why are web design and web development services crucial for your business? </p>
              <p style={{ textAlign: "justify" }}>The answer is simple yet impactful. By having a professionally designed website and a well-executed online presence strategy, you unlock the power to effectively market yourself and your business in the digital realm. Not only does your website serve as a virtual representation of your brand, but it also plays a vital role in establishing credibility and trust among your target audience.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                src={webDevelopment}
                className="img-fluid"
                max-width="100%"
                height="auto"
                alt="it-services"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services-section">
        <div className='container mt-5 mb-5 how-we-do'>
          <div className="row d-flex text-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className='section-title'>
              <h3 className='text-center'> <span style={{ color: "black" }}>How We Do It? </span></h3>
            </div>
            <div className="col-md-6 mt-1">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-center service-line' >
                <div className="services-list" style={{ listStyle: "none", textAlign: "left", color: "#684df4" }}> <p>Securing Domain</p> </div>
                <p style={{ textAlign: "justify" }}>We safeguard your online identity with rock-solid domain security measures, ensuring your web presence remains impervious to digital threats of domain security measures.</p>

                <div className="services-list" style={{ listStyle: "none", textAlign: "left", color: "#684df4" }}> <p>SEO Focused Content</p> </div>
                <p style={{ textAlign: "justify" }}>Elevate your online visibility with our SEO-optimized content that not only informs but also captivates, driving organic traffic to your website.</p>
              </div>
            </div>
            <div className="col-md-6 mt-1">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-center service-line' >
                <div className="services-list" style={{ listStyle: "none", textAlign: "left", color: "#684df4" }}> <p>Competitor Aanalysis</p> </div>
                <p style={{ textAlign: "justify" }}>Our expert analysis dissects your competitors' online strategies, giving you a competitive edge in the digital arena.We dissect the strategies of your competitors, examining their strengths, weaknesses.</p>

                <div className="services-list" style={{ listStyle: "none", textAlign: "left", color: "#684df4" }}> <p>Responsive Designs</p> </div>
                <p style={{ textAlign: "justify" }}>We craft pixel-perfect, responsive designs that adapt seamlessly across all devices, delivering an impeccable user experience for your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="col-lg-12">
              <div className="section-title text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h3>
                  We Serve <span>The Best Work</span>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
                In today’s competitive landscape, a <a href="https://urdustem.com/unlocking-different-features-of-cool-websites/" target='blank' rel='noopener' style={{ textDecoration: "none" }}> compelling website</a> acts as a powerful tool that enables you to attract and engage potential clients, ultimately leading to business growth and success. By investing in top-notch web development services, you position yourself to capture the attention of your desired clientele and convert them into loyal customers. </p>
              <p style={{ textAlign: "justify" }}>Partner with our team of experienced web developers who possess the expertise to craft sophisticated and SEO-friendly websites. We are dedicated to creating exceptional online experiences that seamlessly combine captivating designs with seamless functionality. Elevate your business’s online presence with our comprehensive web services, and gain a competitive edge in the digital arena. Embrace the endless possibilities that a well-designed and meticulously developed website can bring to your brand. Start your journey toward online success today.
              </p>
            </div>
          </div>
        </div>



      </section>

      {/* types of sites */}
      <section id="faq" className="faq pt-4 ">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title text-center">
            <h2>Diverse Web Services</h2>
            <p style={{ fontSize: "26px", fontWeight: "500" }}> Infinite Possibilities, One Solution </p>
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
                    Corporate Website{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq1"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      A corporate website serves as the digital face of your business, offering a professional platform to showcase your company's services, values, and achievements. Designed for credibility and efficiency, these websites are tailored to meet the needs of businesses by offering clear communication, strategic content, and intuitive navigation that aligns with your corporate goals.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    className="collapsed question text-start"
                  >
                    Educational Website{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq2"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Educational websites are crafted to deliver knowledge effectively, whether for schools, universities, or online learning platforms. We design interactive and engaging websites that facilitate learning through multimedia content, organized course structures, and easy access to educational resources, promoting a user-friendly experience for students and educators alike.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    className="collapsed question text-start"
                  >
                    E-commerce Website{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq3"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      An ecommerce website transforms the shopping experience, allowing customers to browse, purchase, and manage orders online. Our ecommerce solutions are optimized for seamless transactions, secure payment processing, and user-friendly design, ensuring your products and services are easily accessible to a global audience.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    className="collapsed question text-start"
                  >
                    Services Website <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq4"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      A services website is built to highlight the specific offerings of your business, whether you operate in healthcare, consulting, finance, or any other service industry. Our service-oriented websites focus on presenting your expertise, showcasing case studies, and enabling easy booking or inquiry options, ensuring potential clients can connect with your services effortlessly.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    className="collapsed question text-start"
                  >
                    Portfolio Website{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq5"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      A portfolio website is the perfect platform for showcasing your work, whether you’re a designer, photographer, or artist. We create visually appealing and well-organized portfolio sites that present your projects in the best light, allowing potential clients and collaborators to explore your creativity, skills, and experience with ease.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq6"
                    className="collapsed question text-start"
                  >
                    Blogging Website{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq6"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Our blogging websites provide a platform for you to share your insights, stories, and expertise with a wider audience. Whether you're a hobbyist or professional blogger, we design blogging websites with optimized content management systems, intuitive navigation, and engaging layouts that encourage interaction and growth within your community.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </div>




  )
}
