import React from 'react'
// import './Failure.css'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import contentData from '../../Assets/content.json'

function Failure() {
  return (
    <>
      <Link to="/" className="back">
        {'<'}
      </Link>
      <div className="main">
        <div className="title">Failure Resume 🤷</div>
        <p className="description">{contentData[1].content}</p>
        <p>
          My idea of failure resume was inspired by{' '}
          <a
            href="https://joicetang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joice Tang
          </a>
        </p>
        <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5']} alwaysOpen>
          <div className="small-title">{contentData[1].items[0].year}</div>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {contentData[1].items[0].things[0].content}
            </Accordion.Header>
            <Accordion.Body>
              {contentData[1].items[0].things[0].reflection}
            </Accordion.Body>
          </Accordion.Item>

          <div className="small-title">{contentData[1].items[1].year}</div>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {contentData[1].items[1].things[0].content}
            </Accordion.Header>
            <Accordion.Body>
              {contentData[1].items[1].things[0].reflection}
            </Accordion.Body>
          </Accordion.Item>

          <div className="small-title">{contentData[1].items[2].year}</div>
          {contentData[1].items[2].things.map((item, index) => (
            <Accordion.Item key={index} eventKey={String(index + 2)}>
              <Accordion.Header>{item.content}</Accordion.Header>
              <Accordion.Body>{item.reflection}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <Footer />
    </>
  )
}

export default Failure
