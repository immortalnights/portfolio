import React from 'react'
import Project from './Project'
import Asteroids from './asteroids.ts'
import projects from './projects.json'
import './App.css'

function App() {
  const [ canvasSize, setCanvasSize ] = React.useState({ w: window.innerWidth, h: window.innerHeight })
  const canvasRef = React.useRef(null)
  React.useLayoutEffect(() => {
    const handleResize = () => {
      const size = canvasRef.current.getBoundingClientRect()
      // const ratio = window.devicePixelRatio || 1

      setCanvasSize({
        width: size.width,
        height: size.height
      })

      // canvasRef.current.getContext('2d').scale(ratio, ratio)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ setCanvasSize ])

  React.useEffect(() => {
    const asteroids = new Asteroids(canvasRef.current)

    setTimeout(asteroids.play.bind(asteroids), 1)

    return () => {
      asteroids.stop()
    }
  }, [ canvasRef ])

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>Hello, I'm <span className="name-highlight">Andrew Cockayne</span>.</h1>
          <h2>I'm a full-stack developer.</h2>
        </section>
        <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}></canvas>
      </header>
      <section>
        I'm a hardworking, quick learning, team player. I enjoy running, swimming, gaming and films.
      </section>
      <section>
        <p>I have over ten years experience working at an industry leading tech company.</p>
        <p>Programming in C++, JavaScript and Python.</p>
        <p>Using Jenkins, Docker and GIT.</p>
      </section>
      <section>
        {projects.map((item, index) => <Project key={index} {...item} />)}
      </section>
      <footer>
        Andrew Cockayne &copy; 2021
      </footer>
    </div>
  );
}

export default App;
