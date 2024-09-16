import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Footer() {
  const location = useLocation()

  if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/alltickets") {
    return null;
  }
  return (
    <div>
      <footer id="footer">
        <div className='footerBg'>
          <div className="footer-top footeroverlay">
            <div className="container">
              <div className="row justify-content-between py-3 g-3">

                <div className="col-lg-3 col-md-6 footer-contact text-start">
                  <h2>Technic Mentors</h2>
                  <p>
                    <i className='fas fa-map-marker-alt me-2'></i>
                    United Kingdom | Norway | Pakistan
                  </p>
                  <p className='mt-2'>
                  <i className='fas fa-phone me-2'></i>
                    <a style={{ textDecoration: "none", color: "white" }} href='tel:+923 111 122 144'> +923 111 122 144</a>
                  </p>
                  <p className='mt-2'>
                  <i className='fas fa-envelope me-2'></i>
                    info@technicmentors.com<br />
                  </p>
                </div>

                <div className="col-md-5 text-start footer-subscribe">
                  <h2>Subscribe</h2>
                  <p>Stay updated on how future of technology is shaping</p>
                  <div className='d-flex'>
                    <input type='text' className='form-control bg-transparent py-3' placeholder='Enter Your Email Here'></input>
                    <button className='btn btn-light px-4' style={{ marginLeft: "2%" }}>Submit</button>
                  </div>
                </div>


                <div className="col-lg-3 col-md-6 footer-links">
                  <h2>Our Social Links</h2>
                  <p>Follow us on all social channels to get the latest updates regarding our services.</p>
                  <div className="social-links mt-3">

                    <a href="https://www.facebook.com/TechnicMentors" target='blank' className="facebook"><i className="bx bxl-facebook"></i> <span className="d-none">book</span></a>
                    <a href="https://twitter.com/TechnicMentors" target='blank' className="twitter"><i className="bx bxl-twitter"></i> <span className="d-none">tter</span></a>
                    <a href="https://www.instagram.com/technicmentorsofficial" target='blank' className="instagram"><i className="bx bxl-instagram"></i> <span className="d-none">gram</span></a>
                    <a href="https://www.youtube.com/c/TechnicMentors" target='blank' className="youtube"><i className="bx bxl-youtube"></i> <span className="d-none">tube</span></a>
                    <a href="https://www.linkedin.com/in/TechnicMentors/" target='blank' className="linkedin"><i className="bx bxl-linkedin"></i> <span className="d-none">in</span></a>
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
            <p className='py-2'>  &copy; copyright <strong><span>Technic Mentors</span></strong>. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
