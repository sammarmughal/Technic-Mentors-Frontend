import React, { useEffect } from "react";
import Calltoaction from "./Calltoaction";
import AOS from "aos";

export default function Enterpriseresourceplanning() {
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
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
            // style={{ fontSize: 60 }}
            >
              Enterprise Resource Planning
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="section-title text-center">
          <h2>Manage Every Aspect Of Your Business</h2>
          <h1>
            Enterprise <span>Resouce Planning System</span>
          </h1>
        </div>
        <p style={{ textAlign: "justify" }}>
          We offer a full range of value-added ERP accounting software and
          Customer Relationship Management services for customers with new and
          existing solution deployments. We provide smart strategy and planning,
          design and architecture, implementation and optimization, and
          maintenance and support capabilities under one roof, giving our
          customers high flexibility, excellent value, and complete peace of
          mind.
          <br /> <br />
          Our experts recommend the best ERP accounting software, manufacturing
          ERP software and CRM solutions for your unique business needs and
          enhance these solutions using industry-specialized extensions that
          drive efficiency, generate valuable insights, and save time. Having
          prior experience in working with ERPs makes us the best ERP solution
          providers in the world.
        </p>
      </div>

      <div className="container mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            <div className="section-title text-start">
              <h3>
                The Significance of{" "}
                <span>ERP Accounting Software for Large Enterprises</span>
              </h3>
            </div>
            <p style={{ textAlign: "justify" }}>
              ERP solutions, specifically tailored for large enterprises, plays
              a pivotal role in their financial management and overall
              operations. These sophisticated solutions are of paramount
              importance for large organizations as they facilitate streamlined,
              real-time financial data management across multiple departments
              and locations. Large enterprises deal with complex financial
              transactions, extensive supply chains, and diverse revenue
              streams, and ERP accounting software helps them consolidate and
              standardize their financial processes.
            </p>
            <p style={{ textAlign: "justify" }}>
              By providing a holistic view of financial data, these systems
              enable informed decision-making, aiding in cost control, revenue
              optimization, and risk management. Moreover, an ERP software
              ensures compliance with ever-evolving financial regulations and
              standards, safeguarding the organization’s <a href="https://urdustem.com/use-of-fraud-detection-software-to-safeguard-organizations-from-financial-losses/" target="blank" rel="noopener" style={{ textDecoration: "none" }}> financial integrity</a>.
              Ultimately, for large enterprises, an ERP solution is an
              indispensable tool to enhance operational efficiency, maintain
              financial transparency, and achieve sustainable growth in a
              competitive business landscape.
            </p>
          </div>

          <div
            className="col-md-5"
          >
            <img
              src="assets\img\erp-accounting-software.webp"
              alt="erp-accounting-software"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div
        className="container mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-coins me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>Finance Management</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-headset edu-icons me-3"></i>
                <p className="card-title">
                  {" "}
                  <strong>CRM </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-bullhorn me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>Sales & Marketing</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-people-carry-box me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>HR Management</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-industry me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>Manufacturing</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-link me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>Supply Chain</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-user-tie me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>Business Intelligence</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-warehouse me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>Inventory Management</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-cart-shopping me-3 edu-icnos"></i>
                <p className="card-title">
                  <strong>Purchasing</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 edu-card">
            <div className="card border-0">
              <div className="card-body d-flex">
                <i className="fa-solid fa-circle-nodes me-3  edu-icnos"></i>
                <p className="card-title">
                  <strong>Process Control</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4" style={{ textAlign: "justify" }}>Our ERP Solutions redefine what's possible, offering a tailored approach that aligns with your unique business needs. Experience a harmonized ecosystem where data flows effortlessly, empowering you to make informed decisions in real-time. Elevate your enterprise with a solution designed for scalability, adaptability, and future-proof success. Your journey to operational excellence begins here – where innovation meets practicality, and your business aspirations become reality. Embrace the future of enterprise management with Technic Mentors' ERP Solutions.</p>
      </div>

      <Calltoaction />
    </div>
  );
}
