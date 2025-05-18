import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5 border-top" dir="rtl">
      <Container>
        <Row>
          <Col md="6" className="text-end">
            <p className="mb-1 fw-bold">وب‌سایت خبری من</p>
            <p className="mb-0">تمام حقوق محفوظ است © {new Date().getFullYear()}</p>
          </Col>
          <Col md="6" className="text-start">
            <a href="/about"   className="text-decoration-none text-dark mx-2">درباره ما</a>
            <a href="/contact" className="text-decoration-none text-dark mx-2">تماس با ما</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
