import React from 'react'
import { Row, Col, Container, Image, Stack, Badge } from 'react-bootstrap'
import contentData from '../../Assets/content.json'
import './Research.css'
import r1 from '../../Assets/Projects/r1.jpg'
import r2 from '../../Assets/Projects/r2.jpg'
import r3 from '../../Assets/Projects/r3.jpg'
import r4 from '../../Assets/Projects/r4.jpg'
import rp4 from '../../Assets/Pdf/rp4.pdf'
import ps1 from '../../Assets/Pdf/Poster.pdf'

function Research() {
  const rlist = [r1, r2, r3, r4]
  const poster = [ps1, null, null, null]
  const rplist = [null, null, null, rp4]

  return (
    <>
      <Container className="research">
        <div className="r-title">Research 📝</div>
        <div className="r-description">{contentData[2].content}</div>
        {contentData[2].items.map((item, i) => (
          <Row className="research-item" key={i}>
            <Col md={5} className="r-left">
              <Image src={rlist[i]} rounded className="rimg" />
            </Col>
            <Col md={7} className="r-right">
              <div className="r-link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={poster[i]}
                  className={`${poster[i] == null ? 'none' : ''} r-a`}
                >
                  [poster in PETs 2024]
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={rplist[i]}
                  className={`${rplist[i] == null ? 'none' : ''} r-a`}
                >
                  [pdf]
                </a>
              </div>
              <div className="r-small-title">{item.title}</div>
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={item.aolink}
                  className="r-a"
                >
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
