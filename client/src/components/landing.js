import React from "react";
import { Grid, Cell } from "react-mdl";
import profilePic from "../assets/linkedin_profile_rounded.png";

function Landing() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src={profilePic}
            // alt="Avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>Front-End Developer</h1>
            <hr />
            <p>React | Typescript | Bootstrap | Javascript | React-Native</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="http://linkedin.com/in/idenhan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="http://github.com/idenhan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Blog */}
              <a
                href="https://idenhan.tistory.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-rss-square" aria-hidden="true" />
              </a>
              {/* Youtube */}
              <a
                href="https://www.youtube.com/watch?v=n6WaTObHRJM"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Landing;
