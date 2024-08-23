import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import FAQ from './FAQ';
import issueImg from "../images/help-img.avif"

export default function Help() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div >
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Blogs" />
        <meta property="og:description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
        <meta property="og:image" content="https://capobrain.com/img/about%20us.png" />
        <meta property="og:url" content="https://capobrain.com/blog" />
        <meta property="og:type" content="website" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Blogs" />
        <meta name="twitter:description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
        <meta name="twitter:image" content="https://capobrain.com/img/about%20us.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/blog",
            "name": "Capobrain",
            "description": "CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://capobrain.com/search?q={search_term_string}",
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

        <link rel="canonical" href="https://capobrain.com/blog" />
        <meta name="description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
      </Helmet>
      <div
        className="allHeaderBg"
      >
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
            >
              Help Center
            </h1>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row help-card justify-content-between">
          <div className="col-md-3">
            <i className='fas fa-ticket-alt'></i>
            <h5>Streamlined Ticketing</h5>
            <p> Easily log and track issues for swift resolution and seamless communication.</p>
          </div>
          <div className="col-md-3">
            <i className='fas fa-headset'></i>
            <h5>Tailored Support</h5>
            <p>Get tailored assistance for your school's unique challenges.</p>

          </div>
          <div className="col-md-3">
            <i className='fas fa-chart-line'></i>
            <h5>Continuous Improvements</h5>
            <p> Share your experiences and suggestions for continuous software improvement.</p>

          </div>
        </div>
      </div >
      <div style={{ backgroundColor: "#f1f6fe" }}>
        <div className="container py-4">
          <div className="row issue-solution align-items-center justify-content-between">
            <div className="col-md-6 help_points">
              <h1>Uh Oh! <span> Having An Issue</span>?</h1>
              <p>  Let us know if you run into any glitches while using our software. Your feedback helps us fix issues and make things smoother for everyone!</p>
              <h5> How to report an issue:</h5>
              <li>Briefly explain what went wrong.</li>
              <li>If you can, show us how to make the bug happen again (step-by-step).</li>
              <li>Copy and paste any error messages that pop up.</li>

              <h5 className='mt-3'> How to Report:</h5>
              Still need guidance? <Link to="/userLogin" className='geneTicketLink'> Generate a ticket</Link> of your problem and our support team will take you through the process to resolve your issue.
            </div>
            <div className="col-md-5">
              <img src={issueImg} alt="" className='img-fluid' />
            </div>
          </div>
        </div >
      </div>

      <FAQ />
    </div>
  )
}
