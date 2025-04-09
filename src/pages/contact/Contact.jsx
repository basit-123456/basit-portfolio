"use client"
import "./contact.css"

function Contact() {
  // Function to handle Email button click
  const handleEmailClick = () => {
    alert("You can email us at info@afghancosmos.com")
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission
    alert("Thank you for your message! We will get back to you soon.")
    // You can add form processing logic here
  }

  return (
    <div className="main-contact-1">
      <div className="main-contact1">
        <div className="cards1">
          <div className="card1">
            <div className="icon-card">
              <i className="fa-brands fa-whatsapp "></i>
            </div>
            <div className="body-card">
              <h3>Chat us</h3>
              <p>Intrusted in Afghan Cosmos? just pick up the phone to chat with use</p>
            </div>
            <div className="icon-number">
              <h3>0764534332</h3>
            </div>
          </div>

          {/* card 2 */}
          <div className="card1">
            <div className="icon-card">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="body-card">
              <h3>Email us</h3>
              <p>can't chat with us during these hours? We'll respond to you via email within a day</p>
            </div>
            <div className="icon-number-btn">
              {/* Added onClick handler to the Email button */}
              <button onClick={handleEmailClick}>Email</button>
            </div>
          </div>

          {/* card 3 */}
          <div className="card1">
            <div className="icon-card">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="body-card">
              <h3>Call us</h3>
              <p>Intrusted in Afghan Cosmos? just pick up the phone to chat with use</p>
            </div>
            <div className="icon-number">
              <h3>076543215</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section-1">
        <div className="image-section-1">
          <img
            src="https://api.afghancosmos.com/media/images/png/destination.png"
            alt="logo"lllllll
            onError={(e) => {   
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Afghan+Cosmos"
              console.error("Image failed to load, using placeholder")
            }}
          />
        </div>
        <div className="form-section-1">
          {/* Added onSubmit handler to the form */}
          <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Name" />
            <input type="text" required placeholder="Last/Name" />
            <input type="number" required placeholder="Phone/Number" />
            <input type="email" required placeholder="Email" />
            <textarea required rows={6} placeholder="Write a massage......."></textarea>
            <button type="submit" id="btn-2">
              Send |  <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

