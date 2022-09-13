import React from 'react';
import "./Ecommerce.css";

import {
  icons_Ecommerce,
  clickncollect,
  addtocard,
  concepttesting,
  icons_ideation,
  users_story,
  midfi,
  hifi,
} from "./Library";


//Asset
import Hero_img from "../../../../assets/projects/e-commerce/hero1.png"
import Colors from "../../../../assets/projects/e-commerce/colors.png";
import Chart from "../../../../assets/projects/e-commerce/researchchart.png";
import Persona from "../../../../assets/projects/e-commerce/persona.png";
import Competitive_Analysis from "../../../../assets/projects/e-commerce/competitors.png";
import Moodboard from "../../../../assets/projects/e-commerce/moodboard.png";
import Typography from "../../../../assets/projects/e-commerce/typography.svg";
import Colors_palate from "../../../../assets/projects/e-commerce/colors.svg";
import Icons from "../../../../assets/projects/e-commerce/icons.svg";
import Prototype from "../../../../assets/projects/e-commerce/prototype.png";
import Thanks from "../../../../assets/projects/e-commerce/thanks.webp"


import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';

import Container from 'react-bootstrap/Container';


const ECommerce = () => {
  return (
    <>

      <Container className="container-box rounded big-container">
        <div id="parallex">
          <Parallax
            blur={{ min: -15, max: 15 }}
            // bgImage={require('../../../assets/background/background.webp')}
            bgImageAlt=""
            strength={-200}
          >
            <Fade bottom opposite duration={500}>
              {/* hero section */}
              <div className="e-commerce-container">
                <div className="container">
                  <div className="row">
                    <div className="col">

                      <div className="row justify-content-around ">
                        <div className="col-12 colors">
                          <img src={Colors} className="mx-auto d-block img-fluid colors-bar" alt="Colors" />
                        </div>
                      </div>
                      <div className="row justify-content-around align-items-center hero">
                        <div className="col-sm-12 col-lg-4">
                          <img src={Hero_img} className="mx-auto d-block img-fluid" alt="Hero image" />
                        </div>

                        <div className="col-sm-12 col-lg-7 hero-text">
                          <h1>E-commerce for Vintage Store</h1>
                          <h1>UX/UI Challenge</h1>
                          <p className="p-5">Add to cart & Check-out Process for Bottega Vintage store</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="intro-container">
                <div className="container">
                  <div className="row ">
                    <div className="col">
                      <div className="row justify-content-center mt-5">
                        <div className='col-12 title'>
                          <h2 className="text-center">Project Introduction</h2>
                          <h3 className="text-center backtext">Project Introduction</h3>
                        </div>
                      </div>

                      {/* content & objective */}
                      <div className="row justify-content-between intro">
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading ">Context</h4>
                              <p>Because of the extreme situation COVID-19, local shops and practitioners are seeing a drop in demand for their services and products. This can have a negative impact on local economies as well as many families. At the same time, we see a growing trend to support local businesses in many communities.</p>
                              <p>Online presence is a good way to hijack the issue. More and more professionals are on the verge of their digital transition.</p>

                              <p>Let’s help local shops and professionals improve their online presence to be more competitive in today’s market.</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading ">Objective</h4>
                              <p>Our goal was to provide a prototype of her future e-commerce platform which meets her business goals and reflects her personality. This solution would help her share her passion and sell her second-hand clothing on a wider level.</p>
                              <p>It was to elemlinate any confusion the shopper might have during add to card and a transaction, aiming to making each steps as clear as possible, given how much information is presented to the user.</p>
                            </div>
                          </div>
                        </div>

                        {/* about project */}
                        <div className="row justify-content-between about-project">
                          <div className='col-12'>
                            <div className='row justify-content-between'>
                              <h4 className="sub-heading ">About</h4>
                            </div>
                          </div>
                          <div className='col-12'>
                            <div className='row justify-content-between'>
                              <div className="col-2">
                                <p>Client:</p>
                              </div>
                              <div className="col-10">
                                <p>Bootega concept store -Paris</p>
                              </div>
                            </div>
                          </div>

                          <div className='col-12'>
                            <div className='row justify-content-between'>
                              <div className="col-2">
                                <p>Team:</p>
                              </div>
                              <div className="col-10">
                                <p>Group Project with 4 people</p>
                              </div>
                            </div>
                          </div>

                          <div className='col-12'>
                            <div className='row justify-content-between'>
                              <div className="col-2">
                                <p>Role:</p>
                              </div>
                              <div className="col-10">
                                <p>UX/UI Designer</p>
                              </div>
                            </div>
                          </div>

                          <div className='col-12'>
                            <div className='row justify-content-between'>
                              <div className="col-2">
                                <p>Durations:</p>
                              </div>
                              <div className="col-10">
                                <p>10 days</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-12'>
                            <div className='row justify-content-between '>
                              <div className="col-2">
                                <p>Tools:</p>
                              </div>
                              <div className="col-10">
                                <p>Figma, Trello, Miro, & PPT</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* process */}
              <div className="process-container-ecommerce">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="row justify-content-center mt-3">
                        <div className='col-12 title'>
                          <h2 className="text-center">Process</h2>
                          <h3 className="text-center backtext">Process</h3>
                        </div>
                      </div>

                      {/* content & objective */}
                      <div className="row row-cols-3 row-cols-md-6 g-6 mb-5">
                        {icons_Ecommerce.map((icon, index) => (

                          <div className="col">
                            <div className="card align-items-center pt-3 mt-3">
                              <img src={icon.image} className="card-img-icon img-fluid" alt="..." />
                              <div className="card-body">
                                <h6 className="card-title">{icon.title}</h6>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market research */}
              <div className="market-container">
                <div className="container">
                  <div className="row ">
                    <div className="col">
                      <div className="row justify-content-center mt-5 mb-4">
                        <div className='col-12 title'>
                          <h2 className="text-center">MARKET RESEARCH</h2>
                          <h3 className="text-center backtext">MARKET RESEARCH</h3>
                        </div>
                      </div>

                      {/* Secondary Research */}
                      <div className="row justify-content-between intro">
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading mt-0">Secondary Research</h4>
                              <p>As we wanted to know the market for the second hand e-shop. We found out that</p>
                              <p>Vinted has not overshadowed the second hand industry. On the contrary, this site has helped to spread second-hand culture.</p>

                              <p>Second-hand fashion is everywhere today: after a few pioneers paved the way, mainstream brands like Kiabi and Camaïeu are getting started.</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <img src={Chart} className="img-fluid" alt="chart" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="row justify-content-md-center mt-5 mb-2">
                        <div className='col-sm-10 col-lg-7'>
                          <h5 className="text-center quote">“While the buying power is reducing due to inflation, French people are rushing to online second-hand market and apps like Vinted.”</h5>
                        </div>
                      </div>

                      {/* Who is the User? */}
                      <div className="row justify-content-between">
                        <div className='col-12'>
                          <div className='row justify-content-between'>
                            <h4 className="sub-heading ">Who is the User?</h4>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className='row justify-content-between'>
                            <div className="col-12">
                              <p>The user has been identified as anyone between the age 25-37 with baisc technical ability that are comportable using a smart phone.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SURVEY & INTERVIEWS */}
              <div className="interview-container">
                <div className="container mt-5 mb-5">
                  <div className="row ">
                    <div className="col">
                      <div className="row justify-content-center mt-5 mb-4">
                        <div className='col-12 title'>
                          <h2 className="text-center">Survey & Interviews</h2>
                          <h3 className="text-center backtext">Survey & Interviews</h3>
                        </div>
                      </div>

                      {/* content & objective */}
                      <div className="row justify-content-between mb-4">
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading ">SMU Interview</h4>
                              <ul>
                                <li>They are expected to be more responsible and sustainable fashion.</li>
                                <li>Lovers in vintage and second-hand antiques.</li>
                                <li>They have a close collaboration with creators in Upcycling</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading ">Survey & Interview</h4>
                              <ul>
                                <li>50% of people also shop second hand clothing</li>
                                <li>Most people buy for themselves</li>
                                <li>The reason why they buy is for a unique style </li>
                                <li>But also budget </li>
                                <li>Environment plays a role</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persona */}
              <div className="problem-container">
                <div className="container">
                  <div className="row ">
                    <div className="col">
                      <div className="row justify-content-between mb-4">
                        <div className='col-12 title'>
                          <h2 className="text-center">Problems</h2>
                          <h3 className="text-center backtext">Problems</h3>
                        </div>
                      </div>

                      {/* content & objective */}
                      <div className="row justify-content-between align-items-center mb-4">
                        <div className='col-sm-10 col-lg-6'>
                          <h4 className="sub-heading ">User Personas</h4>
                          <p>To Undesrstand users pain points and what there were strugling  with the most during their  quest  to prepaare the meal plan </p>
                        </div>
                        <div className='col-sm-10 col-lg-6'>
                          <img src={Persona} className="img-fluid" alt="chart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem statement */}
              <div className="problem-statement-container">
                <div className="container">
                  <div className="row ">
                    <div className="col">
                      <div className="row justify-content-center  mt-3 mb-3">
                        <div className='col-12 title'>
                          <hr />
                          <h2 className="text-center">Problem Statement</h2>
                          <h3 className="text-center backtext">Problem Statement</h3>
                        </div>
                      </div>

                      {/* content & objective */}
                      <div className="row justify-content-between">
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading ">Users</h4>
                              <p>“The environmentally conscious consumer wants to shop second-hand clothing for a unique style but needs to be able to do so online because of the lack of time and accessibility to go into the store in person”.</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading ">Business</h4>
                              <p>“The Bottega Concept Store wants to move into the digital world to be more up to date with today’s ways and offer its customers more possibilities to shop and enjoy the store”.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* solution */}
              <div className="ideation-container">
                <div className="container  mt-5 mb-5">
                  <div className="row">
                    <div className="col mb-5">
                      <div className="row justify-content-center">
                        <div className='col-12 title mt-5 mb-4'>
                          <h2 className="text-center">Solution</h2>
                          <h3 className="text-center backtext">Solution</h3>
                        </div>
                      </div>

                      {/* ideation */}
                      <div className="row justify-content-between mb-1">
                        <div className='col-12'>
                          <div className='row justify-content-between'>
                            <div className='col-12'>
                              <h4 className="sub-heading ideation">ideation</h4>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="row row-cols-3 row-cols-md-6 justify-content-center ">
                        {icons_ideation.map((idea, index) => (
                          <div className="col ">
                            <div className="card align-items-center pt-3 mt-1">
                              <img src={idea.image} className="card-img-icon img-fluid" alt="..." />
                              <div className="card-body">
                                <h6 className="card-title">{idea.title}</h6>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* competitor */}
              <div className="competitor-container">
                <div className="container">
                  <div className="row ">
                    <div className="col">
                      <div className="row justify-content-between mb-4">
                        <div className='col-12 title'>
                          <h2 className="text-center">competitive analysis</h2>
                          <h3 className="text-center backtext">competitive analysis</h3>
                        </div>
                      </div>

                      {/* competitor*/}
                      <div className="row justify-content-between align-items-center mb-4">
                        <div className='col-sm-10 col-lg-6'>
                          <h4 className="sub-heading ">Visual competitive analysis</h4>
                          <p>We decided to look at the most popular online vintage store to analyze their visual aspects to strategically build our visual elements for site. In addition, we verified the features they have, to plan our next steps for site.</p>
                          <h4 className="sub-heading ">Key Features</h4>
                          <ul>
                            <li>Add item to my wishList</li>
                            <li>Add item to my cart</li>
                            <li>Payment method and click & collect process</li>
                          </ul>
                        </div>
                        <div className='col-sm-10 col-lg-6'>
                          <img src={Competitive_Analysis} className="img-fluid" alt="chart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User flow */}
              <div className="user-flow-container">
                <div className="container mb-4">
                  <div className="row">
                    <div className="col mb-5">
                      <div className="row justify-content-center">
                        <div className='col-12 title mt-5'>
                          <hr />
                          <h2 className="text-center">Users flow</h2>
                          <h3 className="text-center backtext">users flow</h3>
                        </div>
                      </div>

                      {/* content & objective */}
                      <div className="row row-cols-1 row-cols-md-3  g-6">
                        {users_story.map((user, index) => (

                          <div className="col">
                            <div className="align-items-center  pt-3 mt-3">
                              <h6 className="">{user.title}</h6>
                              <p>{user.description}</p>
                              <img src={user.image} className="img-fluid center-block" alt="..." />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lo-fi / sketch*/}
              <div className="lo-fi-container">
                <div className="container">
                  <div className="row">
                    <div className="col mb-5">
                      <div className="row justify-content-center">
                        <div className='col-12 title mt-5 mb-4'>
                          <h2 className="text-center">Sketches</h2>
                          <h3 className="text-center backtext">Sketches</h3>
                        </div>
                      </div>

                      <div className="row mb-1">
                        <div className='col-12'>
                          <p className="">Initial sketches using pen and paper were created to visualize our design ideas. The sketches were then digitized in figma. </p>
                        </div>
                      </div>
                      {/* add to card */}
                      <div className="row mb-1">
                        <div className='col-12'>
                          <h4 className="sub-heading ">Add to Card & Favourite</h4>
                        </div>
                      </div>
                      {/* add to card */}
                      <div className="row row-cols-2 row-cols-md-4  g-6 mb-5">
                        {addtocard.map((add, index) => (

                          <div className="col">
                            <div className="align-items-center  pt-3 mt-3">
                              <img src={add.image} className="img-fluid center-block" alt="..." />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Click n collect */}
                      <div className="row mb-1 mt-">
                        <div className='col-12'>
                          <h4 className="sub-heading ">Check-out process</h4>
                        </div>
                      </div>
                      <div className="row row-cols-2 row-cols-md-4  g-6">
                        {clickncollect.map((click, index) => (
                          <div className="col">
                            <div className="align-items-center  pt-3 mt-3">
                              <img src={click.image} className="img-fluid center-block" alt="..." />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* concept testing*/}
              <div className="concept-testing-container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="row justify-content-center  mt-5">
                        <div className="col-12 title">
                          <h2 className="text-center">USABILITY TESTING</h2>
                          <h3 className="text-center backtext">USABILITY TESTING</h3>
                        </div>
                      </div>
                    </div>

                    <div className="row  test-screen">
                      <div className="col">
                        <div className="row mb-1">
                          <div className="col-12">
                            <p className="">For the Mid-fi we did concept testing with group of 8 persons including our teacher and assistatance teacher. Feedback was collected. </p>
                            <p>These iteration included: </p>
                          </div>
                        </div>

                        {/* image from ecommerce-dir.js*/}
                        <div className="row row-cols-1 row-cols-md-2  g-6">
                          {concepttesting.map((concept, index) => (
                            <div className="col">
                              <div className="align-items-center  pt-3 mt-3">
                                <img src={concept.image} className="img-fluid center-block" alt="..." />
                              </div>
                            </div>
                          ))}
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* mid-fi*/}
              <div className="mid-fi-container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="row justify-content-center">
                        <div className='col-12 title mt-5 mb-4'>
                          <h2 className="text-center">MID-FIDELITY</h2>
                          <h3 className="text-center backtext">MID-FIDELITY</h3>
                        </div>
                      </div>

                      <div className="row mb-1">
                        <div className='col-12'>
                          <p className=""> This prototype can be used with users for testing purposes before adding all graphics. a consistent layout grid was established to organize the UI elements and keep everything perfectly align across the screens. </p>
                        </div>
                      </div>

                      {/* image from ecommerce-dir.js*/}
                      <div className="row row-cols-2 row-cols-md-4  g-6 mb-5">
                        {midfi.map((mifi, index) => (

                          <div className="col">
                            <div className="align-items-center  pt-3 mt-3">
                              <img src={mifi.image} className="img-fluid center-block" alt="..." />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moodboard testing*/}
              <div className="moodboard-container">
                <div className="container">
                  <div className="row ">
                    <div className="col">
                      <div className="row justify-content-between mt-5 mb-3">
                        <div className='col-12 title'>
                          <h2 className="text-center">MOODBOARD</h2>
                          <h3 className="text-center backtext">MOODBOARD</h3>
                        </div>
                      </div>

                      <div className="row justify-content-between align-items-center mb-4">
                        <div className='col-sm-12 col-lg-6'>
                          <p>The brand already has a logo and stakeholders send us some photos of Bottega upcycling on their models. </p>
                          <p>So, an arrangement of images, materials, and pieces of text intended to evoke or project a particular style or concept. we chose primary colors like dark green to represent sustainability, beige as an accent color, and black and white as Neutral colors, the figure below is the moodboard.</p>
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                          <img src={Moodboard} className="img-fluid" alt="chart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* style guide */}
              <div className="style-guide-container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="row justify-content-between  mt-3">
                        <div className='col-12 title'>
                          <hr />
                          <h2 className="text-center">STYLE GUIDE</h2>
                          <h3 className="text-center backtext">STYLE GUIDE</h3>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-center mb-4">
                        <div className='col-12'>
                          <p>For our main CTA, we decided to go with  dark green to represent sustainability, it connects with people and Envoronment, Beige as an accent color, and black and white as Neutral colors, and Typography we used Open Sans, It's elegant and sophisticated, yet modern. It's beautifully legible, offers an excellent reading experience,</p>
                        </div>
                      </div>
                      <div className="row justify-content-between mb-4">
                        <div className='col-sm-12 col-lg-6'>
                          <h4 className="sub-heading ">Typography</h4>
                          <img src={Typography} className="img-fluid" alt="chart" />
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                          <div className="row justify-content-between align-items-center mb-4">
                            <div className='col-12 '>
                              <h4 className="sub-heading ">Colors</h4>
                              <img src={Colors_palate} className="img-fluid" alt="chart" />
                            </div>
                            <div className='col-12'>
                              <h4 className="sub-heading ">Icongraphy</h4>
                              <img src={Icons} className="img-fluid" alt="chart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* hi-fi n Desirable testing*/}
              <div className="hi-fi-container">
                <div className="container mb-1">
                  <div className="row">
                    <div className="col mb-2">
                      <div className="row justify-content-center">
                        <div className='col-12 title mb-2'>
                          <h2 className="text-center">HI-FIDELITY</h2>
                          <h3 className="text-center backtext">HI-FIDELITY</h3>
                        </div>
                      </div>

                      <div className="row mb-1">
                        <div className='col-12'>
                          <h4 className="sub-heading ">Desirability Testing</h4>
                          <p>We did a few user desirability testing; Try to understand what feelings/emotions the user is getting when in front of our design the point is not knowing if the user likes it or not the design. The idea here is to match the desired effect/goal of the brand with the user’s emotion.</p>
                        </div>
                      </div>

                      {/* usability image*/}
                      {/* <div className="row row-cols-1  g-6 mb-5">
              <div className="col">
                <div className="align-items-center  pt-3 mt-3">
                  <img src={Mid_fi} className="img-fluid center-block" alt="..." />
                </div>
              </div>
          </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* final design */}
              <div className="final-design-container">
                <div className="container">
                  <div className="row">
                    <div className="col mb-5">
                      <div className="row justify-content-center">
                        <div className='col-12 title mt-5 mb-4'>
                          <h2 className="text-center">FINAL-DESIGN</h2>
                          <h3 className="text-center backtext">FINAL-DESIGN</h3>
                        </div>
                      </div>

                      {/* image from ecommerce-dir.js*/}
                      <div className="row row-cols-2 row-cols-md-4  g-6 mb-5">
                        {hifi.map((hifi, index) => (

                          <div className="col">
                            <div className="align-items-center  pt-3 mt-3">
                              <img src={hifi.image} className="img-fluid center-block" alt="..." />
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* prototype testing*/}
              <div className="prototype-container">
                <div className="container">
                  <div className="row">
                    <div className="col mb-5">
                      <div className="row justify-content-center  mt-5">
                        <div className="col-12 title">
                          <h2 className="text-center">Prototype</h2>
                          <h3 className="text-center backtext">Prototype</h3>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-1">
                      <div className="col-12">
                        <p className="prototype-text">Do you want to do Usability testing with our prototype, Click Below! </p>
                      </div>
                    </div>

                    {/* image from ecommerce-dir.js*/}
                    <div className="row row-cols-1 mb-5">
                      <div className="col">
                        <div className="align-items-center  pt-3 mt-3">
                          <a href="https://www.figma.com/proto/P5LI5UPcSpqRxT3POQPvb6/Butttega-e-commerce?page-id=96%3A596&node-id=109%3A541&viewport=348%2C345%2C0.46&scaling=scale-down&starting-point-node-id=109%3A541" target="_blank" className="prototype-link">
                            <img src={Prototype} className="img-fluid center-block prototype-image" alt="..." />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Conclussion*/}
              <div className="conclusion-container">
                <div className="container mb-4">
                  <div className="row">
                    <div className="col mb-5">
                      <div className="row justify-content-center">
                        <div className='col-12 title mt-5 mb-4'>
                          <h2 className="text-center">conclusion</h2>
                          <h3 className="text-center backtext">conclusion</h3>
                        </div>
                      </div>

                      <div className="row mb-1">
                        <div className='col-12'>
                          <h4 className="sub-heading ">Next Steps</h4>
                          <ul>
                            <li>We would like to do desirable testing with hi-fi prototype.</li>
                            <li>Work on a fully responsive solution on desktop.</li>
                            <li>Submit this project to Bottega.</li>
                          </ul>
                        </div>

                        <div className='col-12'>
                          <h4 className="sub-heading ">Key Learning</h4>
                          <p>It was a great challenge for our team, where we learned how to have a sharp focus on accessibility and the challenge of an e-commerce site for second-hand Vintage store. It was rewarding to be part of solving second-hand online shopping.</p>
                        </div>
                      </div>

                      {/* usability image*/}
                      {/* <div className="row row-cols-1  g-6 mb-5">
              <div className="col">
                <div className="align-items-center  pt-3 mt-3">
                  <img src={Mid_fi} className="img-fluid center-block" alt="..." />
                </div>
              </div>
          </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Thank you*/}
              <div className="thanks-container">
                <div className="container">
                    {/* image from ecommerce-dir.js*/}
                    <div className="row d-flex justify-content-center row-cols-1 mb-2">
                      <div className="col">
                        <div className="align-items-center  pt-3 mt-3">
                          <img src={Thanks} className="img-fluid center-block thanks-image" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button at end*/}
                <div className="project-button-container">
                  <div className="container mb-4">
                    <div className="row">
                      <div className="col mb-5">

                        <div className="d-grid gap-2 d-md-flex justify-content-center">
                          <a href="./diet_n_nutrition" >
                            <button type="button" className="btn btn-outline-success btn-lg project-button p-2 ">
                              PREVIOUS PROJECT
                            </button>
                          </a>
                          <a href="/works">
                            <button type="button" className="btn btn-outline-success btn-lg project-button p-2">
                              PROJECTS
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </Fade>

          </Parallax>
        </div>
      </Container>
    </>



  )
}

export default ECommerce