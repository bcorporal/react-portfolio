import React from 'react';
import '../../styles/About.css';
import bc from '../../components/bc.png';

export default function About() {
  return (
    <div class="container">
    <div class="row mb-5 mx-auto">
    <div class="pjheader">
    <h8>ABOUT</h8>
    </div>
      <div class="col-md-4 p-1">
      <div class= "">
      <div class="row mb-5 mx-auto">
       <img src={bc} className="bc" alt ="brandons profile pic" />
       <div class="card-body">
       <div class="btn-group btn-group-sm btn-group-vertical align-items-center" role="group" aria-label="Basic example">
       <a href="https://github.com/bcorporal" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm m-1">Github</a>
       <a href="https://www.linkedin.com/in/brandon-corporal-65742822b" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm m-1 ">Linkedin</a>
       <a href="https://instagram.com/djbran" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm m-1">Instagram</a>
       <a href="https://twitter.com/djbran" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm m-1">Twitter</a>
     </div>
     </div>
     </div>
     </div>
     </div>
     <div class="col-md-8 p-1 ">
      <p class="about">My name is Brandon Corporal, I am an international tour DJ & producer and I have been in the music/entertainment industry for the past 10 years. I love tech and creating anything that comes to mind. I am a full stack web developer and graduated from the University of Pennsylvania's coding bootcamp May 2022. I am very detailed, Specializing in the Frontend, UX/UI, but also skilled in backend land using NodeJs, Mysql, MongoDB & ExpressJs, Insomnia working with servers and api's. Frontend frameworks I prefer to work with React and Bootstrap. I am very skilled using Adobe Photoshop as well.
      I can develop fully functioning front and backend applications, take a look at some of my project repos on my profile. Currently I am learning Python.</p>
    </div>
     </div>  
     </div>
 

  );
  
}
