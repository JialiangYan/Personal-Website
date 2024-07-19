import React from 'react'
import { Row, Col, Container, Image, Stack, Badge } from 'react-bootstrap'
import './Art.css'
import a1 from '../../Assets/Art/a1.png'
import a4 from '../../Assets/Art/a4.png'
import mic from '../../Assets/mic.jpeg'

function Art() {
  return (
    <Container>
      <div className="r-title">Misc 🦄</div>
      <div className="r-description">
        This page is still under construction. In my spare time, I love drawing
        while listening to music. I spend over 12,000 minutes each month
        immersed in my favorite tunes 😬. My fav artist is{' '}
        <a
          href="https://open.spotify.com/artist/4wXchxfTTggLtzkoUhO86Q"
          className="highlight"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soccer Mommy
        </a>
        .
      </div>
      <div className="a-container">
        <div className="a-img">
          <img src={mic} alt="" />
        </div>
        <div className="a-img">
          <img src={a1} alt="" />
        </div>
        <div className="a-img">
          <img src={a4} alt="" />
        </div>
      </div>
    </Container>
  )
}

export default Art
