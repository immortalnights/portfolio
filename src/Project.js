
import ReactMarkdown from 'react-markdown'

const Project = ({ name, description, image, href }) => {
  return (
    <div className="project">
      <div>
        <div className="image-container">
          <img className="image" alt="" width="" height="" />
        </div>
      </div>
      <div>
        <h4>{name}</h4>
        <ReactMarkdown>{description}</ReactMarkdown>
        <div>{href ? (<a href={href} target="_blank" rel="noreferrer" >Visit</a>) : null }</div>
      </div>
    </div>
  )
}

export default Project