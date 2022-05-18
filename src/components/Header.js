import React from 'react';
import '../styles/Header.css';


// Here we import the Header.css file to grant access to some additional classNames


// TODO: Create a styles object called "styles"

const Header = () => {
  return (
    <header className="bg-white text-dark mb-1 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="bc">Brandon Corporal</h1>
        <p className="m-0">React Portfolio</p>
      </div>
    </header>
  );
};


export default Header;
