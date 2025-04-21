import React from "react";
import { useState } from "react";
import Swal from "sweetalert2"; // ✅ import Swal
import "./footer.css";

function Footer() {
  const subscribeBtnClick = () => {
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
      title: "Thank you for subscribing!"
    });
  };
  

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
          <p><i className="fa-solid fa-envelope"></i> Email:{" "}
            <a href="mailto:info@afghancosmos.com">info@afghancosmos.com</a>
          </p>
          <p><i className="fa-solid fa-phone"></i> Phone: +937 651 6854</p>
          <p><i className="fa-solid fa-location-dot"></i> Address: Qala-e-Fatullah, Kabul, Afghanistan</p>
        </div>
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button onClick={subscribeBtnClick}>Subscribe</button>
          </div>
          <div className="social-media">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Afghan Cosmos. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
