import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import './P5.css'

const MyP5Sketch = ({ width, height }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const sketch = (p) => {
      let arcSize = 400
      let sw,
        alpha = 0
      let yStep = 10

      p.setup = () => {
        p.createCanvas(width, height).parent(canvasRef.current)
      }

      p.draw = () => {
        p.background(255, 255, 255)

        p.mouseX = p.constrain(p.mouseX, 10, p.width - 10)
        p.mouseY = p.constrain(p.mouseY, 10, p.height - 10)

        p.noFill()
        p.stroke(173, 216, 230)

        for (let y = arcSize / 2; y < p.height - arcSize / 2; y += yStep) {
          sw = p.map(p.sin(p.radians(y + alpha)), -1, 1, 2, yStep)
          p.strokeWeight(sw)
          for (let x1 = arcSize / 2; x1 < p.width + arcSize; x1 += arcSize) {
            p.arc(x1, y, arcSize / 2, arcSize / 2, 0, p.PI)
          }
          sw = p.map(p.sin(p.radians(y - alpha)), -1, 1, 2, yStep)
          p.strokeWeight(sw)
          for (let x2 = 0; x2 < p.width + arcSize; x2 += arcSize) {
            p.arc(x2, y, arcSize / 2, arcSize / 2, p.PI, p.TWO_PI)
          }
        }
        alpha++
      }
    }

    new p5(sketch)

    // Cleanup function
    return () => {
      // Unmounting logic here if needed
    }
  }, [width, height])

  return <div ref={canvasRef} className="bg"></div>
}

export default MyP5Sketch
