import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="main-hero">
        <div className="hero-info">
          <h3>
            <bold><strong>Hi ✋✋</strong></bold>
          </h3>
          <h1>I am basit</h1>
          <h2 className="typing-effect"></h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            blanditiis! Eligendi suscipit obcaecati, eaque tempore ea eius
            consequuntur ipsum officia totam odit molestiae fuga enim rem cumque
            repellendus unde. At? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Non aliquid quas quo!
          </p>

          <div className="cta-buttons">
            <Link to="/contact" className="primary-btn">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <img
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
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
              Afghan Cosmos is Link leading Organization based in Afghanistan that
              provides professional and reliable services in the field of
              Management, Scholarships, Tax & Finance, IT & Telecommunication,
              Research, Surveys and Event Management.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
              <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3><Link to="/Services">Web Development</Link></h3>
              <p>
                We help students find and apply for worldwide, with guidance
                throughout the application process.
              </p>
              <div className="card-overlay">
              <span><Link to="/Services" >Learn More</Link></span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
              </div>
              <h3><Link to="/Services">Mobile Development</Link></h3>
              <p>
                Custom software development, web design, and IT consulting
                services for businesses of all sizes.
              </p>
              <div className="card-overlay">
              <span><Link to="/Services" >Learn More</Link></span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3><Link to="/Services">Backend Development</Link></h3>
              <p>
                Strategic planning, operational improvement, and organizational
                development services.
              </p>
              <div className="card-overlay">
              <span><Link to="/Services" >Learn More</Link></span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
              </div>
              <h3><Link to="/Services">UI/UX Desigin</Link></h3>
              <p>
                Professional development and capacity building programs in
                various fields.
              </p>
              <div className="card-overlay">
                <span><Link to="/Services" >Learn More</Link></span>
              </div>
            </div>
          </div>

          <div className="images-container">
            <div className="images">
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Web Development" className="service-image" />
              </div>
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Mobile Development" className="service-image" />
              </div>
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Backend Development" className="service-image" />
                
              </div>
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"  alt="UX/UX Design" className="service-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="btn-1">
          <button className="action-button">
           <Link  to="/Services"> More Services</Link>
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
              I've developed expertise in various technologies through
              continuous learning and practical application.
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
            <p>
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>
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
                  A fully responsive e-commerce platform with product filtering,
                  cart functionality, and payment integration.
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
                <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Task Management App" />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>
                  A drag-and-drop task management application with user
                  authentication and real-time updates.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">php</span>
                  <span className="tech-tag">Tailwind</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Portfolio Website" />
                <div className="project-overlay">
                
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>Portfolio Website</h3>
                <p>
                  A creative portfolio website with smooth animations and
                  interactive elements.
                </p>
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
                <p>
                  A mobile app that provides real-time weather forecasts based
                  on user location.
                </p>
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
                <p>
                  An interactive dashboard that visualizes complex data sets
                  with customizable charts.
                </p>
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
                <p>
                  A social networking platform with real-time messaging and
                  content sharing capabilities.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">jango</span>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-cta">
            <Link to="/Projects" className="view-all-btn">
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
              We believe in the power of collaboration and expertise. Our team
              is comprised of dedicated professionals who are passionate about
              delivering exceptional results to our clients. Get to know the
              faces behind our company:
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
                  <Link to="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="#">
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
                  <Link to="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="#">
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
                  <Link to="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-solid fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testerminal  section */}
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2>
              Client <span>Testimonials</span>
            </h2>
            <p>What our clients say about our services and solutions.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="testimonial-quote">
                Working with this team was an absolute pleasure. They delivered
                our project on time and exceeded our expectations in every way.
              </p>
              <div className="testimonial-rating">
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="data:image/jpeg;base64,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" alt=" afghan" />
                </div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>CEO, TechStart</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="testimonial-quote">
                The attention to detail and technical expertise demonstrated
                throughout our project was impressive. I highly recommend their
                services.
              </p>
              <div className="testimonial-rating">
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="data:image/jpeg;base64,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"alt="Michael Chen" />
                </div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>CTO, InnovateCorp</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="testimonial-quote">
                Their team's communication was excellent throughout the entire
                development process. They truly understood our vision and
                brought it to life.
              </p>
              <div className="testimonial-rating">
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="star filled">
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoZ0Pn803ce4IddTglgZIvF-EE2UfsFUwfB7zxYgFsJYM86aWnOhC_oY&s"
                    alt="David Wilson"
                  />
                </div>
                <div className="author-info">
                  <h4>David Wilson</h4>
                  <p>Founder, NextLevel</p>
                </div>
              </div>
            </div>
            {/* pageneation section */}
            <div className="slider-controls">
              <button className="prev-btn">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="next-btn">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
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
              <input
                type="text"
                id="fullname"
                placeholder="Full Name"
                required
              />
              <span className="form-error"></span>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" required />
              <span className="form-error"></span>
            </div>
            <button type="submit" className="submit-btn">
               <Link to='/contact' >JOIN NOW</Link> <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
