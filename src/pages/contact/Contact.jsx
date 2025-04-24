"use client";
import React, { useState } from "react";
import "./contact.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import emailjs from "emailjs-com"; // You'll need to install this: npm install emailjs-com

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
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS service, template, and user IDs
      const serviceId = "YOUR_EMAILJS_SERVICE_ID";
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
      const userId = "YOUR_EMAILJS_USER_ID";

      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.name} ${formData.lastName}`,
        reply_to: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        to_name: "Afghan Cosmos", // Recipient name
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, userId);

      // Show success message
      Toast.fire({
        icon: "success",
        title: "Thank you for your message! We will get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Show error message
      Swal.fire({
        icon: "error",
        title: "Message Not Sent",
        text: "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="input-container">
              <input 
                type="text" 
                id="name" 
                required 
                placeholder=" " 
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-container">
              <input 
                type="text" 
                id="lastName" 
                required 
                placeholder=" " 
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="input-container">
              <input 
                type="number" 
                id="phone" 
                required 
                placeholder=" " 
                value={formData.phone}
                onChange={handleInputChange}
              />
              <label htmlFor="phone">Phone Number</label>
            </div>

            <div className="input-container">
              <input 
                type="email" 
                id="email" 
                required 
                placeholder=" " 
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-container textarea-container">
              <textarea 
                id="message" 
                required 
                rows={6} 
                placeholder=" "
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="message">Write a message...</label>
            </div>

            <button 
              type="submit" 
              id="btn-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'} | <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;