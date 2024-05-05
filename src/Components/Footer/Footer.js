import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Designed and Developed by JIALIANG YAN</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year} JIALIANG YAN. All rights reserved.</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
