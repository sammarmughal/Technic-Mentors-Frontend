import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navLogo from "../img/technicblue.png";

export default function Navbar() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  useEffect(() => {
    const handleNav = (e) => {
      if (window.innerWidth <= 768 && !isNavbarCollapsed) {
        const navbar = document.getElementById("navbarSupportedContent");
        if (navbar && !navbar.contains(e.target)) {
          setIsNavbarCollapsed(true);
        }
      }
    };
    document.body.addEventListener("click", handleNav);
    return () => {
      document.body.removeEventListener("click", handleNav);
    };
  }, [isNavbarCollapsed]);

  const isLinkActive = (linkPath) => {
    return linkPath === location.pathname ||
      (linkPath === "/manual" && location.pathname.startsWith("/manual"))
      ? "active"
      : "";
  };

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const closeNavbarOnItemClick = () => {
    if (window.innerWidth <= 768) {
      setIsNavbarCollapsed(true);
    }
  };

  const location = useLocation();

  if (
    location.pathname === "/adminPanel/addblog" ||
    location.pathname === "/adminPanel/allposts" ||
    location.pathname === "/adminPanel/allcategory" ||
    location.pathname === "/adminPanel/addcategory" ||
    location.pathname === "/adminPanel/alltickets" ||
    location.pathname === "/user-profile/ticket-generate" ||
    location.pathname === "/user-profile/generated-tickets" ||
    location.pathname === "/user-profile/close-status-tickets" ||
    location.pathname === "/user-profile/open-status-tickets" ||
    location.pathname === "/adminPanel/board"
  ) {
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
              onClick={closeNavbarOnItemClick}
              style={{ maxWidth: "14rem", marginLeft: "5%" }}
              alt="it-services-company"
            />
            <span className="d-none">Technic Mentors Software Solutions</span>
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
            <jjjj
              className="navbar-nav ms-auto"
              style={{ maxWidth: "120%", marginRight: "3%" }}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${isLinkActive("/")}`}
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

                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <Link
                    to="/services"
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
                    to="/products"
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

              <li className="dropdown nav-item">
                <div className="dropdown-toggle nav-link text-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "1.1rem" }}>
                  Help Center
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" to="/help" onClick={closeNavbarOnItemClick}>Knowledgebase</Link></li>
                  <li><Link className="dropdown-item" to="/blog" onClick={closeNavbarOnItemClick}>Blog</Link></li>
                  <li className="nav-item">
                    <Link
                      className="dropdown-item"
                      to="/faq-page"
                      onClick={closeNavbarOnItemClick}
                    >
                      FAQ's
                    </Link>

                  </li>
                  <li><Link className="dropdown-item" to="/userLogin" onClick={closeNavbarOnItemClick}> Generate Ticket</Link></li>
                  <li className="nav-item">
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/contact"
                      style={{ fontSize: "1.1rem" }}
                      onClick={closeNavbarOnItemClick}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </jjjj>
          </div>
        </div>
      </nav>
    </div>
  );
}
