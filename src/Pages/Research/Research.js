import React from 'react'
import { Row, Col, Container, Image, Stack, Badge } from 'react-bootstrap'
import contentData from '../../Assets/content.json'
import r1 from '../../Assets/Projects/r1.jpg'
import r2 from '../../Assets/Projects/r2.jpg'
import r3 from '../../Assets/Projects/r3.jpg'
import r4 from '../../Assets/Projects/r4.jpg'
import './Research.css'

function Research() {
  const rlist = [r1, r2, r3, r4]

  return (
    <>
      <Container className="research">
        <div className="title">Research 📝</div>
        <div className="description">{contentData[2].content}</div>
        {contentData[2].items.map((item, i) => (
          <Row className="research-item" key={i}>
            <Col md={5}>
              <Image src={rlist[i]} rounded className="rimg" />
            </Col>
            <Col md={7}>
              <div className="r-link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={item.link.pdf}
                  className={item.link.pdf == null ? 'none' : ''}
                >
                  [pdf]
                </a>
              </div>
              <div className="r-title">{item.title}</div>
              <div className="r-description">{item.description}</div>
              <Stack direction="horizontal" gap={2}>
                {item.keywords.map((keyword, index) => (
                  <Badge bg="primary" key={index}>
                    {keyword}
                  </Badge>
                ))}
              </Stack>
              <div className="r-ao">
                Advisor:{' '}
                <a target="_blank" rel="noreferrer" href={item.aolink}>
                  {item.ao}
                </a>
              </div>
              <div className="r-time">{item.time}</div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default Research
