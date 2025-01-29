import Calltoaction from "./Calltoaction";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyTabs() {
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
              Our Products
            </h1>
          </div>
        </div>
      </div>

      <section id="services-section">
        <div className='container'>
          <div className='row' data-aos="fade-up"
            data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className='col-lg-12 col-sm-12'>
              <div className='section-title text-start' data-aos="fade-up"
                data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2> Our Products</h2>
                <h3>Explore Our <span>Best Software Products</span></h3>
              </div>
              <p style={{ textAlign: "justify" }}>At Technic Mentors, we specialize in delivering comprehensive software solutions to address the diverse needs of businesses. Our range of software products includes Education Management Systems, Point of Sale (POS) software, ERPs, and Ecommerce solutions. These offerings are designed to enhance efficiency, streamline operations, and drive growth in their respective domains.<br /><br />

                Furthermore, our expertise extends beyond these products; we have the capability to develop any custom software solution on demand, tailored precisely to your unique requirements. Technic Mentors is your strategic technology partner, enabling businesses to thrive and succeed in a rapidly evolving digital landscape.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section id="featured-services" className="productservice">
        <div className="container" data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000">

          <div className="row g-4">
          <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-mortarboard"></i>
                  <h5 className="text-center">
                    <strong>Education Management System</strong></h5>
                  <p>
                    An all-in-one solution for your educational management system activities
                  </p>
                  <div>
                    <Link to="/education-management-system">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-bag-check"></i>
                  <h5 className="text-center">
                    <strong>Enterprise Resource Planning</strong></h5>
                  <p>
                    Seamlessly manage all resources for your large enterprise
                  </p>
                  <div>
                    <Link to="/erp-solutions">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-bag-check"></i>
                  <h5 className="text-center">
                    <strong>Ecommerce Solutions</strong></h5>
                  <p>
                    Leverage the Ecommerce solutions for the businesses of all sizes, to seamlessly sealing your product online
                  </p>
                  <div>
                    <Link to="/ecommerce-solutions">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3 d-flex align-items-stretch">
              <div className="card icon-box productCard">
                <div className="card-body">
                  <i className="bi bi-pc-display-horizontal"></i>
                  <h5 className="text-center">
                    <strong>Point Of Sale</strong>
                  </h5>
                  <p>
                    Manage your daily sales, transactions, inventory and monitor your cash flow with our POS system
                  </p>
                  <div>
                    <Link to="/point-of-sale">
                      {" "}
                      <button type="button" className="btn px-3 py-2">
                        <i className="fas fa-arrow-right rightServiceArrow"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Calltoaction />
    </div>
  );
}

export default MyTabs;
