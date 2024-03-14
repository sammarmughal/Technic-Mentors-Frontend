import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function SEOservices() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        {/* open grapgh tag */}
      <meta property="og:title" content="SEO Services" />
        <meta property="og:description" content="SEO services involve optimizing your website to improve its ranking on search engine result pages when users search for products or services related to your.." />
        <meta property="og:image" content="https://technicmentors.com/assets/img/seo-services.gif" />
        <meta property="og:url" content="https://technicmentors.com/seo-services" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechnicMentors" />
        <meta name="twitter:title" content="SEO Services" />
        <meta name="twitter:description" content="SEO services involve optimizing your website to improve its ranking on search engine result pages when users search for products or services related to your.." />
        <meta name="twitter:image" content="https://technicmentors.com/assets/img/seo-services.gif" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com/seo-services" ,
            "name": "Technic Mentors",
            "description": "SEO services involve optimizing your website to improve its ranking on search engine result pages when users search for products or services related to your.." ,
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

        <link rel="canonical" href="https://technicmentors.com/seo-services" />
        <meta name="description" content="SEO services involve optimizing your website to improve its ranking on search engine result pages when users search for products or services related to your.." />
      </Helmet>
    <div
          className="background-image1"
          style={{ backgroundImage: `url(${"assets/img/bg-header.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
              >
                 SEO Services
              </h1>
            </div>
          </div>
        </div>

      <section id="services-section">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="col-lg-6 col-sm-12">
              <div className="section-title text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2> The Visible, The Successful </h2>
                <h3>
                   Explore Our <span>Search Enginne Optimization Services</span>
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
              SEO services involve optimizing your website to improve its ranking on search engine result pages when users search for products or services related to your business on Google, Bing, or other search engines. The higher your business appears in the search results, the greater the potential for growth and success. We provide top-quality SEO services that can help increase your website’s ranking on Google search results.</p>
              <p style={{ textAlign: "justify" }}>In today’s competitive market, SEO marketing is more important than ever. It’s not just about being the first result in search rankings anymore. Businesses now need effective <a href="https://urdustem.com/en/how-to-create-a-powerful-seo-strategy-for-your-business/" target='blank' style={{textDecoration:"none"}}> SEO strategies </a> to connect with their target audience and convert them into customers.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                src="assets\img\seo-services.gif"
                className="img-fluid"
                max-width="100%"
                height="auto"
                alt="it-services"
              />
            </div>
          </div>
        </div>
      </section>


      <div className='container mt-3 mb-3 how-we-do'>
      <div className="row d-flex text-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div className='section-title'>
          <h1 className='text-center'> <span style={{color:"black"}}>How We Do It? </span></h1>
        </div>
  <div className="col-md-6 mt-1">
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-center' >
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Analyze Your Existing Website</h4></li>
      <p style={{textAlign:"justify"}}>We dive deep into your website's structure and performance, pinpointing areas for improvement to ensure it's search engine optimized and user-friendly.</p>
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Understand Your Competitor</h4></li>
      <p style={{textAlign:"justify"}}>By studying your competitors, we gain insights into their strategies, strengths, and weaknesses, helping us develop a winning SEO plan that sets you apart.</p>
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Identifying Search Trends And Keyword Mix</h4></li>
      <p style={{textAlign:"justify"}}>Our experts stay ahead of the game, identifying current search trends and optimizing content with the ideal mix of keywords to drive organic traffic.</p>
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Build A Strategy</h4></li>
      <p style={{textAlign:"justify"}}>We develop a customized SEO strategy, tailored to your unique goals and industry, to enhance your online presence and drive sustainable growth.</p>
    </div>
  </div>
  <div className="col-md-6 mt-1">
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-center' >
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Analysis</h4></li>
      <p style={{textAlign:"justify"}}>We continuously monitor and analyze your SEO performance, making data-driven adjustments to ensure your website maintains a strong search engine ranking.</p>
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Social Media Utilization</h4></li>
      <p style={{textAlign:"justify"}}>Leveraging the power of social media, we integrate your SEO efforts with a social strategy, enhancing your online visibility and reach to a broader audience.</p>
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Link Building</h4></li>
      <p style={{textAlign:"justify"}}>Our link-building strategies improve your website's authority and credibility by securing high-quality backlinks from reputable sources.</p>
      <li className="services-list" style={{listStyle: "none", textAlign: "left",color:"#106eea"}}> <h4> Content Restructuring</h4></li>
      <p style={{textAlign:"justify"}}>We revamp and optimize your website's content, ensuring it's not only engaging but also search engine friendly, improving your site's overall SEO performance.</p>
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
                  How Our <span>SEO Services</span> Work? 
                </h3>
              </div>
              <p style={{ textAlign: "justify" }}>
              Technic Mentors provides the professional SEO marketing services in Gujranwala, Pakistan. The content writing team of Technic Mentors helps you identify your business needs and establish “decision-critical keywords” to help dramatically improve your chances of turning searches into website traffic and ultimately more opportunities. Because we believe keyword research, if done properly will play a pivotal role in improving your website’s ranking. We share the keyword ideas with our clients that have potential to gain ranking. </p>

              <p style={{ textAlign: "justify" }}>We stand among the top SEO agencies in the world that will give your website and web content a thorough review to enhance keyword presentability, structure, prominence, and effectiveness. </p>

              <p style={{ textAlign: "justify" }}>Our comprehensive SEO services encompass a range of strategies and techniques tailored to meet your specific business goals. From conducting thorough keyword research and optimizing on-page elements to developing high-quality content and implementing effective link building strategies, we have the expertise to enhance your website’s visibility and attract organic traffic.</p>
            </div>
          </div>
        </div>



</section>


</div>
  )
}
