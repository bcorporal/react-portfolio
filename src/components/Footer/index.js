import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-black p-4 text-light">
      <div className="container text-center mb-5">
        <h4>
        
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
           
          </span>{' '}
          
        </h4>
        <p> <span><a href="mailto:bc@bcorporal.dev">bc@bcorporal.dev 2022</a></span></p>
        <p><span><a href="https://www.linkedin.com/in/brandon-corporal-65742822b">LinkedIn</a></span></p>
            <p><span><a href="https://github.com/bcorporal">Github</a></span></p>
      </div>
    </footer>
  );
};

export default Footer;
