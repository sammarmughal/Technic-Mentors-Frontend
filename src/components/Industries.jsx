import React, { useState } from 'react'
import healthTech from "../images/healthTech.webp"
import edTech from "../images/edtech.webp"
import finTech from "../images/fintech.webp"
import greenTech from "../images/greentech.webp"
import retail from "../images/retail.webp"
import eCommerce from "../images/E-Commerce.webp"

export default function Industries() {
    const [activeTab, setActiveTab] = useState("health-tech");

    const handleTabChange = (tabId, e) => {
        e.preventDefault();
        setActiveTab(tabId);
    };
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
                            Industries We Support
                        </h1>
                    </div>
                </div>
            </div>

            {/* industries */}
            <section
                className="pills-tab-section px-2 py-4 "
                style={{ backgroundColor: "#FAFAFA" }}
            >
                <div className="container-fluid pt-3 pb-2">
                    <div className=" text-center section-title">
                        <h2 className="subtitle">Our Industry Expertise</h2>
                        <h3 className="main-heading">
                            Comprehensive Solutions Across <span> Diverse Sectors</span>
                        </h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 mb-4">
                            <p>In today's fast-paced and technologically-driven world, businesses across various industries need specialized software solutions to stay competitive and efficient. At [Your Company Name], we pride ourselves on delivering cutting-edge, customized software services that cater to the unique needs of a wide array of sectors. Whether it's enhancing patient care in HealthTech, revolutionizing education in EdTech, driving financial innovation in FinTech, promoting sustainability in GreenTech, optimizing operations in Retail, or boosting sales in Ecommerce, our expertise ensures your business has the tools it needs to succeed. Explore how we can transform your industry with our tailored software solutions.</p>
                        </div>
                        <div
                            className="col-md-3 jutify-content-center align-items-center"
                        >
                            <div className="row">
                                <ul
                                    className="nav nav-tabs industries nav-justified"
                                    id="ex1"
                                    role="tablist"
                                >
                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab  mb-2 ${activeTab === "health-tech" ? "active" : ""
                                                    }`}
                                                id="health-tech-tab"
                                                data-mdb-toggle="pill"
                                                href="#health-tech"
                                                role="tab"
                                                onClick={(e) => handleTabChange("health-tech", e)}
                                                aria-controls="health-tech"
                                                aria-selected={activeTab === "health-tech"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "health-tech"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "health-tech"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "health-tech"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                HealthTech
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab mb-2 ${activeTab === "ed-tech" ? "active" : ""
                                                    }`}
                                                id="ed-tech-tab"
                                                data-mdb-toggle="pill"
                                                href="#ed-tech"
                                                role="tab"
                                                onClick={(e) => handleTabChange("ed-tech", e)}
                                                aria-controls="ed-tech"
                                                aria-selected={activeTab === "ed-tech"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "ed-tech"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "ed-tech"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "ed-tech"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                EdTech
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab mb-2 ${activeTab === "fin-tech" ? "active" : ""
                                                    }`}
                                                id="fin-tech-tab"
                                                data-mdb-toggle="pill"
                                                href="#fin-tech"
                                                role="tab"
                                                onClick={(e) => handleTabChange("fin-tech", e)}
                                                aria-controls="corporate-matters"
                                                aria-selected={activeTab === "fin-tech"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "fin-tech"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "fin-tech"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "fin-tech"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                FinTech
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab mb-2 ${activeTab === "green-tech" ? "active" : ""
                                                    }`}
                                                id="green-tech-tab"
                                                data-mdb-toggle="pill"
                                                href="#green-tech"
                                                role="tab"
                                                onClick={(e) => handleTabChange("green-tech", e)}
                                                aria-controls="green-tech"
                                                aria-selected={activeTab === "green-tech"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "pahrmacy"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "green-tech"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "green-tech"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                GreenTech
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab mb-2 ${activeTab === "retail" ? "active" : ""
                                                    }`}
                                                id="retail-tab"
                                                data-mdb-toggle="pill"
                                                href="#retail"
                                                role="tab"
                                                onClick={(e) => handleTabChange("retail", e)}
                                                aria-controls="retail"
                                                aria-selected={activeTab === "retail"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "retail"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "retail"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "retail"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                Retail
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab mb-2 ${activeTab === "e-commerce" ? "active" : ""
                                                    }`}
                                                id="e-commerce-tab"
                                                data-mdb-toggle="pill"
                                                href="#e-commerce"
                                                role="tab"
                                                onClick={(e) => handleTabChange("e-commerce", e)}
                                                aria-controls="e-commerce"
                                                aria-selected={activeTab === "e-commerce"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "e-commerce"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "e-commerce"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "e-commerce"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                E-Commerce
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-9 tab-detail">
                            {/* Tab content */}
                            <div className="tab-content" id="v-pills-tabContent">
                                <div
                                    className={`tab-pane fade show ${activeTab === "health-tech" ? "active" : ""
                                        }`}
                                    id="health-tech"
                                    role="tabpanel"
                                    aria-labelledby="health-tech-tab"
                                >
                                    <div className="container">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-6">
                                                <p>In the rapidly evolving HealthTech sector, our software solutions streamline patient care, improve data management, and enhance healthcare delivery. We specialize in developing innovative tools that help medical professionals provide better, faster, and more efficient services. By integrating advanced technologies like AI and machine learning, we enable healthcare providers to make informed decisions and improve patient outcomes.</p>
                                                <p>Our HealthTech services include telemedicine platforms, electronic health records (EHR) systems, and patient management software. We also develop mobile health apps and remote monitoring solutions to support patient engagement and chronic disease management. By offering comprehensive and customized solutions, we empower healthcare organizations to focus on what matters most: patient well-being and care quality.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={healthTech} alt="healthTech" className='img-fluid' style={{ borderRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "ed-tech" ? "active" : ""
                                        }`}
                                    id="ed-tech"
                                    role="tabpanel"
                                    aria-labelledby="ed-tech-tab"
                                >
                                    <div className="container">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-lg-6">
                                                <p>Education technology is transforming the way we learn and teach, making education more accessible and engaging. Our EdTech solutions are designed to support educators and students by providing intuitive, interactive, and effective digital learning tools. From virtual classrooms to AI-driven personalized learning experiences, our software helps bridge the gap between traditional and modern education methods.</p>
                                                <p>We offer a range of services from developing e-learning platforms to creating customized educational apps and content management systems. Our goal is to enhance the educational experience by making learning more interactive, personalized, and impactful. By leveraging cutting-edge technologies, we ensure that educational institutions can provide high-quality education regardless of geographical or logistical challenges.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={edTech} alt="edTech" className='img-fluid' style={{ borderRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "fin-tech" ? "active" : ""
                                        }`}
                                    id="fin-tech"
                                    role="tabpanel"
                                    aria-labelledby="fin-tech-tab"
                                >
                                    <div className="container">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-lg-6">
                                                <p>FinTech

                                                    The FinTech industry is at the forefront of financial innovation, offering unparalleled convenience, efficiency, and security. Our software solutions help financial institutions and startups streamline their operations, improve customer experiences, and deliver superior financial services. We specialize in developing robust, scalable, and secure financial applications that cater to the evolving needs of the digital economy.</p>
                                                <p>From mobile banking apps and digital wallets to blockchain-based solutions and automated trading platforms, we cover all aspects of FinTech. Our expertise ensures that your financial products are not only secure and compliant with regulatory standards but also user-friendly and innovative. By leveraging the latest technologies, we help you stay ahead in a competitive market and meet the growing demands of tech-savvy consumers.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={finTech} alt="edTech" className='img-fluid' style={{ borderRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "green-tech" ? "active" : ""
                                        }`}
                                    id="green-tech"
                                    role="tabpanel"
                                    aria-labelledby="green-tech"
                                >
                                    <div className="container">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-lg-6">
                                                <p>Sustainability is crucial in today’s world, and our GreenTech solutions are designed to support environmentally-friendly practices. We develop software that helps businesses reduce their carbon footprint, optimize resource use, and operate more sustainably. Our solutions enable organizations to track and manage their environmental impact, contributing to global efforts to combat climate change.</p>
                                                <p>Our services include energy management systems, environmental monitoring tools, and sustainability reporting software. We also offer solutions for smart grids, renewable energy management, and waste reduction. By leveraging technology, we enable companies to achieve their sustainability goals while maintaining operational efficiency and profitability.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={greenTech} alt="greenTech" className='img-fluid' style={{ borderRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "retail" ? "active" : ""
                                        }`}
                                    id="retail"
                                    role="tabpanel"
                                    aria-labelledby="retail"
                                >
                                    <div className="container">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-lg-6">
                                                <p>The retail industry is constantly evolving, and our software solutions help businesses adapt to these changes effectively. We provide tools that enhance the customer experience, improve inventory management, and streamline operations. Our retail solutions are designed to help businesses meet the demands of modern consumers, who expect seamless, personalized shopping experiences both online and in-store.</p>
                                                <p>Whether it's through advanced point-of-sale systems, customer relationship management (CRM) software, or e-commerce integration, our solutions drive growth and efficiency in the retail sector. We also offer data analytics tools that provide valuable insights into consumer behavior, helping retailers make informed decisions and optimize their strategies. Our goal is to help you stay competitive and thrive in a dynamic market.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={retail} alt="retail" className='img-fluid' style={{ borderRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "e-commerce" ? "active" : ""
                                        }`}
                                    id="e-commerce"
                                    role="tabpanel"
                                    aria-labelledby="e-commerce"
                                >
                                    <div className="container">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-lg-6">
                                                <p>Ecommerce

                                                    In the dynamic world of ecommerce, having robust and scalable software solutions is key to success. Our services are tailored to meet the unique needs of online retailers, ensuring seamless shopping experiences for customers. We specialize in developing comprehensive ecommerce platforms that integrate smoothly with various payment gateways, logistics providers, and third-party services.</p>
                                                <p>We offer a wide range of ecommerce solutions including platform development, payment gateway integration, mobile commerce apps, and customized plugins. Our goal is to help your business thrive in the competitive digital marketplace by providing a seamless, secure, and engaging shopping experience. By leveraging the latest technologies, we ensure your ecommerce operations are efficient, scalable, and adaptable to changing market trends.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={eCommerce} alt="e-commerce" className='img-fluid' style={{ borderRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "mobile-shop-pos" ? "active" : ""
                                        }`}
                                    id="mobile-shop-pos"
                                    role="tabpanel"
                                    aria-labelledby="mobile-shop-pos"
                                >
                                    <div className="container">
                                        <div className="row d-flex justify-contetn-between align-items-center">

                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "accounting-software" ? "active" : ""
                                        }`}
                                    id="accounting-software"
                                    role="tabpanel"
                                    aria-labelledby="accounting-software"
                                >
                                    <div className="contaier">
                                        <div className="row d-flex justify-content-between align-items-center">

                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "manufacturing-pos" ? "active" : ""
                                        }`}
                                    id="manufacturing-pos"
                                    role="tabpanel"
                                    aria-labelledby="manufacturing-pos"
                                >
                                    <div className="container">
                                        <div className="row d-flex justify-content-between align-items-center">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Tab content */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
