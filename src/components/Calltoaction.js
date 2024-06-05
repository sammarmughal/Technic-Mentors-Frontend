import React from 'react'
import { Link } from 'react-router-dom'

export default function Calltoaction() {
  return (
    <div>
      <div className="footer-newsletter section-bg" style={{ backgroundColor: "#f1f6fe" }} id="footer" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center py-3">
            <div className="col-md-12 section-title text-center">
              <h3 style={{color:"initial"}}>Let's Transform Your Business With <span>Expert IT Consultants</span></h3>
            </div>
            <div className="col-lg-4">
              <div className=' text-center'>
                <Link to="/contact"><button className='btn btn-outline-primary'>Get A Free Quote</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
