import React from 'react'
import CallAction from './CallAction'

export default function DetailFAQ() {
  return (
    <div>
      <div
        className="allHeaderBg"
      >
        <div className="allHeader-overlay d-flex align-items-center justify-content-center">
          <div>
            <h1
              className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
            >
              FAQ's
            </h1>
          </div>
        </div>
      </div>

      <section id="faq" className="faq section-bg py-4">
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
                <li>
                  <div
                    data-bs-toggle="collapse"
                    className="collapsed question text-start"
                    href="#faq7"
                  >
                    What services does Technic Mentors offer?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq7"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Technic Mentors provides a wide range of IT services including web design and development, software development, mobile app development, graphics designing, search engine optimization (SEO), and digital marketing.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq8"
                    className="collapsed question text-start"
                  >
                    How can I request a quote for services?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq8"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      You can request a quote by contacting us through our website, phone, or email. Our team will promptly respond to your inquiry and provide you with a detailed quote tailored to your specific needs.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq9"
                    className="collapsed question text-start"
                  >
                    Does Technic Mentors offer custom software development?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq9"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, we specialize in custom software development tailored to meet the unique requirements of your business. Our experienced team will work closely with you to understand your needs and develop innovative solutions.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq10"
                    className="collapsed question text-start"
                  >
                    Can Technic Mentors help with improving my website's search engine ranking? <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq10"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Absolutely! Our team of SEO experts can optimize your website to improve its visibility on search engines like Google, Bing, and Yahoo. We employ proven strategies to enhance your website's ranking and drive organic traffic.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq11"
                    className="collapsed question text-start"
                  >
                    Do you provide ongoing support for websites and applications?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq11"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, we offer comprehensive support and maintenance services to ensure that your website or application continues to function smoothly post-launch. Our team is available to address any issues and implement updates as needed.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq12"
                    className="collapsed question text-start"
                  >
                    How long does it take to develop a mobile app with Technic Mentors?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq12"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The timeline for mobile app development varies depending on the complexity of the project and specific requirements. Our team will provide you with a detailed timeline during the initial consultation phase.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq13"
                    className="collapsed question text-start"
                  >
                    What industries does Technic Mentors cater to?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq13"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      We cater to a diverse range of industries including but not limited to e-commerce, healthcare, finance, education, hospitality, and retail. Our solutions are customizable to suit the unique needs of any industry.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq14"
                    className="collapsed question text-start"
                  >
                    Is Technic Mentors experienced in handling large-scale projects?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq14"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, we have extensive experience in handling large-scale projects for enterprise clients. Our team is equipped with the expertise and resources to successfully execute projects of any size and complexity.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq15"
                    className="collapsed question text-start"
                  >
                    Can Technic Mentors assist with branding and graphic design?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq15"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Absolutely! We offer comprehensive graphic design services to help you establish a strong brand identity. From logo design to marketing collateral, our creative team will ensure that your brand stands out.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq16"
                    className="collapsed question text-start"
                  >
                    Does Technic Mentors provide training or workshops for clients?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq16"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, we offer training and workshops tailored to your specific needs. Whether you need to learn how to manage your website or utilize digital marketing tools effectively, our experts are here to help.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq17"
                    className="collapsed question text-start"
                  >
                    What is CapoBrain and how can it benefit schools and colleges?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq17"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBrain is a comprehensive school/college management system designed to streamline administrative tasks, enhance communication between stakeholders, and improve overall efficiency. It offers features such as student enrollment, attendance tracking, exam management, fee collection, and parent-teacher communication.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq18"
                    className="collapsed question text-start"
                  >
                    How can I learn more about CapoBrain and its features?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq18"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    You can visit the website capobrain.com for detailed information about CapoBrain's features, benefits, and pricing. Additionally, you can contact our team for a personalized demo and consultation.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq19"
                    className="collapsed question text-start"
                  >
                    What is CapoBiz and how does it assist businesses in managing their operations?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq19"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz is a robust software solution designed to help businesses manage stock/inventory, sales, purchases, production, manufacturing, and more. It offers tools for inventory tracking, sales reporting, order management, and production planning, among other features.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq20"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for businesses in specific industries?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq20"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz is designed to cater to a wide range of industries including retail shops, supermarkets, pharmacies, mobile shops, garment stores, shoe shops, fertilizers industry, tiles industry, and more. Its customizable features make it adaptable to the unique needs of various businesses.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq21"
                    className="collapsed question text-start"
                  >
                    What are the key features of CapoBiz for restaurant management?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq21"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz offers restaurant management software designed to streamline operations, manage inventory, track sales, handle reservations, and improve customer service. It includes features such as menu management, table booking, kitchen order management, and billing.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq22"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz offer solutions for real estate management?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq22"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, CapoBiz provides a comprehensive real estate management software solution to streamline property management tasks such as listings management, tenant tracking, lease management, maintenance scheduling, and financial reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq23"
                    className="collapsed question text-start"
                  >
                    How can CapoBiz benefit gyms and fitness centers?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq23"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz gym management software helps fitness centers streamline membership management, class scheduling, trainer scheduling, billing, and attendance tracking. It enables gym owners to efficiently run their operations and enhance member satisfaction.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq24"
                    className="collapsed question text-start"
                  >
                    Can CapoBiz be customized for tailor shops?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq24"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Absolutely! CapoBiz offers tailor shop management software tailored to the unique needs of tailoring businesses. It includes features for measuring, order management, fabric tracking, invoicing, and customer management..
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq25"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz cater to trading businesses?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq25"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, CapoBiz offers trading software solutions to manage trading operations efficiently. It includes features for order processing, inventory management, sales analysis, purchase management, and reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq26"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for office management tasks?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq26"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz provides office management software solutions to streamline administrative tasks, enhance productivity, and improve communication within the office environment. It offers features for task management, document sharing, employee scheduling, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CallAction/>
    </div>
  )
}