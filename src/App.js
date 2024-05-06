import React, { useState, useEffect, useRef } from 'react'
import Preloader from './Components/Pre/Pre'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/Nav/Nav'

import About from './Pages/About/About'
import Research from './Pages/Research/Research'
import Art from './Pages/Art/Art'

import './style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyP5Sketch from './P5/MyP5Sketch'

function App() {
  const [load, upadateLoad] = useState(true)
  const width = window.innerWidth
  const height = window.innerHeight

  const aboutRef = useRef()
  const researchRef = useRef()
  const projectsRef = useRef()

  const scrollComponent = (elem) => {
    elem.current.scrollIntoView({ behavior: 'smooth' })
  }

  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`
    cursor.current.style.left = `${e.clientX}px`
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <MyP5Sketch width={width} height={height} />
      <Preloader load={load} />
      <div
        className="App"
        id={load ? 'no-scroll' : 'scroll'}
        onMouseMove={changePosition}
      >
        <div id="cursor" ref={cursor}></div>
        <NavBar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          researchRef={researchRef}
          scrollComponent={scrollComponent}
        />
        {/* Content */}
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={researchRef}>
          <Research />
        </div>
        {/* <div ref={projectsRef}>
          <Art />
        </div> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
