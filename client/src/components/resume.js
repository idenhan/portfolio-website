import React from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";
import profilePic from "../assets/linkedin_profile_rounded.png";

function Resume() {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img src={profilePic} style={{ height: "180px" }} />
          </div>
          <h2 style={{ paddingTop: "1em" }}>Iden Han</h2>
          <h4 style={{ color: "grey" }}>Frontend Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            I believe in that environmental protection can be done through
            technologies. I’m passionate about learning the latest and greatest
            technologies whether that’s the frontend or backend. I enjoy
            creating sleek and responsive web sites in addition to being user
            friendly. I love working in fast-paced environments. With highly
            diverse work experiences I excel at collaborating with teams of
            different knowledge sets. A versatile engineer with interests in
            Software Engineering and Machine Automation. Adaptable and
            self-motivated learner. Interested in environmental and new
            programming technologies, and continuous self-improvement. I am
            currently open to opportunities within the software engineering
            discipline and if you feel like we would be a great match, I’d love
            to hear from you!
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>Mapo-gu, Seoul, Republic of Korea</p>
          <h5>Phone</h5>
          <p>(010) 6864 - 5280</p>
          <h5>Email</h5>
          <p>idenhan129@gmail.com</p>
          <h6>Website</h6>
          <p>idenhan.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Skills</h2>
          <Skills skill="React" progress={80} />
          <Skills skill="BootStrap" progress={75} />
          <Skills skill="Typescript" progress={60} />
          <Skills skill="Javascript" progress={65} />
          <Skills skill="React-Native" progress={65} />
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
