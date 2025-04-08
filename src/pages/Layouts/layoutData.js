"use client"

import { useState } from "react"
import './layout.css'

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      image: "https://api.afghancosmos.com/media/images/service/IT_Profile_for_Website-01.png",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "CSS"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication and real-time updates.",
      image: "https://api.afghancosmos.com/media/images/service/IT_Profile_for_Website-01.png",
      category: "web",
      technologies: ["React", "Firebase", "Bootstrap"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A creative portfolio website with smooth animations and interactive elements.",
      image: "https://api.afghancosmos.com/media/images/service/IT_Profile_for_Website-01.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A mobile app that provides real-time weather forecasts based on user location.",
      image: "https://api.afghancosmos.com/media/images/service/IT_Profile_for_Website-01.png",
      category: "mobile",
      technologies: ["React Native", "API Integration"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard that visualizes complex data sets with customizable charts.",
      image: "https://api.afghancosmos.com/media/images/service/IT_Profile_for_Website-01.png",
      category: "data",
      technologies: ["Python", "D3.js", "React"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Social Media Platform",
      description: "A social networking platform with real-time messaging and content sharing capabilities.",
      image: "https://api.afghancosmos.com/media/images/service/IT_Profile_for_Website-01.png",
      category: "web",
      technologies: ["React", "Node.js", "Socket.io"],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>
            My <span>Projects</span>
          </h2>
          <p>Here are some of my recent projects that showcase my skills and expertise.</p>
        </div>

        <div className="projects-filter">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
            All Projects
          </button>
          <button className={filter === "web" ? "active" : ""} onClick={() => setFilter("web")}>
            Web Development
          </button>
          <button className={filter === "mobile" ? "active" : ""} onClick={() => setFilter("mobile")}>
            Mobile Apps
          </button>
          <button className={filter === "data" ? "active" : ""} onClick={() => setFilter("data")}>
            Data Projects
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-eye"></i> Live Demo
                    </a>
                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-code"></i> View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="#" className="view-all-btn">
            View All Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

