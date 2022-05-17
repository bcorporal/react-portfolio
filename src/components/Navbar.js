import React from 'react';
import '../styles/Navbar.css';


// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Navbar({ currentPage, handlePageChange }) {
  // TODO: Add a style attribute to `nav`
  return (
    <ul className="nav nav-bar">
    <li className='nav-item'>
    <a href="#Home"
    onClick={() => handlePageChange('Home')}
    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >Home</a></li>

      <li className='nav-item'>
      <a href="#about"
      onClick={() => handlePageChange('About')}
      className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About</a></li>

      <li className='nav-item'>
      <a href="#portfolio"
      onClick={() => handlePageChange('Portfolio')}
      className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
      >
        Portfolio
      </a></li>

      <li className='nav-item'>
      <a href="#resume"
      onClick={() => handlePageChange('Resume')}
      className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a></li>
      <li className='nav-item'>
      <a href="#contact"
      onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
          </li>
          </ul>
  );
}

export default Navbar;




