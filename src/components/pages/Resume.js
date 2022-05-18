import React from 'react';
import '../../styles/Resume.css';
import resume4 from '../resume4.png'

export default function Resume() {
  return (

    <div class="container">
    <div class="row">
    <h1>Resume</h1>
      <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="card">
        <p>Download PDF Version <span><a href="https://drive.google.com/file/d/1qoqjun7qLv0rAZCIdlK8c5tpb-WSZggE/view">Resume</a></span></p>
        
        <img src={resume4} className="resume" alt ="Screenshot of resume" />

</div>
          </div>
          </div>
          </div>

  );
}
