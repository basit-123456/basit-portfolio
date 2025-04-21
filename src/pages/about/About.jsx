"use client"

import { Briefcase, Download, GraduationCap, Mail, MapPin, User } from "lucide-react"
import "./about.css"
import Swal from 'sweetalert2';
import { useState } from "react"

function About() {
  const [tab1, setTab1] = useState("about-me")
  const [showResume, setShowResume] = useState(false)

  const download = () => {
    // Toggle resume visibility
    setShowResume(!showResume)
  }

  const downloadResume = () => {
    // Create a dummy PDF for download (in a real app, you would link to an actual file)
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Path to your actual resume file
    link.download = "Abdulbasit_Ahmadzai_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

 
  const contactBtnClick = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        timerProgressBar: 'custom-toast-progress'
      },
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
  
    Toast.fire({
      icon: "success",
      border: "green",
      title: "Thank you for your contact with us!"
    });
  };

  
  const resumetBtnClick = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        timerProgressBar: 'custom-toast-progress'
      },
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
  
    Toast.fire({
      icon: "success",
      border: "green",
      title: "Thank you for your contact with us!"
    });
  };
  

  return (
    <div className="about-container">
      <div className="about-grid">
        {/* Profile Section */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image-container">
              <img src="data:image/jpeg;base64,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" alt="Profile" className="profile-image" />
            </div>
            <h1 className="profile-name">Abdulbasit Ahmadzai</h1>
            <p className="profile-title">Full Stack Web Developer</p>

            <div className="profile-buttons">
              <button onClick={contactBtnClick} className="profile-button">
                <Mail className="button-icon" />
                Contact
              </button>
              <button onClick={ resumetBtnClick} onClick={download}  className="profile-button">
                <Download className="button-icon" />
                Resume
              </button>
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-info">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3 className="info-title">Location</h3>
                  <p className="info-text">Kabul, Afghanistan</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h3 className="info-title">Email</h3>
                  <p className="info-text">basitahmadzai2025@gmail.com</p>
                </div>
              </div>

              <div className="skills-section-1">
                <h3 className="section-title">Skills</h3>
                <div className="skills-list">
                  <span className="skill-badge">HTML</span>
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Next.js</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">UI/UX</span>
                  <span className="skill-badge">Tailwind CSS</span>
                  <span className="skill-badge">Node.js</span>
                </div>
              </div>

              <div className="languages-section">
                <h3 className="section-title">Languages</h3>
                <div className="languages-list">
                  <span className="language-badge">English</span>
                  <span className="language-badge">Spanish</span>
                  <span className="language-badge">Arabic</span>
                  <span className="language-badge">Pashto</span>
                  <span className="language-badge">Dari</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="tabs">
            <div className="tabs-list">
              <button
                onClick={() => setTab1("about-me")}
                className={`tab-button ${tab1 === "about-me" ? "active" : ""}`}
                data-tab="about"
              >
                <User className="tab-icon" />
                About Me
              </button>
              <button
                onClick={() => setTab1("experience")}
                className={`tab-button ${tab1 === "experience" ? "active" : ""}`}
                data-tab="experience"
              >
                <Briefcase className="tab-icon" />
                Experience
              </button>
              <button
                onClick={() => setTab1("education")}
                className={`tab-button ${tab1 === "education" ? "active" : ""}`}
                data-tab="education"
              >
                <GraduationCap className="tab-icon" />
                Education
              </button>
            </div>

            {tab1 === "about-me" ? (
              <div className="tab-content active" id="about-tab">
                <h2 className="content-title">About Me</h2>
                <div className="about-text">
                  <p>
                    Hello! I'm Basit Ahmadzai Web Developer with 5 years of experience specializing in front-end
                    technologies. I enjoy tackling complex problems and turning them into simple, beautiful solutions.
                    My journey in Computer Science began when I first discovered the power of creating on the web. It
                    was transformative for me to see how code could bring ideas to life. Since then, I've been
                    continuously learning and improving my skills to stay at the forefront of front-end technologies.
                  </p>
                  <p>
                    With nearly two decades in web development, I've mastered various frameworks and technologies. I
                    specialize in creating responsive, accessible, and performant web applications that deliver
                    exceptional user experiences. My expertise includes modern JavaScript frameworks, CSS architecture,
                    and building scalable front-end systems.
                  </p>
                </div>
              </div>
            ) : null}

            {tab1 === "experience" ? (
              <div className="tab-content active" id="about-tab">
                <h2 className="content-title">Work Experience</h2>
                <div className="timeline">
                  {/* Experience Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2021 - Present</span>
                      <h3 className="timeline-title">Senior Developer</h3>
                      <p className="timeline-company">Afghan Cosmos</p>
                      <p className="timeline-description">
                        Responsible for developing and maintaining web applications, leading a team of developers, and
                        collaborating with designers and product managers to deliver high-quality products.
                      </p>
                      <div className="timeline-tags">
                        <span className="timeline-tag">Django</span>
                        <span className="timeline-tag">Vue.js</span>
                        <span className="timeline-tag">JavaScript</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2023 - Present</span>
                      <h3 className="timeline-title">Jonior Developer</h3>
                      <p className="timeline-company">Afghan Cosmos Group</p>
                      <p className="timeline-description">
                        Responsible for developing and maintaining web applications, leading a team of developers, and
                        collaborating with designers and product managers to deliver high-quality products.
                      </p>
                      <div className="timeline-tags">
                        <span className="timeline-tag">React</span>
                        <span className="timeline-tag">Node.js</span>
                        <span className="timeline-tag">Python</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2018 - 2021</span>
                      <h3 className="timeline-title">Web Developer</h3>
                      <p className="timeline-company">Afghan Cosmos It Solutions</p>
                      <p className="timeline-description">
                        Developed responsive websites and applications, collaborated with the design team, and
                        implemented new features and functionality.
                      </p>
                      <div className="timeline-tags">
                        <span className="timeline-tag">JavaScript</span>
                        <span className="timeline-tag">HTML/CSS</span>
                        <span className="timeline-tag">Node.js</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {tab1 === "education" ? (
              <div className="tab-content active" id="about-tab">
                <h2 className="content-title">Education</h2>
                <div className="timeline">
                  {/* Education Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2014 - 2018</span>
                      <h3 className="timeline-title">Bachelor of Science in Computer Science</h3>
                      <p className="timeline-company">Salaam University</p>
                      <p className="timeline-description">
                        Studied computer science fundamentals, algorithms, data structures, and software engineering.
                        Graduated with honors.
                      </p>
                    </div>
                  </div>

                  {/* Education Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2020</span>
                      <h3 className="timeline-title">Web Development Certification</h3>
                      <p className="timeline-company">Online Platform</p>
                      <p className="timeline-description">
                        Completed an intensive web development bootcamp covering modern frontend and backend
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="timeline">
                  {/* Education Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2024 - 2025</span>
                      <h3 className="timeline-title">Teacher of the web developments </h3>
                      <p className="timeline-company">Afghan Cosmos Group</p>
                      <p className="timeline-description">
                        Studied computer science fundamentals, algorithms, data structures, and software engineering.
                        Graduated with honors.
                      </p>
                    </div>
                  </div>

                  {/* Education Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2023</span>
                      <h3 className="timeline-title">Web Developer</h3>
                      <p className="timeline-company">Online & Offline Platform</p>
                      <p className="timeline-description">
                        Completed an intensive web development Courses modern frontend and backend technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Resume Section - Shows when Resume button is clicked */}
      {showResume && (
        <div className="resume-container">
          <div className="resume-header">
            <h2 className="resume-title">My Resume</h2>
            <button onClick={downloadResume}  className="download-button">
              <Download className="button-icon" />
              Download Resume
            </button>
          </div>
          <div className="resume-content">
            <div className="resume-section">
              <h3 className="resume-section-title">Professional Summary</h3>
              <p className="resume-text">
                Web Developer with 5 years of experience specializing in front-end technologies. Proficient in React,
                Next.js, and modern JavaScript frameworks. Strong problem-solving skills and ability to create
                responsive, user-friendly web applications.
              </p>
            </div>

            <div className="resume-section">
              <h3 className="resume-section-title">Work Experience</h3>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4 className="resume-item-title">Senior Developer</h4>
                  <span className="resume-item-date">2021 - Present</span>
                </div>
                <p className="resume-item-company">Afghan Cosmos</p>
                <ul className="resume-item-list">
                  <li>Led development of responsive web applications</li>
                  <li>Managed team of 5 junior developers</li>
                  <li>Implemented CI/CD pipelines for streamlined deployment</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <h4 className="resume-item-title">Web Developer</h4>
                  <span className="resume-item-date">2018 - 2021</span>
                </div>
                <p className="resume-item-company">Afghan Cosmos It Solutions</p>
                <ul className="resume-item-list">
                  <li>Developed responsive websites and applications</li>
                  <li>Collaborated with design team on UI/UX improvements</li>
                  <li>Implemented new features and functionality</li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h3 className="resume-section-title">Education</h3>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4 className="resume-item-title">Bachelor of Science in Computer Science</h4>
                  <span className="resume-item-date">2014 - 2018</span>
                </div>
                <p className="resume-item-company">Salaam University</p>
              </div>
            </div>

            <div className="resume-section">
              <h3 className="resume-section-title">Skills</h3>
              <div className="resume-skills">
                <span className="resume-skill">HTML</span>
                <span className="resume-skill">CSS</span>
                <span className="resume-skill">JavaScript</span>
                <span className="resume-skill">React</span>
                <span className="resume-skill">Next.js</span>
                <span className="resume-skill">TypeScript</span>
                <span className="resume-skill">Node.js</span>
                <span className="resume-skill">UI/UX</span>
                <span className="resume-skill">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
