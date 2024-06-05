import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navLogo from "../img/technicblue.png"
import userImg from "../images/user-img.png"

export default function UserNavbar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const user = JSON.parse(sessionStorage.getItem("User") || "{}");
    console.log(user)
    useEffect(() => {
        const handleNav = (e) => {
            if (window.innerWidth <= 768 && !isNavbarCollapsed) {
                const navbar = document.getElementById('navbarSupportedContent')
                if (navbar && !navbar.contains(e.target)) {
                    setIsNavbarCollapsed(true)
                }
            }
        }
        document.body.addEventListener('click', handleNav)
        return () => {
            document.body.removeEventListener('click', handleNav)
        }
    }, [isNavbarCollapsed])

    const handleNavbarToggle = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    const closeNavbarOnItemClick = () => {
        if (window.innerWidth <= 768) {
            setIsNavbarCollapsed(true);
        }
    };

    const location = useLocation();

    if (location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board" || location.pathname === "/admin/demoUsers" || location.pathname === "/admin/tickets") {
        return null;
    }

    return (
        <div>
            {/* Navbar Start */}
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                id="navbarSupportedContent"
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={navLogo}
                            style={{ maxWidth: "14rem", marginLeft: "5%" }}
                            alt="school management software"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleNavbarToggle}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={!isNavbarCollapsed}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"
                            }`}
                        id="navbarSupportedContent"
                    >
                        <ul
                            className="navbar-nav ms-auto"
                            style={{ maxWidth: "120%", marginRight: "3%" }}
                        >
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-dark`}
                                    aria-current="page"
                                    to="/"
                                    style={{ fontSize: "1.1rem" }}
                                    onClick={closeNavbarOnItemClick}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <Link
                                        to="/#"
                                        className="nav-link dropdown-toggle text-dark"
                                        style={{ fontSize: "17px" }}
                                        data-bs-toggle="dropdown"
                                    >
                                        About
                                    </Link>
                                    <div className="dropdown-menu rounded services-dropdown">
                                        <Link
                                            to="/about"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Who We Are
                                        </Link>
                                        <Link
                                            to="/team"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Our Team
                                        </Link>
                                        <Link
                                            to="/our-portfolio"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Our Portfolio
                                        </Link>
                                        <Link
                                            to="/faq-page"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            FAQ's
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <Link
                                        to="/#"
                                        className="nav-link dropdown-toggle text-dark"
                                        style={{ fontSize: "17px" }}
                                        data-bs-toggle="dropdown"
                                    >
                                        Services
                                    </Link>
                                    <div className="dropdown-menu rounded services-dropdown mr-3 ml-4">
                                        <Link
                                            to="/web-development-services"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Web Design & Development
                                        </Link>
                                        <Link
                                            to="/software-development-services"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Software Development
                                        </Link>
                                        <Link
                                            to="mobile-app-development-services"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Mobile App Development
                                        </Link>
                                        <Link
                                            to="/seo-services"
                                            className="dropdown-item text-dark sub-item service-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            SEO Services
                                        </Link>
                                        <Link
                                            to="/digital-marketing-services"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Digital Marketing
                                        </Link>
                                        <Link
                                            to="/graphics-designing-services"
                                            className="dropdown-item text-dark sub-item"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Graphics Designing
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className="dropdown">
                                    <Link
                                        to="/#"
                                        className="nav-link dropdown-toggle text-dark"
                                        style={{ fontSize: "17px" }}
                                        data-bs-toggle="dropdown"
                                    >
                                        Products
                                    </Link>
                                    <div className="dropdown-menu rounded mr-2">
                                        <Link
                                            to="/education-management-system"
                                            className="dropdown-item text-dark"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Education Management System
                                        </Link>
                                        <Link
                                            to="/erp-solutions"
                                            className="dropdown-item text-dark"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Enterprise Resource Planning
                                        </Link>
                                        <Link
                                            to="ecommerce-solutions"
                                            className="dropdown-item text-dark"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Ecommerce Solutions
                                        </Link>
                                        <Link
                                            to="/point-of-sale"
                                            className="dropdown-item text-dark"
                                            onClick={closeNavbarOnItemClick}
                                        >
                                            Point Of Sale
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-dark"
                                    aria-current="page"
                                    to="/industries"
                                    style={{ fontSize: "1.1rem" }}
                                    onClick={closeNavbarOnItemClick}
                                >
                                    Industries
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <img src={userImg} className="img-fluid" alt="user-img" style={{ height: "38px" }} data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample" />
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-dark`}
                                    aria-current="page"
                                    to="/contact"
                                    style={{ fontSize: "1.1rem" }}
                                    onClick={closeNavbarOnItemClick}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row d-flex justify-content-end">
                    <div className="col-md-2">
                        <div className="collapse profile-set" id="collapseExample">
                            <div className="card card-body">
                                <h6 className="text-center">{user.name}</h6>
                                <div className="d-flex justify-content-center">
                                    <h3 className="text-center">{user.name && user.name.charAt(0)}</h3>
                                </div>
                                <p className="text-center">{user.email}</p>
                                <p className="text-center">{user.phoneno}</p>
                                <Link to="/userLogin" className="text-center">Log Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
