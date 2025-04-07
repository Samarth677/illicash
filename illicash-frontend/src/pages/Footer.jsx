import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Community Guidelines</a></li>
            <li><a href="#">Privacy & Terms</a></li>
            <li><a href="#">Sales Solutions</a></li>
            <li><a href="#">Safety Center</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Accessibility</h4>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Talent Solutions</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Developers</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Business Solutions</h4>
          <ul>
            <li><a href="#">Talent</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Learning</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 YourJobSite Corporation</p>
      </div>
    </footer>
  );
};

export default Footer;