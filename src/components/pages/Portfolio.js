import React from "react";
import fitness from "../fitness.gif";
import paw from "../pp.gif";
import nba from "../nba.gif";
import brain2 from "../brain2.gif";
import password from "../password.gif";
import jate from "../jate.gif";
import social from "../social.gif";
import note from "../notebuddy.gif";
import tracker from "../tracker.gif";
import "../../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div class="container">
    <div class="pjheader">
    <h8>PROJECTS</h8>
    </div>
 
   
      <div class="row mb-5 mx-auto">
        <div class="col-md-4">
          <div class="card">
            <img
              src={fitness}
              className="fitness"
              alt="Screenshot of fitness app"/>
            <div class="card-body">
              <h5 class="card-title">Fitness Pal</h5>
              <p class="card-text">
                Fitness Tracker app with the ability to create a login/profile
                for logging workouts on the go.
              </p>
              <h7>Technologies used:</h7>
              <div class="tech">
              <p>Handlebars, MySQL, Express.js, Bulma, Node.js, Sequelize</p></div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/Fitness-Pal"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
                <div class="demo">
                  <a
                    href="https://pacific-wave-33969.herokuapp.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black btn-sm m-0"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img src={paw} className="paw" alt="Screenshot of paw patroller" />

            <div class="card-body">
              <h5 class="card-title">Paw Patroller</h5>
              <p class="card-text">
                Dog friendly business finder. Search by location, Create a user
                profile to save your favorite businesses.
              </p>
              <h7>Technologies used</h7>
              <div class="tech">
              <p>React.js, GraphQL, Apollo, Bootstrap</p>
              </div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/paw-patroller"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
                <div class="demo">
                  <a
                    href="https://stormy-gorge-40792.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black btn-sm m-0"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src={brain2}
              className="fitness"
              alt="Screenshot of fitness app"
            />

            <div class="card-body">
              <h5 class="card-title">Brain Games</h5>
              <p class="card-text">
                Timed Quiz application where you have 30 seconds to answer trick
                questions. Incorrect answers takes off 5 seconds from the clock.{" "}
              </p>
              <h7>Technologies used:</h7>
              <div class="tech">
              <p>Javascript, Html, Css</p>
              </div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/brain-games"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
                <div class="demo">
                  <a
                    href="https://bcorporal.github.io/brain-games/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black btn-sm m-0"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src={password}
              className="password"
              alt="Screenshot of Password Generator"
            />

            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">
                Need to generate a random password? I created this simple
                application that allows you to generate a password based on the
                criteria selected by the user.
              </p>
              <h7>Technologies used</h7>
              <div class="tech"><p>
              Javascript, Html, Css</p></div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/password-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
                <div class="demo">
                  <a
                    href="https://bcorporal.github.io/password-generator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black btn-sm m-0"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img src={nba} className="nba" alt="Screenshot of nba wizard" />

            <div class="card-body">
              <h5 class="card-title">NBA Wizard</h5>
              <p class="card-text">
                NBA game/statistic tracking application that pulls stats and
                latest games for your favorite NBA team.
              </p>
              <h7>Technologies used:</h7>
              <div class="tech">
              <p>Javascript, Html, Css, Bulma, 3rd party Api.</p>
              </div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/nba-wizard"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
                <div class="demo">
                  <a
                    href="https://bcorporal.github.io/nba-wizard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black btn-sm m-0"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src={jate}
              className="Jate"
              alt="Screenshot of Jate text editor app"
            />

            <div class="card-body">
              <h5 class="card-title">Text Editor</h5>
              <p class="card-text">
                Creates notes or code snippets with or without an internet
                connection for later use. Meets PWA criteria.
              </p>
              <h7>Technologies used</h7>
              <div class="tech">
              <p>Javascript, Node.js, Express.js, Webpack, Html, Css, PWA</p></div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/text-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
                <div class="demo">
                  <a
                    href="https://pure-dusk-36118.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black btn-sm m-0"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src={social}
              className="social"
              alt="Screenshot of social network api"
            />

            <div class="card-body">
              <h5 class="card-title">Social Network API</h5>
              <p class="card-text">
                API for a social network web application where users can share
                their thoughts, react to friends’ thoughts, and create a friend
                list. Full CRUD
              </p>
              <h7>Technologies used</h7>
              <div class="tech">
                <p>Javascript, Node.js, Express.js, MongoDb, Mongoose, NoSQL, Insomnia</p></div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/social-network-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src={note}
              className="note"
              alt="Screenshot of note buddy app"
            />

            <div class="card-body">
              <h5 class="card-title">Note Buddy</h5>
              <p class="card-text">
                About Note taking application that allows you to keep track of
                tasks or organize thoughts on the go. You can save/delete nots
                as well.
              </p>
              <h7>Technologies used</h7>
              <div class="tech">
                <p>
                  Html, Css, Javascript, Node.js, Express.js, UUID, Heroku{" "}
                </p>
              </div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/note-buddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
                <div class="demo">
                  <a
                    href="https://fierce-dawn-03721.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black btn-sm m-0"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src={tracker}
              className="employee"
              alt="Screenshot of fitness app"
            />

            <div class="card-body">
              <h5 class="card-title">Employee tracker</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h7>Technologies used</h7>
              <div class="tech"><p>Javascript, MySQL, Node.js, Inquirer.js</p></div>
              <div class="buttons">
                <div class="repo">
                  <a
                    href="https://github.com/bcorporal/Employee-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-black outline-dark btn-sm m-0"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
