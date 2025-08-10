

// 

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menuicon from '../../assets/menu_icon.svg';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <a href='/' className='logo'>𝒜𝐸𝓋ℯ𝓃𝓉</a>
     
      {menuOpen && (
  <div
    className="close-icon"
    onClick={() => setMenuOpen(false)}
  >
    X
  </div>
)}


        <ul className={`nav-links ${menuOpen ? 'open' : ''} ${sticky ? 'scrolled' : ''}`}>

       <li><Link to='/' onClick={closeMenu}>Home</Link></li>
       <li><Link to='/about' onClick={closeMenu}>About</Link></li>
        <li><Link to='services' smooth={true} offset={0} duration={500} onClick={closeMenu}>Services</Link></li>
        <li><Link to='gallery' smooth={true} offset={0} duration={500} onClick={closeMenu}>Gallery</Link></li>
        <li><Link to='blog' smooth={true} offset={0} duration={500} onClick={closeMenu}>Blog</Link></li>
        <li><Link to='booking' smooth={true} offset={0} duration={500} onClick={closeMenu}>Booking</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} onClick={closeMenu}>Contact</Link></li>
      </ul>

      <img 
        src={menuicon}
        className='menu-icon'
        alt='menu icon'
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;

