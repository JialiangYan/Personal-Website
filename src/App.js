import React, { useState, useEffect, useRef } from 'react'
import Preloader from './Components/Pre/Pre'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/Nav/Nav'
import ScrollToTop from './Components/ScrollToTop'

import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Research from './Pages/Research/Research'

// import './style.css'
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

  // Cursor
  // const cur = document.querySelector('.cursor')
  // const researchItem = document.querySelector('.research-item')

  // researchItem.addEventListener('mouseenter', () => {
  //   cur.style.width = '4rem'
  //   cur.style.height = '4rem'
  // })

  // researchItem.addEventListener('mouseleave', () => {
  //   cur.style.width = '2rem'
  //   cur.style.height = '2rem'
  // })

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
        <div className="cursor" ref={cursor}></div>
        <NavBar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          researchRef={researchRef}
          scrollComponent={scrollComponent}
        />
        <ScrollToTop />
        {/* Content */}
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={researchRef}>
          <Research />
        </div>
        {/* <div ref={projectsRef}>
          <Projects />
        </div> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
