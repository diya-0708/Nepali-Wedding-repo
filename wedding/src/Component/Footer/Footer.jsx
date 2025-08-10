// import React from 'react';
// import './Footer.css';
// const Footer = () => {
//   return (
//         <div className='footer'>
//     <p>@ 2024 Edusity. All rights reserved.</p>
//       <ul>
//         <li>Terms of Services</li>
//         <li>Privacy Policy</li>
//       </ul>
//     </div>
//   );
// }
// export default Footer;


import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are a team dedicated to providing the best  products and services to our customers.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /> Facebook</a>
            <a href="#"><FaTwitter /> Twitter</a>
            <a href="#"><FaInstagram /> Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © Copyright Amora Designs 2025. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
