import React from 'react';
import '../styles/Navbar.css';


// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Navbar({ currentPage, handlePageChange }) {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar navbar-expand-sm bg-black justify-center align-center">
    <ul className="navbar-nav">
    
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
      >Projects</a></li>

      <li className='nav-item'>
      <a href="https://drive.google.com/file/d/1qoqjun7qLv0rAZCIdlK8c5tpb-WSZggE/view" target="_blank" rel="noopener noreferrer"
      onClick={() => handlePageChange('Resume')}
      className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume</a></li>

      <li className='nav-item'>
      <a href="#contact"
      onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</a></li>
          
          </ul>
          </nav>
  );
}

export default Navbar;




