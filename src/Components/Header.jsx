import React, { useState } from 'react'; 
import './header.css';
import { Link } from 'react-router-dom';
import { Home, Info, FolderKanban, Briefcase, Phone, MessageCircle } from 'lucide-react';

function Header() {
  // Add state for menu toggle
  const [menuOpen, setMenuOpen] = useState(true);
  
  // Toggle function for mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // WhatsApp chat function with proper formatting
  const openWhatsAppChat = () => {
    // Replace with your actual WhatsApp number (with country code, no + sign)
    const phoneNumber = "93765169854"; // Example: Afghanistan number (93 is country code)
    
    // Optional: Add a pre-filled message
    const message = "Hello! I'm interested in your services.";
    
    // Create the WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <header>
      <div className='main-header'>
        <div className="logo-section">
          <Link to="./"><img src="https://api.afghancosmos.com/media/images/logo/logo.png" alt="Logo" /></Link>
        </div>
        
        {/* Mobile menu toggle button */}
        <button 
          className={`mobile-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        ></button>
        
        <div className={`menu-bar-section ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/Home">
                <Home size={18} className="menu-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <Info size={18} className="menu-icon" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/Projects">
                <FolderKanban size={18} className="menu-icon" />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/Services">
                <Briefcase size={18} className="menu-icon" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <Phone size={18} className="menu-icon" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* WhatsApp Chat Button */}
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