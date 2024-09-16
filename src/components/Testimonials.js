
import React, { useEffect } from 'react';
import 'swiper/css';
import Swiper from 'swiper';

const TestimonialCarousel = () => {
  useEffect(() => {
    const initSwiper = () => {
      new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    };

    initSwiper();
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className='testimonials-overlay'></div>
      <div className="container">
        <div className="testimonials-slider swiper" >
          <div className="swiper-wrapper py-5">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets\img\client-img3.jpg" className="testimonial-img"
                  width="100"
                  height="100"
                  alt="uju-fidel" />
                <p className='pFont'>Uju Fidel</p>
                <p >Manager Crox Media, London</p>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  “Their expertise in software development is truly exceptional.
                  They exceeded our expectations and delivered outstanding results.
                  A reliable partner for all your software needs.”
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets\img\client-img2.jpeg" className="testimonial-img"
                  width="100"
                  height="100"
                  alt="arish-virk" />
                <p className='pFont'>Arish Virk</p>
                <p>CEO Baroha Farms, Islamabad</p>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Technic Mentors is offering really very good services for web development.
                  Our website developed by Technic Mentors is very attractive and user
                  friendly for the use of our company employees and field users.
                  We highly recommend Technic Mentors for Web Development Services.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets\img\client-img1.jpeg" className="testimonial-img"
                  width="100"
                  height="100"
                  alt="muhammad-khan" />
                <p className='pFont'>Muhammad Khan</p>
                <p>CEO Mobilfiksern, Oslo</p>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  The team at Technic Mentors offers excellent and on-schedule services.
                  When I first discussed what I needed, they were quick to respond with perfect solution.
                  Excellent domain knowledge and professionalism. Would love to work with them again.
                  Highly Recommended!!
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>


          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialCarousel;
