import React from 'react'
import { Row, Col, Container, Image, Stack, Badge } from 'react-bootstrap'
import contentData from '../../Assets/content.json'
import r1 from '../../Assets/Projects/r1.jpg'
import './Projects.css'

function Research() {
  return (
    <>
      <Container>
        <div className="title">Others</div>
        <div className="description">{contentData[2].content}</div>
        {contentData[2].items.map((item, i) => (
          <Row className="research-item">
            <Col md={6}>
              <Image src={r1} rounded className="rimg" />
            </Col>
            <Col md={6}>
              <div className="r-title">{item.title}</div>
              <div className="r-people">{item.people}</div>
              <p className="r-description">{item.description}</p>
              <Stack direction="horizontal" gap={2}>
                <Badge bg="primary">In Progress</Badge>
              </Stack>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default Research
