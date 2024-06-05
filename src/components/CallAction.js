import React from 'react'
import { Link } from 'react-router-dom'

export default function CallAction() {
    return (
        <div>
            <section id="testimonials" className="calAction">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center py-3">
                        <div className="col-md-12 section-title">
                            <h3 className='text-white text-center'>Let's Transform Your Business With <span>Expert IT Consultants</span></h3>
                        </div>
                        <div className="col-lg-4">
                            <div className=' text-center'>
                                <Link to="/contact"><button className='btn btn-outline-light'>Get A Free Quote</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
