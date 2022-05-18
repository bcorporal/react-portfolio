import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark p-4 text-light">
      <div className="container text-center mb-5">
        <h4>
          Made with React
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
           
          </span>{' '}
          by Brandon Corporal
        </h4>
        <p>Hit me up <span><a href="mailto:bc@bcorporal.dev">bc@bcorporal.dev</a></span></p>
      </div>
    </footer>
  );
};

export default Footer;
