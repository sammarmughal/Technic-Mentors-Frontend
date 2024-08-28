import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import softwareDevelop from "../images/software-development.avif"
export default function Softwaredevelopmentservices() {
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
                 Software Development Services
              </h1>
            </div>
          </div>
        </div>

      <section id="services-section">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="col-lg-6 col-sm-12">
              <div className="section-title text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2> Making Businesses Flourish With</h2>
                <h1>
                   Our <span>Software Development Services</span>
                </h1>
              </div>
              <p style={{ textAlign: "justify" }}>
              Software development services encompass a series of essential steps involving the developing business solutions. These steps include identifying needs, analyzing requirements, designing, developing, testing, and deploying. </p>
              <p style={{ textAlign: "justify" }}>At Technic Mentors, we specialize in gathering and analyzing our clients’ unique requirements, aiming to deliver tailored software solutions that align with their specific needs. We design our full-cycle software services strategically to drive your business growth, maximize your ROI, and to outperform the competition.</p>
              <p style={{ textAlign: "justify" }}>Whether you require custom software engineering, comprehensive software testing and quality assurance, seamless system integration, expert technology consulting, or reliable software support — our top-notch software development services have got you covered.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                src={softwareDevelop}
                className="img-fluid"
                max-width="100%"
                height="auto"
                alt="it-services"
              />
            </div>
          </div>
        </div>
      </section>


      <div className='container mt-5 mb-5 how-we-do'>
      <div className="row d-flex text-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div className='section-title'>
          <h3 className='text-center'> <span style={{color:"black"}}>How We Do It? </span></h3>
        </div>
  <div className="col-md-6 mt-1">
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-center' >
      <div className="services-list" style={{listStyle: "none", textAlign: "left",color:"#684df4"}}> <h4> Java, PHP, SQL & others </h4></div>
      <p style={{textAlign:"justify"}}>Our seasoned team of developers is proficient in an array of languages including Java, PHP, SQL, and more, crafting versatile and tailored software solutions to match your unique needs.</p>

      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#684df4"}}> <h4> Create complex databases for organizations </h4></li>
      <p style={{textAlign:"justify"}}> We specialize in designing and implementing intricate, scalable databases that empower organizations to efficiently store, manage, and retrieve critical data, supporting data-driven decision-making.</p>

      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#684df4"}}> <h4> C# and .Net programming </h4></li>
      <p style={{textAlign:"justify"}}> Leveraging the robust capabilities of C# and .Net, we engineer high-performance applications that align seamlessly with your business objectives, ensuring reliability and scalability.</p>
    </div>
  </div>
  <div className="col-md-6 mt-1">
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-center' >
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#684df4"}}> <h4> Software Quality Assurance </h4></li>
      <p style={{textAlign:"justify"}}>  We uphold the highest quality standards through rigorous testing and quality assurance, ensuring that your software not only meets but exceeds user expectations, delivering a seamless user experience.</p>

      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#684df4"}}> <h4> Comfortable Writing and analyzing SQL queries </h4></li>
      <p style={{textAlign:"justify"}}>Our team excels at crafting and dissecting SQL queries, ensuring optimal data manipulation and retrieval, enabling your applications to perform at their peak efficiency.</p>

      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#684df4"}}> <h4> Build business logic of software </h4></li>
      <p style={{textAlign:"justify"}}> We create the intelligent, intricate business logic that forms the backbone of your software, allowing it to make informed decisions, streamline processes, and drive your organization's success.</p>
    </div>
  </div>
</div>
</div>

<section style={{backgroundColor: "#f1f3fe"}}>
<div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="col-lg-12">
              <div className="section-title text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h3>
                  The Urge To <span>Meet Clients Needs</span> 
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
              Our team of skilled software engineers possesses extensive expertise in crafting robust software applications. With a wealth of experience in various verticals and business domains, including e-Commerce, <a href="https://capobrain.com/" target="blank" rel="noopener" style={{textDecoration:"none"}}> e-Learning</a>, Production management, Finance, and Enterprise-level applications, we offer comprehensive software development services tailored to meet your specific needs. The seasoned professionals at Technic Mentors excel in delivering cutting-edge solutions. We aim to develop solutions that empower your business to thrive in today’s competitive landscape. </p>
              <p style={{ textAlign: "justify" }}>We stand out as the leading software house in Pakistan, renowned for delivering unparalleled software development services. Whether you require web applications, desktop software, or customized software solutions, we are dedicated to providing top-quality solutions.</p>
              <p style={{ textAlign: "justify" }}>Our utmost priority is our clients, and we uphold this commitment by consistently delivering exceptional software solutions and comprehensive IT services. We have a vision that extends beyond Pakistan. We strive to establish ourselves as an international leader in the software industry, reaching new heights and setting new standards of excellence.
              </p>
            </div>
          </div>
        </div>



</section>



    </div>
  )
}
