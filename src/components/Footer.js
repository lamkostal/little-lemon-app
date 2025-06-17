import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Little Lemon</h3>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Doormat Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>678 Pisa Dr.</li>
              <li>Chicago, IL 60611</li>
              <li>(312) 593-2744</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Social Media Links</h4>
            <ul className="footer-links">
              <li><a href="#" aria-label="Facebook">Facebook</a></li>
              <li><a href="#" aria-label="Instagram">Instagram</a></li>
              <li><a href="#" aria-label="Twitter">Twitter</a></li>
              <li><a href="#" aria-label="YouTube">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;