"use client";
import React from "react";
import "./contact.css";
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

function Contact() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: "success",
      title: "Thank you for your message! We will get back to you soon.",
    });
    // Add actual form submission logic if needed here
  };

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
              <p>Intrusted in Afghan Cosmos? just pick up the phone to chat with us</p>
            </div>
            <div className="icon-number">
              <h3>0764534332</h3>
            </div>
          </div>
          <div className="card1">
            <div className="icon-card">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="body-card">
              <h3>Email us</h3>
              <p>Can't chat during these hours? We'll respond to you via email within a day</p>
            </div>
            <div className="icon-number-btn">
              <button onClick={handleEmailClick}>Email</button>
            </div>
          </div>
          <div className="card1">
            <div className="icon-card">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="body-card">
              <h3>Call us</h3>
              <p>Intrusted in Afghan Cosmos? just pick up the phone to chat with us</p>
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
            alt="logo"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=Afghan+Cosmos";
              console.error("Image failed to load, using placeholder");
            }}
          />
        </div>
        <div className="form-section-1">
          <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Name" />
            <input type="text" required placeholder="Last Name" />
            <input type="number" required placeholder="Phone Number" />
            <input type="email" required placeholder="Email" />
            <textarea required rows={6} placeholder="Write a message..."></textarea>
            <button type="submit" id="btn-2">
              Send | <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
