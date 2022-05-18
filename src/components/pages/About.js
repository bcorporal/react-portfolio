import React from 'react';
import '../../styles/About.css';
import bc from '../../components/bc.png';

export default function About() {
  return (
    <section id="about">
    <article>
      <h1>About Me</h1>
      <section id="image2">   
 <img id="image2" src={bc} alt ="Screenshot of profilepic"/></section>
      <p>
      Hello my name is Brandon Corporal here this is my React developer portfolio. I am currently a student at Penn Lps Coding Bootcamp and graduating May 2022.
      Currently in the final stages learning backend development. I can develop fully functioning front and backend applications, take a look at some of my project repos on my profile. I plan to learn Python after bootcamp.
      </p>
      
    </article>
    </section>

  );
  
}

