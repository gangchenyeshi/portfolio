import React from 'react';
import "./Work.css";
import { projects } from "./ProjectList";
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';


// npm packages
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

import Button from 'react-bootstrap/Button';
import Img from 'react-bootstrap/Image';

const Work = () => {
  return (

    <>
      <div id="parallex">
        <Parallax
          blur={{ min: -25, max: 15 }}
          bgImage={require('../../../assets/background/background1.webp')}
          bgImageAlt=""
          strength={-200}
        >
          <div className="work">
            <h1 className="text-center pt-5 ">Work</h1>
            <hr />
            <Container className="container-box rounded">
              <Fade bottom duration={500}>
                <Row xs={1} md={3} className="g-4" >
                  {projects.map((project, index) => (
                    <Col className="mt-4 mb-5">
                      <a className="link" href={project.link}>
                        <Card className="project-card focus">
                          <Card.Img variant="top" src={project.image} />
                          <Card.Body>
                            <Card.Title className="title "><h5 className="title-card">{project.title}</h5></Card.Title>
                            <Card.Text>
                              <p>{project.description}</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </a>
                    </Col>
                  ))}
                </Row>
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div >
    </>
  )
}

export default Work