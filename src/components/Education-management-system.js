import React, { useEffect } from 'react'
import Calltoaction from './Calltoaction'
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function Educationmanagementsystem() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        {/* open grapgh tag */}
      <meta property="og:title" content="Education Management System" />
        <meta property="og:description" content="CapoBrain is an education management system that simplifies administrative tasks and facilitates communication between teachers, staff, and parents. Its intu.." />
        <meta property="og:image" content="https://technicmentors.com/assets/img/erp-accounting-software.webp" />
        <meta property="og:url" content="https://technicmentors.com/education-management-system" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechnicMentors" />
        <meta name="twitter:title" content="Education Management System" />
        <meta name="twitter:description" content="CapoBrain is an education management system that simplifies administrative tasks and facilitates communication between teachers, staff, and parents. Its intu.." />
        <meta name="twitter:image" content="https://technicmentors.com/assets/img/erp-accounting-software.webp" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com/education-management-system" ,
            "name": "Technic Mentors",
            "description": "CapoBrain is an education management system that simplifies administrative tasks and facilitates communication between teachers, staff, and parents. Its intu.." ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>

        <link rel="canonical" href="https://technicmentors.com/education-management-system" />
        <meta name="description" content="CapoBrain is an education management system that simplifies administrative tasks and facilitates communication between teachers, staff, and parents. Its intu.." />
      </Helmet>
     <div
          className="allHeaderBg"
        >
          <div className="allHeader-overlay d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
                // style={{ fontSize: 60 }}
              >
                 Education Management System
              </h1>
            </div>
          </div>
        </div>


        <div className="container mt-5">
              <div className="section-title text-center">
                <h2>Manage Your School Efficiently</h2>
                <h1>
                  Education <span>Management System</span>
                </h1>
              </div>
              <p style={{textAlign: "justify"}}>
               <a href="https://capobrain.com/" target='blank' rel='noopener' style={{textDecoration:"none"}}> CapoBrain</a> is an education management system that simplifies
                administrative tasks and facilitates communication between
                teachers, staff, and parents. Its intuitive interface and robust
                capabilities make managing student information, scheduling
                classes, and tracking attendance a breeze.
                <br /> <br />
                CapoBrain also includes features for teachers to create and
                assign tasks and for parents to stay updated on their child’s
                progress. CapoBrain excels in accounts and inventory management,
                providing financial tools to track expenses, income, and budget,
                enabling informed decisions. It also allows schools to monitor
                their resources and equipment, generate usage reports, and keep
                track of stock levels.
              </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-chart-line me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Admin Dashboard</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-users edu-icons me-3"></i>
                      <p className="card-title"><strong>Staff Management</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-graduation-cap me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Student Management</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-warehouse me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Inventory Management</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-money-bill me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Fee Management</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-id-card me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Account Management</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-square-poll-horizontal me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Results Management</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-book me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Syllabus Management</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-book-open-reader me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Library Management</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-money-check-dollar me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Expense Management</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-chart-pie me-3 edu-icnos"></i>
                      <p className="card-title"><strong>Conclusive Reporting</strong></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3 edu-card">
                  <div className="card border-0 product-card">
                    <div className="card-body d-flex">
                      <i className="fa-solid fa-sliders me-3 edu-icnos"></i>
                      <p className="card-title"><strong>System Configuration</strong></p>
                    </div>
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
<Calltoaction />

    </div>
  )
}
