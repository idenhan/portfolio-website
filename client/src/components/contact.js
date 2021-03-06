import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Iden Han</h2>
          <img
            src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </Cell>

        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontsize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-phone" aria-hidden="true" />
                  (010) 6864 - 5280
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontsize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  idenhan129@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontsize: "30px", fontFamily: "Anton" }}
                >
                  <i className="xi-kakaotalk" aria-hidden="true" />
                  mykakaotalkID
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
