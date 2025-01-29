import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Educationmanagementsystem() {
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
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP">
              Learning Administration Platform
            </h1>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="section-title text-center">
          <h2>Manage Your School Efficiently</h2>
          <h3>
            Education <span>Management System</span>
          </h3>
        </div>
        <p style={{ textAlign: "justify" }}>
          <a href="https://capobrain.com/" target='blank' rel='noopener' style={{ textDecoration: "none" }}> CapoBrain</a> is an education management system that simplifies
          administrative tasks and facilitates communication between
          teachers, staff, and parents. Its intuitive interface and robust
          capabilities make managing student information, scheduling
          classes, and tracking attendance a breeze.
        </p>
        <p>
          CapoBrain Learning Administration also includes features for teachers to create and
          assign tasks and for parents to stay updated on their child’s
          progress. CapoBrain excels in accounts and inventory management,
          providing financial platform tools to track expenses, income, and budget,
          enabling informed decisions. It also allows schools to monitor
          their resources and equipment, generate usage reports, and keep
          track of stock levels.
        </p>
      </div>

      <div className="container mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-chart-line me-3 edu-icnos"></i>
                <p className="card-title">Admin Dashboard</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-users edu-icons me-3"></i>
                <p className="card-title">Staff Management</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-graduation-cap me-3 edu-icnos"></i>
                <p className="card-title">Student Management</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-warehouse me-3 edu-icnos"></i>
                <p className="card-title">Inventory Management</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-money-bill me-3 edu-icnos"></i>
                <p className="card-title">Fee Management</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-id-card me-3 edu-icnos"></i>
                <p className="card-title">Account Management</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-square-poll-horizontal me-3 edu-icnos"></i>
                <p className="card-title">Results Management</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-book me-3 edu-icnos"></i>
                <p className="card-title">Syllabus Management</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-book-open-reader me-3 edu-icnos"></i>
                <p className="card-title">Library Management</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-money-check-dollar me-3 edu-icnos"></i>
                <p className="card-title">Expense Management</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-chart-pie me-3 edu-icnos"></i>
                <p className="card-title">Conclusive Reporting</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0 product-card">
              <div className="card-body d-flex">
                <i className="fa-solid fa-sliders me-3 edu-icnos"></i>
                <p className="card-title">System Configuration</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* benefits */}
      <div className='benefits my-3' id="services-section">
        <div className="container py-4">
          <div className='section-title'>
            <h3 className='text-center mb-4'>Benefits To Use Our <span>Educational Institute Management</span> System </h3>
          </div>
          <div className="row">
            <div className="col-md-6 benefitsCol1">
              <li>
                <p className='seo-heading-h3'>Automated Attendance Tracking</p>
                <p>Simplifies attendance management by automatically recording student attendance, reducing manual entry errors, and saving time for teachers.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Parent-Teacher Communication</p>
                <p>Provides a seamless channel for communication between parents and teachers through messaging and notifications.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Grade and Report Card Generation</p>
                <p>Automatically calculates and generates grades and report cards, ensuring accuracy and timely delivery.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Fee Management</p>
                <p>Simplifies fee collection, tracks payments, and manages student accounts with detailed financial reports.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Data Security</p>
                <p>Protects sensitive student and staff data with robust security measures and regular backups.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Student Profiles</p>
                <p>Maintains detailed student profiles, including academic records, attendance, and personal information.</p>
              </li>
            </div>
            <div className="col-md-6">
              <li>
                <p className='seo-heading-h3'>Intuitive Design</p>
                <p>Ensures ease of use with a user-friendly interface that requires minimal training for staff and students.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Library Management</p>
                <p>Simplifies the management of library resources, including book issuance, returns, and cataloging.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Detailed Reports</p>
                <p>Generates comprehensive reports on various aspects such as academic performance and attendance.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Customizable Modules</p>
                <p>Tailors the software to meet the specific needs of your institution with customizable modules and features.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Reduced Operational Costs</p>
                <p>Lowers administrative costs by automating routine tasks and reducing paper-based processes.</p>
              </li>
              <li>
                <p className='seo-heading-h3'>Enhanced Communication</p>
                <p>Facilitates seamless communication between stakeholders, including parents, teachers, and administrators, through instant messaging.</p>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="section-title text-start">
              <h3>
                Let's Have A <span>Free Demo</span>
              </h3>
            </div>
            <p className="lead" style={{ textAlign: "justify" }}>
              <strong>
                See for yourself how our best education management system
                works:
              </strong>
            </p>
            <ul>
              <li>
                Go to:
                <strong>
                  {" "}
                  <a
                    href="https://demo.capobrain.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://demo.capobrain.com
                  </a>
                </strong>
              </li>
              <li>Username: CAPOUSER</li>
              <li>Password: 12345678</li>
            </ul>
          </div>

          <div className="col-md-6 col-sm-12 embed-responsive embed-demo-video mt-3">
            <iframe
              className="embed-responsive embedd-responsive-item video-div"
              width="500"
              height="300"
              src="https://www.youtube.com/embed/7k4E6ZveXkI?si=VUbtIbhiwZis9fQY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
