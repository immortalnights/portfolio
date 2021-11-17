
import ReactMarkdown from 'react-markdown'

const Project = ({ name, description, image, href, source }) => {

  if (image === "")
  {
    image = "noimage.png"
  }

  return (
    <div className="project">
      <div>
        <div className="image-container">
          <img className="image" alt={name} src={image} />
        </div>
      </div>
      <div className="details">
        <h4>{name}</h4>
        <ReactMarkdown>{description}</ReactMarkdown>
        <div>
          <span>{href ? (<a href={href} target="_blank" rel="noreferrer" >Visit</a>) : null }</span>
          <span>{source ? (<a href={source} target="_blank" rel="noreferrer" >Source</a>) : null }</span>
        </div>
      </div>
    </div>
  )
}

export default Project