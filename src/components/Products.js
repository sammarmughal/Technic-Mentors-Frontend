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
          className="background-image1"
          style={{ backgroundImage: `url(${"assets/img/bg-header.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
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
                    <p style={{textAlign: "justify"}}>At Technic Mentors, we specialize in delivering comprehensive software solutions to address the diverse needs of businesses. Our range of software products includes Education Management Systems, Point of Sale (POS) software, ERPs, and Ecommerce solutions. These offerings are designed to enhance efficiency, streamline operations, and drive growth in their respective domains.<br/><br/>
                        
                    Furthermore, our expertise extends beyond these products; we have the capability to develop any custom software solution on demand, tailored precisely to your unique requirements. Technic Mentors is your strategic technology partner, enabling businesses to thrive and succeed in a rapidly evolving digital landscape.
                        </p>
                </div>
                
            </div>
            </div>
        </section>

      

<section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <Link style={{textDecoration:"none"}}  to='/education-management-system'>
            <div className="icon-box product-icon-box " data-aos="fade-up"
         data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="icon"><i className="bi bi-mortarboard"></i></div>
              <h4 className="title">Education Management System</h4>
              <p className="description">An all-in-one solution for your school mangement activites</p><br/>
            </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <Link style={{textDecoration:"none"}} to='/erp-solutions'>
            <div className="icon-box product-icon-box different-card" data-aos="fade-up"
         data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="icon"><i className="bi bi-building" style={{color: "white"}}></i></div>
              <h4 className="title" style={{color: "white"}}>Enterprise Resource Planning</h4>
              <p className="description" style={{color: "white"}}>Seamlessly manage all resources of your large enterprise</p>  
            </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <Link style={{textDecoration:"none"}} to='/ecommerce-solutions'>
            <div className="icon-box product-icon-box" data-aos="fade-up"
          data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="icon"><i className="bi bi-bag-check"></i></div>
              <h4 className="title">Ecommerce Solutions</h4>
              <p className="description">Leverage the Ecommerce solutions for the businesses of all sizes, to seamlessly selling your products online</p>
            </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <Link style={{textDecoration:"none"}} to='/point-of-sale'>
            <div className="icon-box product-icon-box" data-aos="fade-up"
          data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="icon"><i className="bi bi-pc-display-horizontal"></i></div>
              <h4 className="title">Point of Sale</h4>
              <p className="description">Manage your daily sales, transactions, inventory and monitor your cash flow with our POS system</p>
            </div>
            </Link>
          </div>

        </div>

      </div>
    </section>

      <Calltoaction />
    </div>
  );
}

export default MyTabs;
