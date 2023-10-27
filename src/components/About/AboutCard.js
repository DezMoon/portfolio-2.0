import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Desmond Moonga </span>
            from <span className="purple"> Lusaka, Zambia 🇿🇲.</span>
            <br /> I have been in love with tech from a very young age which led
            me to pursue and obtain a bachelor's degree in Information
            Technology.
            <br />
            <br />
            I have over 5+ years of expirence creating websites and striking
            visuals that bring ideas to life.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any sufficiently advanced technology is indistinguishable from
            magic."{" "}
          </p>
          <footer className="blockquote-footer">Arthur C. Clarke</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
