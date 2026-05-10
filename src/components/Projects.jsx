import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p>Here are some of my featured projects that highlight my skills in frontend and full-stack development .Each project reflect my interest in building responsive and user-friendly web applications .</p>
<br></br>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="buttons">
                <a href={project.github} target="_blank">
                  <button className="btn">GitHub</button>
                </a>

                <a href={project.demo} target="_blank">
                  <button className="btn">Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}