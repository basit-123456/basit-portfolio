"use client"

import { useState } from "react"
// import Link from "next/link"/
import { Link } from 'react-router-dom';
import "./layout.css"

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote:
      "The team delivered exceptional results that exceeded our expectations. Their attention to detail and commitment to quality is unmatched in the industry.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO, Innovate Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote:
      "Working with this company transformed our business processes. The solutions they provided were innovative and perfectly tailored to our needs.",
  },
  {
    id: 3,
    name: "Jessica Williams",
    position: "Project Manager, Global Solutions",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote:
      "Their expertise and professionalism made our project a success. I highly recommend their services to anyone looking for quality and reliability.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Operations Director, Nexus Group",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote:
      "The level of customer service we received was outstanding. They were responsive, attentive, and genuinely cared about helping us achieve our goals.",
  },
]

function Layout() {

  const handleEmailClick = () => {
    Swal.fire({
      icon: "error",
      title: "close",
      text: "You want to close at info@afghancosmos.com",
    });
    Swal.fire({
      icon: "info",
      title: "Email Us",
      text: "You can email us at info@afghancosmos.com",
    });

  };
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handle next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Go to specific testimonial
  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  // Current testimonial
  const testimonial = testimonials[currentIndex]

  return (
    <div className="hero">
      <div className="main-hero">
        <div className="hero-info">
          <h3>
            <strong>Hi ✋✋</strong>
          </h3>
          <h1>I am basit</h1>
          <h2 className="typing-effect"></h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, blanditiis! Eligendi suscipit obcaecati,
            eaque tempore ea eius consequuntur ipsum officia totam odit molestiae fuga enim rem cumque repellendus unde.
            At? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non aliquid quas quo!
          </p>

          <div className="cta-buttons">
            <Link href="/contact" className="primary-btn">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link href="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BasitOwnd.PNG-Ny7CkOsfPGfwbvyw5pKNfzEWBusnTT.png" alt="Profile Image" />
        </div>
      </div>
      {/* percentage section  */}
      <div className="percentage">
        <div className="percantage">
          <div className="stat-card">
            <i className="fas fa-check-circle stat-icon"></i>
            <div className="counter" data-target="300">
              300 +
            </div>
            <small>Projects Completed</small>
          </div>
          <div className="stat-card">
            <i className="fas fa-smile stat-icon "></i>
            <div className="counter" data-target="50">
              100 +
            </div>
            <small>Happy Clients</small>
          </div>
          <div className="stat-card">
            <i className="fas fa-award stat-icon"></i>
            <div className="counter" data-target="10">
              50 +
            </div>
            <small>Years Experience</small>
          </div>
          <div className="stat-card">
            <i className="fa-solid fa-handshake stat-icon stat-icon"></i>
            <div className="counter" data-target="10">
              30 +
            </div>
            <small>International partners</small>
          </div>
        </div>
      </div>
      {/* percentage section done */}

      {/* services section start */}
      <section id="services" className="services-section">
        <div className="body-header-body">
          <div className="header">
            <h2>
              Explore Our Unique <span>Services</span>
            </h2>
            <p>
              Afghan Cosmos is a leading Organization based in Afghanistan that provides professional and reliable
              services in the field of Management, Scholarships, Tax & Finance, IT & Telecommunication, Research,
              Surveys and Event Management.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>We help students find and apply for worldwide, with guidance throughout the application process.</p>
              <div className="card-overlay">
                <span>
                  <Link href="/Services">Learn More</Link>
                </span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile Development</h3>
              <p>Custom software development, web design, and IT consulting services for businesses of all sizes.</p>
              <div className="card-overlay">
                <span>
                  <Link href="/Services">Learn More</Link>
                </span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Backend Developmen</h3>
              <p>Strategic planning, operational improvement, and organizational development services.</p>
              <div className="card-overlay">
                <span>
                  <Link href="/Services">Learn More</Link>
                </span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX Desigin</h3>
              <p>Professional development and capacity building programs in various fields.</p>
              <div className="card-overlay">
                <span>
                  <Link href="/Services">Learn More</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="images-container">
            <div className="images">
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Web Development"
                  className="service-image"
                />
              </div>
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Mobile Development"
                  className="service-image"
                />
              </div>
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Backend Development"
                  className="service-image"
                />
              </div>
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="UX/UX Design"
                  className="service-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="btn-1">
          <button className="action-button">
            <Link href="/Services"> More Services</Link>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* this is the skill section  */}

      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2>
              My <span>Skills</span>
            </h2>
            <p>
              I've developed expertise in various technologies through continuous learning and practical application.
            </p>
          </div>

          <div className="skills-content">
            <div className="skills-left">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML5</span>
                    <span className="skill-percentage">100%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" data-width="100%"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">CSS3</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" data-width="95%"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" data-width="90%"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">React</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" data-width="80%"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Bootstrap</span>
                    <span className="skill-percentage">88%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" data-width="88%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-right">
              <div className="skill-category">
                <h3>Backend Development</h3>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Python</span>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" data-width="75%"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Node.js</span>
                    <span className="skill-percentage">70%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" data-width="70%"></div>
                  </div>
                </div>
              </div>

              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon html-icon">
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <h4>HTML5</h4>
                </div>

                <div className="skill-card">
                  <div className="skill-icon css-icon">
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
                  <h4>CSS3</h4>
                </div>

                <div className="skill-card">
                  <div className="skill-icon js-icon">
                    <i className="fa-brands fa-js"></i>
                  </div>
                  <h4>JavaScript</h4>
                </div>

                <div className="skill-card">
                  <div className="skill-icon react-icon">
                    <i className="fa-brands fa-react"></i>
                  </div>
                  <h4>React</h4>
                </div>

                <div className="skill-card">
                  <div className="skill-icon bootstrap-icon">
                    <i className="fa-brands fa-bootstrap"></i>
                  </div>
                  <h4>Bootstrap</h4>
                </div>

                <div className="skill-card">
                  <div className="skill-icon python-icon">
                    <i className="fa-brands fa-python"></i>
                  </div>
                  <h4>Python</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // this is the projects section */}

      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2>
              My <span>Projects</span>
            </h2>
            <p>Here are some of my recent projects that showcase my skills and expertise.</p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="E-Commerce Website"
                />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>E-Commerce Website</h3>
                <p>
                  A fully responsive e-commerce platform with product filtering, cart functionality, and payment
                  integration.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">CSS</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Task Management App"
                />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>A drag-and-drop task management application with user authentication and real-time updates.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">php</span>
                  <span className="tech-tag">Tailwind</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio Website"
                />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>Portfolio Website</h3>
                <p>A creative portfolio website with smooth animations and interactive elements.</p>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Weather Forecast App"
                />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>Weather Forecast App</h3>
                <p>A mobile app that provides real-time weather forecasts based on user location.</p>
                <div className="project-tech">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">API Integration</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Data Visualization Dashboard"
                />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>Data Visualization Dashboard</h3>
                <p>An interactive dashboard that visualizes complex data sets with customizable charts.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">React</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Social Media Platform"
                />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>Social Media Platform</h3>
                <p>A social networking platform with real-time messaging and content sharing capabilities.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">jango</span>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-cta">
            <Link href="/Projects" className="view-all-btn">
              View All Projects <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Team section our team section  */}
      {/* <!-- Team section with hover effects --> */}
      <section id="about" className="team-section">
        <div className="meeting">
          <div className="head">
            <h1>Meet Our Team</h1>
            <p>
              We believe in the power of collaboration and expertise. Our team is comprised of dedicated professionals
              who are passionate about delivering exceptional results to our clients. Get to know the faces behind our
              company:
            </p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://api.afghancosmos.com/media/images/team/2024/05/26/Naqeeb_Ahmadzai.jpeg"
                  alt="Naqeeb Ahmadzai"
                />
              </div>
              <div className="member-info">
                <h3>Naqeeb Ahmadzai</h3>
                <p>Founder and CEO</p>
                <div className="social-icons">
                  <Link href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-solid fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://api.afghancosmos.com/media/images/team/2024/05/26/Sayed_Rahman_Jabari.jpeg"
                  alt="Abdul Basit Ahmadzai"
                />
              </div>
              <div className="member-info">
                <h3>Abdul Basit Ahmadzai</h3>
                <p>Head of Capacity Building</p>
                <div className="social-icons">
                  <Link href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-solid fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://api.afghancosmos.com/media/images/team/2024/05/26/Noor_Hussain_Noori.jpeg"
                  alt="Noor Hussain Noori"
                />
              </div>
              <div className="member-info">
                <h3>Noor Hussain Noori</h3>
                <p>Head of IT & Solutions</p>
                <div className="social-icons">
                  <Link href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-solid fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTERMINAL SECTION  */}

      <section className="static-testimonial-section">
        <div className="static-testimonial-container">
          <div className="static-testimonial-header">
            <h2>Client Testimonials</h2>
            <p>What our clients say about our services</p>
          </div>

          <div className="static-testimonial-content">
            {/* Static testimonial card */}
            <div className="static-testimonial-card">
              <div className="quote-icon">❝</div>

              <p className="testimonial-quote">{testimonial.quote}</p>

              <div className="testimonial-stars">★★★★★</div>

              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image || "/placeholder.jpg"} alt={testimonial.name} />
                </div>
                <div className="author-details">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="testimonial-navigation">
              <button className="nav-button prev-button" onClick={prevTestimonial} aria-label="Previous testimonial">
                &#8592;
              </button>
              <button className="nav-button next-button" onClick={nextTestimonial} aria-label="Next testimonial">
                &#8594;
              </button>
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="testimonial-pagination">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* contact section in the jsx */}
      <section id="contact" className="contact-section">
        <div className="main-contact">
          <div className="main-contact-title">
            <h3>Get In Touch</h3>
            <p>Join us to hear more about available opportunities</p>
          </div>
          <form id="contact-form" className="contact-form">
            <div className="form-group">
              <input type="text" id="fullname" placeholder="Full Name" required />
              <span className="form-error"></span>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" required />
              <span className="form-error"></span>
            </div>
            <button type="submit" className="submit-btn">
              <Link href="/contact" onClick={handleEmailClick}>JOIN NOW</Link> <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Layout
