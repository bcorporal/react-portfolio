import React from 'react';
import fitness from '../fitness.gif'
import nba from '../nba.gif'
import brain from '../brain.gif'
import password from '../password.gif'
import jate from '../jate.gif'
import '../../styles/portfolio.css';


export default function Portfolio() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="card">
        <img src={fitness} className="fitness" alt ="Screenshot of fitness app" />
          <div class="card-block">
            <h4 class="card-title">Fitness Pal</h4>
            <p class="card-text">Fitness Tracker app with the ability to create a login/profile for logging workouts on the go.</p>
          </div>
          <div class="card-footer">
          <a href="https://github.com/bcorporal/Fitness-Pal" >GITHUB LINK</a>

          </div>
          </div>
          </div>

          <div class="col-xs-12 col-md-12 col-lg-12">
      <div class="card">
      <img src={nba} className="nba" alt ="Screenshot of nba app" />
        <div class="card-block">
          <h4 class="card-title">NBA Wizard</h4>
          <p class="card-text">NBA game/statistic tracking application that pulls stats and latest games for your favorite NBA team.</p>
        </div>
        <div class="card-footer">
        <a href="https://github.com/bcorporal/nba-wizard" >GITHUB LINK</a>
        </div>
      </div>
    </div>

    <div class="clearfix hidden-sm-down hidden-lg-up"></div>
    <div class="col-xs-12 col-md-12 col-lg-12">
      <div class="card">
      <img src={brain} className="brain" alt ="Screenshot of brain games app" />
        <div class="card-block">
          <h4 class="card-title">Brain Games</h4>
          <p class="card-text">Timed Quiz application where you have 30 seconds to answer trick questions. Incorrect answers takes off 5 seconds from the clock, correct answers adds 7 seconds. Ability to save scores and initials…</p>
        </div>
        <div class="card-footer">
        <a href="https://github.com/bcorporal/brain-games" >GITHUB LINK</a>

        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-12">
      <div class="card">
      <img src={password} className="password" alt ="Screenshot of Password Generator app" />
        <div class="card-block">
          <h4 class="card-title">Password Generator</h4>
          <p class="card-text">Need to generate a random password? I created this simple application that allows you to generate a password based on the criteria selected by the user.</p>
        </div>
        <div class="card-footer">
        <a href="https://github.com/bcorporal/password-generator" >GITHUB LINK</a>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-12">
      <div class="card">
      <img src={jate} className="jate" alt ="Screenshot of Text editor Generator app" />

        <div class="card-block">
          <h4 class="card-title">JATE Text Editor</h4>
          <p class="card-text">Text-Editor is a Full Stack single-page application that meets PWA criteria and runs in the browser. Creates notes or code snippets with or without an internet connection for later use.</p>
        </div>
        <div class="card-footer">
        <a href="https://github.com/bcorporal/text-editor" >GITHUB LINK</a>
        
        </div>
      </div>
    </div>
  </div>
</div>




    
  );
}
