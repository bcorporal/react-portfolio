import React from 'react';
import '../styles/Navbar.css';


// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Navbar({ currentPage, handlePageChange }) {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
    
      <a href="#about"
      onClick={() => handlePageChange('About')}
      className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About</a>

      <a href="#portfolio"
      onClick={() => handlePageChange('Portfolio')}
      className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
      >
        Portfolio
      </a>
      <a href="#resume"
      onClick={() => handlePageChange('Resume')}
      className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
      <a href="#contact"
      onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
    </nav>
  );
}

export default Navbar;
