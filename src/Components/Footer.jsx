import { useState } from "react";
import "./footer.css"
import React from "react"

function Footer() {

  const subscribeBtnClick = () => {
    alert("Thank you for Subscribe you.")
  }
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/home">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/Jobs">Jobs</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <i className="fa-solid fa-envelope"></i> Email:{" "}
            <a href="mailto:info@afghancosmos.com">info@afghancosmos.com</a>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> Phone: +937 651 6854
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> Address: Qala-e-Fatullah, Kabul, Afghanistan
          </p>
        </div>
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />


            <button onClick={subscribeBtnClick}>Subscribe</button>
            {/* {
              alert == "done" ? alert("yes")
                : alert("not")
            } */}

          </div>
          <div className="social-media">
            <a href="mailto:info@afghancosmos.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="mailto:info@afghancosmos.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="mailto:info@afghancosmos.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:info@afghancosmos.com">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Afghan Cosmos. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

