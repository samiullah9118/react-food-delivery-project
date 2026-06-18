import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import promotionImage from "../../assets/promotion/pro.png";

const Section4 = () => {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-lg-0">
              <img src={promotionImage} className="img-fluid" alt="promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                A juicy burger shared with friends turns every meal into a
                celebration, combining fresh ingredients, warm hospitality, and
                local flavors to create a tasty place where food, family, and
                memories come always together.
              </p>
              <ul>
                <li>
                  <p>
                    Crispy burgers, warm ambiance, fast delivery, and fresh
                    ingredients make every order feel delightfully satisfying.
                  </p>
                </li>
                <li>
                  <p>Good burgers unite friends every time.</p>
                </li>
                <li>
                  <p>
                    Local flavors, friendly service, online ordering, and tasty
                    sides build memorable shared meals for everyone.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* BG Parallax Scroll*/}
      <section className="bg_parallax_scroll"></section>
    </>
  );
};

export default Section4;
