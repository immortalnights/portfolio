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

  const [inGame, setInGame] = React.useState(false)

  const onPlayAsteroidsClick = () => {
    setInGame(true)
  }

  const onEndAsteroidsClick = () => {
    setInGame(false)
  }

  React.useEffect(() => {
    window.addEventListener("keyup", (event) => {
      console.log(event.key)
      if (event.key === 'Escape')
      {
        setInGame(false)
      }
    })
  })

  React.useEffect(() => {
    if (inGame)
    {
      window.AsteroidsNS?.play()
    }
    else
    {
      window.AsteroidsNS?.end()
    }
  }, [inGame])

  const overlayClasses = ["game-overlay"]
  if (inGame)
  {
    overlayClasses.push("fade-out")
  }

  return (
    <div className="App">
      <section className="app-header">
        <div className="asteroids">
          <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}></canvas>
        </div>
        <section className={overlayClasses.join(" ")}>
          <div className="spacer"></div>
          <h1>Hello, I'm <span className="name-highlight">Andrew Cockayne</span>, a full-stack developer.</h1>
          <div className="social-links">
            <a href="https://github.com/immortalnights" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} /> GitHub</a>
            <a href="https://www.linkedin.com/in/andrew-cockayne/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href="mailto:a.cockayne@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelopeSquare} /> Email</a>
          </div>
          <div className="spacer"></div>
          <p className="footnote">
            <span onClick={onPlayAsteroidsClick} style={{cursor: "pointer"}}>Click to play</span>
            <br />(Asteroids game is work in progress)
          </p>
        </section>
        <div style={{ position: 'absolute', bottom: 0, right: 0, paddingRight: 20, visibility: inGame ? "visible" : "hidden" }}>
          <p className="footnote">
            <span onClick={onEndAsteroidsClick} style={{cursor: "pointer"}}>Press 'ESC' to end</span>
          </p>
        </div>
      </section>
      <section>
        <p>I have over ten years' experience working at an industry leading technology company. During that time I have worked on a distributed backend system for data protection using <em>C++</em>. I am currently team leader for the UI/UX team for the application front-end, written in <em>JavaScript</em>.</p>
        <p>I have excellent knowledge in <em>Python</em> which I utilize for application automation and API integration, alongside <em>Continuous Integration</em> tools such as Jenkins and Docker.</p>
      </section>
      <section>
        <p>My other interests include running, swimming, gaming and films.</p>
      </section>
      <section>
        {projects.map((item, index) => <Project key={index} {...item} />)}
      </section>
      <footer>
        Andrew Cockayne &copy; 2022
      </footer>
    </div>
  );
}

export default App;
