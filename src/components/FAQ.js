import React from 'react'
import { Link } from 'react-router-dom'
export default function FAQ() {
  return (
    <div>
      {/* <section id="faq" className="faq section-bg "> */}
      <section id="faq" className="faq pt-4 ">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title text-center">
            <h2>F.A.Q</h2>
            <p> Frequently Asked <span>Questions</span> </p>
            <p>
              Our curated list of the most frequently asked questions about us.
            </p>
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
                    What services does your company provide?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq1"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Our company offers a wide range of IT services, including
                      software development, web development, mobile app
                      development, IT consulting, cloud solutions,
                      cybersecurity, and more. We specialize in tailoring
                      solutions to meet your specific business needs.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    className="collapsed question text-start"
                  >
                    How much will it cost to develop a custom software solution
                    for my business?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq2"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The cost of developing custom software depends on various
                      factors, such as project complexity, features, and
                      technology stack. We provide personalized quotes after a
                      detailed project assessment. Our goal is to offer
                      cost-effective solutions that align with your budget and
                      requirements.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    className="collapsed question text-start"
                  >
                    What is your approach to ensuring data security and privacy?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq3"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      We take data security and privacy seriously. Our team
                      follows industry best practices and adheres to stringent
                      security measures to safeguard your data. We implement
                      encryption, access controls, and regular security audits
                      to protect your information.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    className="collapsed question text-start"
                  >
                    How long will it take to complete a software development
                    project? <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq4"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Project timelines vary based on project scope and
                      complexity. During the project planning phase, we provide
                      you with a detailed timeline. We work diligently to meet
                      deadlines and keep you updated on the project's progress
                      throughout its lifecycle.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    className="collapsed question text-start"
                  >
                    Do you provide ongoing support and maintenance after the
                    project is completed?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq5"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, we offer post-development support and maintenance
                      services. Our team is available to address any issues,
                      implement updates, and provide technical assistance to
                      ensure your software continues to perform optimally.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq6"
                    className="collapsed question text-start"
                  >
                    Can you provide references or examples of past projects
                    you've completed?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq6"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Absolutely! We can share case studies and provide
                      references from previous clients. You can also browse our
                      portfolio on our website to see examples of projects we've
                      successfully delivered.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
       <Link to="/faq-page"> <button className='btn btn-primary px-4 py-2'>View More <i className='fas fa-arrow-right'></i></button></Link>
       </div>
      </section>
    </div>
  )
}
