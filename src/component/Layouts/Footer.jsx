import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  // Scroll Stat
  const [isVisiable, setIsVisiable] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisiable(true) : setIsVisiable(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>23430 Swabi Distic</p>
                <p>Shewadda Distic Swabi</p>
                <p>Pakistan</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Shew Adda Distic Swabi</p>
                <p>
                  <a href="tel:9998887777" className="calling">
                    999-888-7777
                  </a>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Shew Adda Distic Swabi</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-tiktok"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-">
                  <li>
                    <a href="/">
                      © 2026<span>BURGERPOINT</span>. All Rights Reserved
                    </a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* Scroll-top  */}
      {isVisiable && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default Footer;
