import React from 'react'
import './App.css'

function App() {
  const [ canvasSize, setCanvasSize ] = React.useState({ w: window.innerWidth, h: window.innerHeight })
  const canvasRef = React.useRef(null)
  React.useEffect(() => {
    const handleResize = () => {
      setCanvasSize({ w: window.innerWidth, h: window.innerHeight })
    }

    document.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ canvasSize ])

  React.useEffect(() => {
    let id
    const context: CanvasRenderingContext2D = canvasRef.current.getContext('2d')

    const render = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)

      // context.fillStyle = 
      context.beginPath()
      context.fillRect(100, 100, 50, 5)
      context.closePath()


      id = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(id)
    }
  }, [ canvasRef ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, I'm <span className="name-highlight">Andrew Cockayne</span>.</h1>
        <h2>I'm a full-stack developer.</h2>
        <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}></canvas>
      </header>
      <section>
        I'm a hardworking, quick learning, team player.
      </section>
      <section>
        <p>I have over ten years experience working at an industry leading tech company.</p>
        <p>Programming in C++, JavaScript and Python</p>
        <p>Using Jenkins, Docker and GIT.</p>
      </section>
      <section>
        <div className="preview left">
          <div className="image"><img alt="" width="" height="" /></div>
          <div className="info">
            <h4>Title</h4>
            <p>Something about the item.</p>
            <p>Something about the item.</p>
            <p>Something about the item.</p>
          </div>
        </div>
        <div className="preview right">
          <div className="image"><img alt="" width="" height="" /></div>
          <div className="info">
            <h4>Title</h4>
            <p>Something about the item.</p>
            <p>Something about the item.</p>
            <p>Something about the item.</p>
          </div>
        </div>
      </section>
      <footer>
        Andrew Cockayne &copy; 2021
      </footer>
    </div>
  );
}

export default App;
