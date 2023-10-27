import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey into the enchanting world of web development was
              nothing short of love at first code. My heart resonates with
              front-end web development, where I masterfully craft captivating
              user experiences using{" "}
              <b className="purple">JavaScript, React, and Next.js</b>. These
              tools aren't just lines of code; they're my artistic brushes on
              the canvas of the digital realm. Simultaneously, I don the hat of
              a graphics wizard, weaving visual magic to captivate users' hearts
              and minds with designs that transcend pixels.
              <br />
              <br />
              But my passion for technology extends beyond the visual realm. I'm
              an explorer in the digital frontier, constantly seeking
              opportunities to pioneer new web technologies and immerse myself
              in the intricacies of{" "}
              <b className="purple">AI and machine learning</b>. If you're
              looking for a web developer and designer who can breathe life into
              your digital dreams, I'm here, armed with a palette of code and
              design, ready to transform your vision into a vibrant, interactive
              reality. 💻🎨🌐
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DezMoon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MoongaDez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/desmond-chiku-moonga"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://web.facebook.com/desmond.chikumba.moonga/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
