import projectPic from '../assets/patagonia.png'

function Project(props) {
return (
    <div className="project">
    <h2 className="project-title">{props.title}</h2>
    <img src={projectPic} alt="project-picture" className="project-img"/>
    <p className="project-info-title">GitHub Repo:</p>
    <p className="project-info">{props.repo}</p>
    <p className="project-info-title">Tech used:</p>
    <p className="project-info">{props.techUsed}</p>
    <p className="project-info-title">Additional info:</p>
    <p className="project-info">{props.info}</p>
  
    </div>
)
}

export default Project;