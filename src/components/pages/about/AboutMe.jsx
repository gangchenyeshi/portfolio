import React from 'react';
import "../about/AboutMe.css"
import Profile from '../../../assets/aboutme/yeshi.jpeg';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const AboutMe = () => {
  return (
    <>
      <div id="parallex">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require('../../../assets/background/background.webp')}
          bgImageAlt=""
          strength={-200}
        >


          <div className="about">

            <h1 className="pt-5 text-center pb-2">About Me</h1>
            <hr />
            <Container className="container-box rounded">
              <Fade left opposite duration={500}>
                <Row className='justify-content-between my-3'>
                  <Col xs={12} md={6} className="img-box">
                    <Row className="justify-content-center ">
                      <Image src={Profile} className="profile" alt="Profile_Photo" fluid />
                    </Row>

                  </Col>
                  <Col xs={12} md={6} className="descriptions">
                    <Row className="">
                      <p className="p-4">I am a Junior UI Designer with a web development background and 7 years of experience in teaching IT in school, I discovered UX/UI during my first web developer internship; my curiosity for UI design made me decide to change my career. </p>
                    </Row>
                    {/* BUttons */}
                    <Row >
                      <Col className="d-flex justify-content-center mb-3 flex-wrap">
                        <div className="d-grid gap-2 d-md-block my-buttons">
                          <a href="mailto:yestsering@gmail.com" target="_blank">
                            <Button className="p-1" variant="outline-primary">Let's talk</Button>
                          </a>
                          <a href="https://drive.google.com/file/d/12j0257Cj5cCBju5xw6MNtHr-HM_yDwZb/view?usp=sharing" target="_blank" >
                            <Button className="p-1" variant="outline-success">My CV</Button>
                          </a>
                          <a href="https://profile.ironhack.com/yeshi-tsering-gangchen" target="_blank" >
                            <Button className="p-1" variant="outline-info">Portfolio</Button>
                          </a>
                          <a href="https://www.linkedin.com/in/gangchen-yeshi-tsering/" target="_blank" >
                            <Button className="p-1" variant="outline-dark">LinkedIn</Button>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                </Row>
                <Row className="mb-5">
                  <Col xs={12} md={12} className="descriptions">
                    <Row className="justify-content-between mx-1 pt-5 pb-4">
                      <Col xs={12} md={6} >
                        <Row >
                          <p> 🤓 My Career Change
                            Full-stack web developer at Konexio, Paris.  During the internship, I got an opportunity to worked on an Individual project from scratch then I discovered  UX/UI Design, and since then it was an eye-opening experience and made me realize that I wanted to improve my skills in this field.
                          </p >
                          <p>So I decided to attend IRONHACK UX/UI Design Bootcamp and  I led 5 projects following the Design Thinking approach during the Bootcamp</p>
                          <p>Thanks to this, I can understand the complete front-end process and remain efficient for the design and tech team as well.</p>
                        </Row>
                      </Col>
                      <Col xs={12} md={6} >
                        <Row>
                          <p>💻DIGITAL

                            UX/UI: End-to-end Design Thinking, User Research, Interaction design, User Flow, Low/Mid/High fidelity wireframing, Prototyping, Usability & Desirability testing.</p>
                          <p>Web development: I have a very good understanding of HTML, CSS, and JavaScript which makes it easy for me to exchange with developers.</p>
                          <p>🛠 My tools: Figma, Photoshop, InDesign, Miro, Trello, Vs Code.</p>
                        </Row>
                      </Col>
                    </Row>
                    <Row className='mx-1'>
                      <p>I want to continue to implement my creativity in the service of a benevolent team that can in exchange allow me to progress and grow in the world of tech and design.</p>

                    </Row>
                    <Row className='mx-1'>
                      <p>I'm always looking to grow my personal and professional network. Feel free to connect via LinkedIn or contact me directly by e-mail</p>
                    </Row>
                  </Col>
                </Row>
              </Fade>
            </Container>

          </div>

        </Parallax>
      </div>
    </>

  )
}

export default AboutMe