import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTeam() {
    return (
        <div>
            <div className='container team'>
                <div className="section-title text-center">
                    <h2>Our Team Of Mentors</h2>
                    <h3>
                        Team Of <span> Experts</span>
                    </h3>
                </div>
                <div className="row">
                    <div
                        className="col-lg-3 col-md-6 d-flex align-items-stretch"

                    >
                        <div className="member">
                            <div className="member-img">
                                <img
                                    src="assets\img\team\nadeem Technic Mentors.webp"
                                    className="img-fluid executive"
                                    width="350"
                                    height="300"
                                    alt="nadeem-munir"
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

                    >
                        <div className="member">
                            <div className="member-img">
                                <img
                                    src="assets\img\team\Moazzama Technic Mentors.webp"
                                    className="img-fluid team-member"
                                    width="350"
                                    height="300"
                                    alt="moazzama-bukhari"
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

                    >
                        <div className="member">
                            <div className="member-img">
                                <img
                                    src="assets\img\team\Waseem Technic Mentors.webp"
                                    className="img-fluid executive"
                                    width="350"
                                    height="300"
                                    alt="waseem-munir"
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

                    >
                        <div className="member">
                            <div className="member-img">
                                <img
                                    src="assets\img\team\Danish Technic Mentors.webp"
                                    className="img-fluid team-member"
                                    width="350"
                                    height="300"
                                    alt="danish-mirza"
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
                <div className="d-flex justify-content-center">
                    <Link to="/team">  <button className='btn btnFill px-4 py-2'>View All <i className='fas fa-arrow-right'></i></button></Link>
                </div>
            </div>
        </div>
    )
}
