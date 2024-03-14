import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Footer() {
  const location = useLocation()
  const handleClick = (pathname) => {
    if (location.pathname === pathname) {
      window.scrollTo(0, 0)
    }
  }

  if (location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board") {
    return null;
  }
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact text-start">
                <h3>Technic Mentors</h3>
                <p>
                  <strong>Address:</strong> United Kingdom |
                  Norway | <br />Pakistan <br /><br />
                  <strong>Phone:</strong> <a style={{ textDecoration: "none", color: "#777777" }} href='tel:+923 111 122 144'> +923 111 122 144</a><br />
                  <strong>Email:</strong> info@technicmentors.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links text-start">
                <h4>Useful Links</h4>
                <ul>
                  <li onClick={() => handleClick('/')}><i className="bx bx-chevron-right"></i> <Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
                  <li onClick={() => handleClick('/about')}><i className="bx bx-chevron-right"></i> <Link to="/about" style={{ textDecoration: "none" }}>About us</Link></li>
                  <li onClick={() => handleClick('/services')}><i className="bx bx-chevron-right"></i> <Link to="/services" style={{ textDecoration: "none" }}>Services</Link></li>
                  <li onClick={() => handleClick('/products')}><i className="bx bx-chevron-right"></i> <Link to="/products" style={{ textDecoration: "none" }}>Products</Link></li>
                  <li onClick={() => handleClick('/team')}><i className="bx bx-chevron-right"></i> <Link to="/team" style={{ textDecoration: "none" }}>Our Team</Link></li>
                  <li onClick={() => handleClick('/login')}><i className="bx bx-chevron-right"></i> <Link to="/login" style={{ textDecoration: "none" }}>Admin</Link></li>
                  <li onClick={() => handleClick('/contact')}><i className="bx bx-chevron-right"></i> <Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links text-start">
                <h4>Our Services</h4>
                <ul>
                  <li onClick={() => handleClick('/web-development-services')}><i className="bx bx-chevron-right"></i> <Link to="/web-development-services" style={{ textDecoration: "none" }}>Web Design & Development</Link></li>
                  <li onClick={() => handleClick('/software-development-services')}><i className="bx bx-chevron-right"></i> <Link to="/software-development-services" style={{ textDecoration: "none" }}>Software Development</Link></li>
                  <li onClick={() => handleClick('/mobile-app-development-services')}><i className="bx bx-chevron-right"></i> <Link to="/mobile-app-development-services" style={{ textDecoration: "none" }}>Mobile Apps Development</Link></li>
                  <li onClick={() => handleClick('/seo-services')}><i className="bx bx-chevron-right"></i> <Link to="/seo-services" style={{ textDecoration: "none" }}>SEO Services</Link></li>
                  <li onClick={() => handleClick('/digital-marketing-services')}><i className="bx bx-chevron-right"></i> <Link to="/digital-marketing-services" style={{ textDecoration: "none" }}>Digital Marketing</Link></li>
                  <li onClick={() => handleClick('/graphics-designing-services')}><i className="bx bx-chevron-right"></i> <Link to="/graphics-designing-services" style={{ textDecoration: "none" }}>Graphics Designing</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Follow us on all social channels to get the latest upates regarding our services.</p>
                <div className="social-links mt-3">
                  <a href="https://www.facebook.com/TechnicMentors" target='blank' className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="https://twitter.com/TechnicMentors" target='blank' className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.instagram.com/technicmentorsofficial" target='blank' className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="https://www.youtube.com/c/TechnicMentors" target='blank' className="youtube"><i className="bx bxl-youtube"></i></a>
                  <a href="https://www.linkedin.com/in/TechnicMentors/" target='blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  <a href="https://wa.me/923111122144" target='blank'><i className="fa-brands fa-whatsapp"></i></a>


                </div>
              </div>

            </div>
          </div>
        </div>
        {/* link */}
        {/* link */}
        <div className="container d-flex justify-content-center align-items-center pt-3 pb-1">
          <div className="copyright text-white">
            &copy; Copyright <strong><span>Technic Mentors</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
