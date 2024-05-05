import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import personPic from '../../Assets/person.jpg'
import { AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import contentData from '../../Assets/content.json'
import CV from '../../Assets/Pdf/CV.pdf'
import './About.css'

function About() {
  return (
    <>
      <Container className="home-content">
        <Row>
          {/* Picture */}
          <Col md={5} style={{ textAlign: 'center', padding: '0 2rem' }}>
            <img src={personPic} alt="home pic" className="avatar-image" />
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/JialiangYan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="svg" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/anguishbaby?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="svg" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jialiang-yan-61073b22b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="svg" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:jialian6@ualberta.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail className="svg" />
                </a>
              </li>
            </ul>
            <p className="sentence">
              Powered by sunshine and{' '}
              <a
                href="https://rateyourmusic.com/genre/dream-pop/"
                className="highlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                dream pop
              </a>
            </p>
          </Col>

          {/* Content */}
          <Col md={7} style={{ padding: '0 2rem' }}>
            <h1 className="heading highlight-title">
              Hi! I'm Jialiang{' '}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>
              <span className="pros">(pronouns: they/he)</span>{' '}
            </h1>

            <h1 className="content">
              {/* I'M
               */}
              <p>
                I am currently an upcoming fourth-year undergraduate student
                studying Computer Science at the University of Alberta, luckily
                advised by{' '}
                <a
                  href="https://bkacsmar.github.io//"
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Bailey Kacsmar
                </a>{' '}
                and{' '}
                <a
                  href="https://www.cdemmansepp.com/"
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Carrie Demmans Epp
                </a>
                . I used to study law at Sichuan University.
              </p>
              <p>{contentData[0].content}</p>
              <p>
                You can find anything else you might need to know about me
                below.
              </p>
              {/* Buttons */}
              <a
                href={CV}
                className="highlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                curriculum vitae
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/failure" className="highlight">
                failure resume
              </Link>
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
