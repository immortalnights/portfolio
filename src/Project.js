
import ReactMarkdown from 'react-markdown'

const Project = ({ name, description, image, href, source }) => {

  if (image === "")
  {
    image = 'noimage.png'
  }

  return (
    <div className="project">
      <div className="image-container">
        <img className="image" alt={name} src={process.env.PUBLIC_URL + '/' + image} />
      </div>
      <div className="details">
        <div style={{padding: "0.25em"}}>
          <h4>{name}</h4>
          <ReactMarkdown>{description}</ReactMarkdown>
          <div>
            <span>{href ? (<a href={href} target="_blank" rel="noreferrer" >Visit</a>) : null }</span>
            <span>{source ? (<a href={source} target="_blank" rel="noreferrer" >Source</a>) : null }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project