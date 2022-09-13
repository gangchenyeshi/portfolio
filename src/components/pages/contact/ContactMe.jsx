import React from 'react';
import "./ContactMe.css";


import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';

// npm packages
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

import Button from 'react-bootstrap/Button';
import Img from 'react-bootstrap/Image';
import Image from 'react-bootstrap/Image';

const ContactMe = () => {
  return (

    <>
      <div id="parallex">
        <Parallax
          blur={{ min: -25, max: 15 }}
          // bgImage={require('../../../assets/background/contact.jpg')}
          bgImageAlt=""
          strength={-200}
        >
          <div className="contact">
            <h1 className="text-center pt-5 ">CONTACT ME</h1>
            <hr />
            <Container className="container-box rounded">
              <Fade left opposite duration={500}>
                <Row className='justify-content-between my-3'>
                  <Col xs={12} className="contact-box">
                    {/* BUttons */}
                    <Row className="text-center pt-5 mt-5">
                      <Col>
                      <h4>Get in Touch with me!</h4>
                      </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center button-row">
                      <Col className="d-flex justify-content-center mb-5 flex-wrap">
                        <div className="d-grid d-md-block my-buttons">
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
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div >
    </>
    // <div id="contact">

    //   <Container className="container-box rounded">
    //     <Row>
    //       <Col>
    //       <h1 className="pt-5 text-center font-details-b pb-3">CONTACT ME</h1>
    //       </Col>
    //     </Row>
    //     <Row className="">
    //       <Col className="d-flex justify-content-center flex-wrap py-5">
    //       <div>
    //         <a href="mailto:yestsering@gmail.com" target="_blank">
    //           <Button className="p-2" variant="outline-primary">Let's talk</Button>
    //         </a>
    //       </div>
    //       <div>
    //         <a href="https://drive.google.com/file/d/1Dbx2Te0DNH0GtlnBaGF-uHuzy1XkNKnM/view" target="_blank" >
    //           <Button className="p-2" variant="outline-success">My CV</Button>
    //         </a>
    //       </div>
    //       <div>
    //         <a href="https://profile.ironhack.com/yeshi-tsering-gangchen" target="_blank" >
    //           <Button className="p-2" variant="outline-info">Portfolio</Button>
    //         </a>
    //       </div>
    //       <div>
    //         <a href="https://www.linkedin.com/in/gangchen-yeshi-tsering/" target="_blank" >
    //           <Button className="p-2" variant="outline-dark">LinkedIn</Button>
    //         </a>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
    // </div >
  )
}

export default ContactMe