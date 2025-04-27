import React, { useState } from 'react'; 
import './header.css';
import { Link } from 'react-router-dom';
import { Home, Info, FolderKanban, Briefcase, Phone, MessageCircle } from 'lucide-react';
import Swal from 'sweetalert2';

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toast instance
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    border: " 2px solid green",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const openWhatsAppChat = () => {
    // Fire the toast first
    Toast.fire({
      icon: "success",
      title: "Opening WhatsApp chat..."
    });

    // Delay the actual WhatsApp redirection to let the alert show up
    setTimeout(() => {
      const message = "Hello! I'm interested in your services.";
      const whatsappUrl = `https://wa.me/93765169854?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }, 1000); // Adjust delay if needed
  };

  return (
    <header>
      <div className='main-header'>
        <div className="logo-section">
          <Link to="./">
            <img src="https://api.afghancosmos.com/media/images/logo/logo.png" alt="Logo" />
          </Link>
        </div>

        <button 
          className={`mobile-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        ></button>

        <div className={`menu-bar-section ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/home"><Home size={18} className="menu-icon" /><span>Home</span></Link></li>
            <li><Link to="/about"><Info size={18} className="menu-icon" /><span>About</span></Link></li>
            <li><Link to="/projects"><FolderKanban size={18} className="menu-icon" /><span>Projects</span></Link></li>
            <li><Link to="/services"><Briefcase size={18} className="menu-icon" /><span>Services</span></Link></li>
            <li><Link to="/contact"><Phone size={18} className="menu-icon" /><span>Contact</span></Link></li>
          </ul>
        </div>

        <div className="whatsapp-button-container">
          <button 
            className="whatsapp-button" 
            onClick={openWhatsAppChat}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} className="whatsapp-icon" />
            <span>Chat with us</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
