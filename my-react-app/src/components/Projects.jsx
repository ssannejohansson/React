

function Project(props) {

return (

    <div className="project-card">
    <h1 className="project-title">{props.title}</h1>
    <img src={props.image} alt="project-img" className="project-img"/>
    <h3 className="project-info-title">GitHub Repo:</h3>
    <p className="project-info">{props.repo}</p>
    <h3 className="project-info-title">Tech used:</h3>
    <p className="project-info">{props.techUsed}</p>
    <h3 className="project-info-title">Additional info:</h3>
    <p className="project-info">{props.info}</p>
    </div>
)
}

export default Project;