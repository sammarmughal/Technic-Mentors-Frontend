import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Footer() {
  const location = useLocation()
  const handleClick = (pathname) => {
    if (location.pathname === pathname) {
      window.scrollTo(0, 0)
    }
  }

  if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/alltickets" || location.pathname === "/userLogin" || location.pathname === "/signup") {
    return null;
  }
  return (
    <div>
      <footer id="footer">
        <div className='footerBg'>
          <div className="footer-top footeroverlay">
            <div className="container">
              <div className="row">

                <div className="col-lg-3 col-md-6 footer-contact text-start">
                  <h2>Technic Mentors</h2>
                  <p>
                    <strong>Address:</strong> United Kingdom |
                    Norway | <br />Pakistan <br /><br />
                    <strong>Phone:</strong> <a style={{ textDecoration: "none", color: "white" }} href='tel:+923 111 122 144'> +923 111 122 144</a><br />
                    <strong>Email:</strong> info@technicmentors.com<br />
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links text-start">
                  <h2>Useful Links</h2>
                  <ul>
                    <li onClick={() => handleClick('/')}><i className="bx bx-chevron-right"></i> <Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
                    <li onClick={() => handleClick('/about')}><i className="bx bx-chevron-right"></i> <Link to="/about" style={{ textDecoration: "none" }}>About us</Link></li>
                    <li onClick={() => handleClick('/services')}><i className="bx bx-chevron-right"></i> <Link to="/services" style={{ textDecoration: "none" }}>Services</Link></li>
                    <li onClick={() => handleClick('/products')}><i className="bx bx-chevron-right"></i> <Link to="/products" style={{ textDecoration: "none" }}>Products</Link></li>
                    <li onClick={() => handleClick('/team')}><i className="bx bx-chevron-right"></i> <Link to="/team" style={{ textDecoration: "none" }}>Our Team</Link></li>
                    <li onClick={() => handleClick('/adminLogin')}><i className="bx bx-chevron-right"></i> <Link to="/adminLogin" style={{ textDecoration: "none" }}>Admin</Link></li>
                    <li onClick={() => handleClick('/contact')}><i className="bx bx-chevron-right"></i> <Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link></li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links text-start">
                  <h2>Our Services</h2>
                  <ul>
                    <li onClick={() => handleClick('/web-development-services')}><i className="bx bx-chevron-right"></i> <Link to="/web-development-services" style={{ textDecoration: "none" }}>Web Design & Development</Link></li>
                    <li onClick={() => handleClick('/software-development-services')}><i className="bx bx-chevron-right"></i> <Link to="/software-development-services" style={{ textDecoration: "none" }}>Software Development</Link></li>
                    <li onClick={() => handleClick('/mobile-app-development-services')}><i className="bx bx-chevron-right"></i> <Link to="/mobile-app-development-services" style={{ textDecoration: "none" }}>Mobile App Development</Link></li>
                    <li onClick={() => handleClick('/seo-services')}><i className="bx bx-chevron-right"></i> <Link to="/seo-services" style={{ textDecoration: "none" }}>SEO Services</Link></li>
                    <li onClick={() => handleClick('/digital-marketing-services')}><i className="bx bx-chevron-right"></i> <Link to="/digital-marketing-services" style={{ textDecoration: "none" }}>Digital Marketing</Link></li>
                    <li onClick={() => handleClick('/graphics-designing-services')}><i className="bx bx-chevron-right"></i> <Link to="/graphics-designing-services" style={{ textDecoration: "none" }}>Graphic Designing</Link></li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h2>Our Social Links</h2>
                  <p>Follow us on all social channels to get the latest updates regarding our services.</p>
                  <div className="social-links mt-3">
                    <a href="https://www.facebook.com/TechnicMentors" target='blank' className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://twitter.com/TechnicMentors" target='blank' className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com/technicmentorsofficial" target='blank' className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.youtube.com/c/TechnicMentors" target='blank' className="youtube"><i className="bx bxl-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/TechnicMentors/" target='blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    {/* <a href="https://wa.me/923111122144" target='blank'><i className="fa-brands fa-whatsapp"></i></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div style={{ backgroundColor: "white" }}>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="copyright">
            <h5 className='py-2'>  &copy; copyright <strong><span>Technic Mentors</span></strong>. All Rights Reserved</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
