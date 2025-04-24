"use client"

import { Briefcase, Download, GraduationCap, Mail, MapPin, User, X } from "lucide-react"
import { useState } from "react"
import "./about.css"

function About() {
  const [activeTab, setActiveTab] = useState("about-me")
  const [showResume, setShowResume] = useState(true)

  const toggleResume = () => {
    // Toggle resume visibility
    setShowResume(!showResume)
  }

  const downloadResume = () => {
    // Create a dummy PDF for download (in a real app, you would link to an actual file)
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Path to your actual resume file
    link.download = "Basit_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const contact = () => {
    window.location.href = "https://mail.google.com/mail/u/0/#inbox"
  }

  return (
    <div className="about-container">
      <div className="about-grid">
        {/* Profile Section */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image-container">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BasitOwnd.PNG-Ny7CkOsfPGfwbvyw5pKNfzEWBusnTT.png" alt="Profile" className="profile-image" />
            </div>
          
            <h1 className="profile-name">Abdulbasit Ahmadzai</h1>
            <p className="profile-title"> Full Stack Web Developer</p>

            <div className="profile-buttons">
              <button onClick={contact} className="profile-button">
                <Mail className="button-icon" />
                Contact
              </button>
              <button onClick={toggleResume} className="profile-button">
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

              <div className="skills-section">
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
                onClick={() => setActiveTab("about-me")}
                className={`tab-button ${activeTab === "about-me" ? "active" : ""}`}
              >
                <User className="tab-icon" />
                About
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
              >
                <Briefcase className="tab-icon" />
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`tab-button ${activeTab === "education" ? "active" : ""}`}
              >
                <GraduationCap className="tab-icon" />
                Education
              </button>
            </div>

            {activeTab === "about-me" && (
              <div className="tab-content active">
                <h2 className="content-title">About Me</h2>
                <div className="about-text">
                  <p>
                    Hello! I'm a Web Developer with 5 years of experience specializing in front-end technologies. I
                    enjoy tackling complex problems and turning them into simple, beautiful solutions. My journey in
                    Computer Science began when I first discovered the power of creating on the web. It was
                    transformative for me to see how code could bring ideas to life. Since then, I've been continuously
                    learning and improving my skills to stay at the forefront of front-end technologies.
                  </p>
                  <p>
                    With several years in web development, I've mastered various frameworks and technologies. I
                    specialize in creating responsive, accessible, and performant web applications that deliver
                    exceptional user experiences. My expertise includes modern JavaScript frameworks, CSS architecture,
                    and building scalable front-end systems.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="tab-content active">
                <h2 className="content-title">Work Experience</h2>
                <div className="timeline">
                  {/* Experience Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2021 - Present</span>
                      <h3 className="timeline-title">Senior Developer</h3>
                      <p className="timeline-company">ABC Tech Solutions</p>
                      <p className="timeline-description">
                        Responsible for developing and maintaining web applications, leading a team of developers, and
                        collaborating with designers and product managers to deliver high-quality products.
                      </p>
                      <div className="timeline-tags">
                        <span className="timeline-tag">React</span>
                        <span className="timeline-tag">Next.js</span>
                        <span className="timeline-tag">JavaScript</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2019 - 2021</span>
                      <h3 className="timeline-title">Frontend Developer</h3>
                      <p className="timeline-company">XYZ Digital</p>
                      <p className="timeline-description">
                        Responsible for developing responsive web applications, implementing UI designs, and
                        collaborating with the backend team to integrate APIs.
                      </p>
                      <div className="timeline-tags">
                        <span className="timeline-tag">React</span>
                        <span className="timeline-tag">Node.js</span>
                        <span className="timeline-tag">TypeScript</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2018 - 2019</span>
                      <h3 className="timeline-title">Web Developer</h3>
                      <p className="timeline-company">Tech Solutions</p>
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
            )}

            {activeTab === "education" && (
              <div className="tab-content active">
                <h2 className="content-title">Education</h2>
                <div className="timeline">
                  {/* Education Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2014 - 2018</span>
                      <h3 className="timeline-title">Bachelor of Science in Computer Science</h3>
                      <p className="timeline-company">University of Technology</p>
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
                      <p className="timeline-company">Online Learning Platform</p>
                      <p className="timeline-description">
                        Completed an intensive web development bootcamp covering modern frontend and backend
                        technologies.
                      </p>
                    </div>
                  </div>

                  {/* Education Item */}
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">2022</span>
                      <h3 className="timeline-title">Advanced React Development</h3>
                      <p className="timeline-company">Tech Academy</p>
                      <p className="timeline-description">
                        Specialized training in advanced React patterns, state management, and performance optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Resume Section - Shows when Resume button is clicked */}
      {showResume && (
        <div className="cv-container" >
          {/* Left Column - Dark Sidebar */}
          <div className="sidebar" >
            {/* Profile Photo */}
            <div className="profile-photo-container">
              <div className="profile-photo">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BasitOwnd.PNG-Ny7CkOsfPGfwbvyw5pKNfzEWBusnTT.png" alt="Profile Image" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="sidebar-section">
              <div className="section-header">
                <div className="icon-container">
                  <i className="fas fa-address-card"></i>
                </div>
                <h2>CONTACT ME</h2>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+937 651 698 54</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>+937 651 698 54</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>basikhan@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Kabul, Afghanistan</span>
                </div>
              </div>
            </div>

            {/* References Section */}
            <div className="sidebar-section">
              <div className="section-header">
                <div className="icon-container">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h2>REFERENCES</h2>
              </div>
              <div className="references">
                <div className="reference">
                  <h3>Abdulbasit Ahmadzai</h3>
                  <p>Senior Web Designer  </p>
                  <p>Tel: +937 651 698 54</p>
                  <p>Email: basitahmazai20225@gmail.com</p>
                </div>
                <div className="reference">
                  <h3>Ahmad Khan</h3>
                  <p>Senior Developer </p>
                  <p>Tel: +098-765-4321</p>
                  <p>Email: ahmadkhan20225@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="sidebar-section">
              <div className="section-header">
                <div className="icon-container">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h2>EDUCATION</h2>
              </div>
              <div className="education">
                <div className="education-item">
                  <h3>SALAAM UNIVERSITY</h3>
                  <p>MASTER DEGREE IN DESIGN</p>
                  <p>2015 - 2017</p>
                </div>
                <div className="education-item">
                  <h3>UNIVERSITY OF INDIA</h3>
                  <p>BACHELOR DEGREE IN GRAPHIC</p>
                  <p>2011 - 2015</p>
                </div>
              </div>
            </div>

            {/* Diagonal Element */}
            <div className="diagonal-element bottom-left"></div>
          </div>

          {/* Right Column - Main Content */}
          <div className="main-content">
            {/* Diagonal Element */}
            <div className="diagonal-element top-right"></div>

            {/* Header with Name and Title */}

            <div className="header">
              <h1>
                BASIT <span className="highlight"> AHMADZAI</span>
              </h1>
              <p className="job-title"> GRAPHIC & WEB DESIGNER</p>

            </div>

            {/* CV Control Buttons */}
            <div className="cv-controls">
              <button className="download-button" onClick={downloadResume}>
                <Download className="button-icon" />
                {/* Download */}
              </button>
              <button className="close-button" onClick={toggleResume}>
                <X className="button-icon" />
              </button>

            </div>


            {/* About Me Section */}
            <div className="content-section">
              <div className="section-header">
                <div className="icon-container">
                  <i className="fas fa-user"></i>
                </div>
                <h2>ABOUT ME</h2>
              </div>
              <p className="about-text">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a book.
              </p>
            </div>

            {/* Job Experience Section */}
            <div className="content-section">
              <div className="section-header">
                <div className="icon-container">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h2>JOB EXPERIENCE</h2>
              </div>
              <div className="experience">
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>SENIOR WEB DESIGNER</h3>
                    <span className="date">2020 - Present</span>
                  </div>
                  <p className="company">Afghan Cosmos</p>
                  <p className="description">
                    Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>GRAPHIC DESIGNER</h3>
                    <span className="date">2018 - 2020</span>
                  </div>
                  <p className="company">Design Studio</p>
                  <p className="description">
                    Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>MARKETING MANAGER</h3>
                    <span className="date">2016 - 2018</span>
                  </div>
                  <p className="company">Advertising Agency / NY</p>
                  <p className="description">
                    Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="content-section">
              <div className="section-header">
                <div className="icon-container">
                  <i className="fas fa-cogs"></i>
                </div>
                <h2>SKILLS</h2>
              </div>
              <div className="skills">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Html / Css</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">php /Laravel</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Node.js / React.js</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Website Development</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagonal Element */}
            <div className="diagonal-element bottom-right"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
