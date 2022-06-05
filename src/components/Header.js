import React from 'react';
import '../styles/Header.css';
import Jumbotron from "./MOSH6.gif"

// Here we import the Header.css file to grant access to some additional classNames


// TODO: Create a styles object called "styles"

const Header = () => {
  return (
    <header className="bg-black text-dark mb-0 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <img style={{height:'auto',width:'100%'}} src={ Jumbotron } alt= "bc" />
      <h4>Brandon Corporal
      
      <p>Full Stack Developer</p> </h4>
       
        
      </div>
    </header>
  );
};


export default Header;
