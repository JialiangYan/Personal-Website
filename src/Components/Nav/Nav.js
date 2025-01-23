import React, { useState } from 'react'
import './Nav.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function NavBar({ aboutRef, researchRef, projectsRef, scrollComponent }) {
  const [expand, updateExpanded] = useState(false)
  const navColour = true

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded')
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={(e) => {
                  e.preventDefault()
                  updateExpanded(false)
                  scrollComponent(aboutRef)
                }}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/research"
                onClick={(e) => {
                  e.preventDefault()
                  updateExpanded(false)
                  scrollComponent(researchRef)
                }}
              >
                Research
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={(e) => {
                  e.preventDefault()
                  updateExpanded(false)
                  scrollComponent(projectsRef)
                }}
              >
                Misc
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
