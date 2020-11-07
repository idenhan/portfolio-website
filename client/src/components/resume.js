import React from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";

function Resume() {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
              alt="avatar"
              style={{ height: "200px" }}
            />
          </div>

          <h2 style={{ paddingTop: "2em" }}>Iden Han</h2>
          <h4 style={{ color: "grey" }}>Programmer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>101-ho, 28, World Cup-ro 19-gil, Mapo-gu, Seoul, Republic of Korea</p>
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
          <Skills skill="javascript" progress={80} />
          <Skills skill="HTML/CSS" progress={75} />
          <Skills skill="NodeJS" progress={60} />
          <Skills skill="React" progress={65} />
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
