
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "BlueCarbonX",
      category: "AI / Machine Learning",
      description:
        "An AI-powered platform designed to estimate blue carbon restoration using satellite imagery, location data, and machine learning techniques.",
      technologies: ["React", "Python", "FastAPI", "Google Earth Engine", "PyTorch"],
    },
    {
      title: "Student Management System",
      category: "Full-Stack Development",
      description:
        "A role-based student management platform where students can view their academic details and marks, while teachers can manage student records and update marks.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Resume Screening System",
      category: "Machine Learning",
      description:
        "A machine learning project focused on analysing resumes and identifying relevant skills to support automated resume screening.",
      technologies: ["Python", "Machine Learning", "TF-IDF", "Scikit-learn"],
    },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head center reveal">
          <h2>My <span>Projects</span></h2>
          <p className="section-sub">
            Some projects I've worked on and explored.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="card project-card reveal"
              key={index}
              style={{ "--d": `${(index % 2) * 100}ms` }}
            >
              <span className="project-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
