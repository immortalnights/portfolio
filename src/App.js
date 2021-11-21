import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Project from './Project'
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

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <div className="spacer"></div>
          <h1>Hello, I'm <span className="name-highlight">Andrew Cockayne</span>.</h1>
          <h2>A full-stack developer.</h2>
          <p>
            <a href="https://github.com/immortalnights" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /> GitHub</a>
            <a href="https://www.linkedin.com/in/andrew-cockayne/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href="mailto:a.cockayne@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeSquare} /> Email</a>
          </p>
          <div className="spacer"></div>
          <p className="footnote">(Asteroids game is work in progress)</p>
        </section>
        <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}></canvas>
      </header>
      <section>
        <p>I'm a hardworking, quick learning, team player. I enjoy running, swimming, gaming and films.</p>
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
