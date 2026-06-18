import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap/";
import "../../styles/Headerstyle.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const updateActiveSection = () => {
    const hash = window.location.hash.toLowerCase();
    const pathname = window.location.pathname.toLowerCase();

    if (hash === "#about") {
      setActiveSection("about");
    } else if (hash === "#menu") {
      setActiveSection("menu");
    } else if (hash === "#shop") {
      setActiveSection("shop");
    } else if (hash === "#blog") {
      setActiveSection("blog");
    } else if (hash === "#contact") {
      setActiveSection("contact");
    } else if (pathname.endsWith("/about")) {
      setActiveSection("about");
    } else if (pathname.endsWith("/menu")) {
      setActiveSection("menu");
    } else if (pathname.endsWith("/shop")) {
      setActiveSection("shop");
    } else if (pathname.endsWith("/blog")) {
      setActiveSection("blog");
    } else if (pathname.endsWith("/contact")) {
      setActiveSection("contact");
    } else {
      setActiveSection("home");
    }
  };

  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = window.scrollY || document.documentElement.scrollTop;
      setNav(scrollValue > 100);
    };

    updateActiveSection();
    window.addEventListener("scroll", changeValueOnScroll);
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("popstate", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("popstate", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand as="a" href="#home" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as="a" href="#home" className={activeSection === "home" ? "active" : ""}>
                Home
              </Nav.Link>
              <Nav.Link as="a" href="#about" className={activeSection === "about" ? "active" : ""}>
                About
              </Nav.Link>
              <Nav.Link as="a" href="#menu" className={activeSection === "menu" ? "active" : ""}>
                Our Menu
              </Nav.Link>
              <Nav.Link as="a" href="#shop" className={activeSection === "shop" ? "active" : ""}>
                Shop
              </Nav.Link>
              <Nav.Link as="a" href="#blog" className={activeSection === "blog" ? "active" : ""}>
                Blog
              </Nav.Link>
              <Nav.Link as="a" href="#contact" className={activeSection === "contact" ? "active" : ""}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag-heart fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
