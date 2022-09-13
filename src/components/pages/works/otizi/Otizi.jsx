import React from 'react';
import "./Otizi.css";

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';


import Hero_img from "../../../../assets/projects/otizi/hero-otizi.svg";
import Colors_bar from "../../../../assets/projects/otizi/color_bar.png";
import Persona from "../../../../assets/projects/otizi/persona.png";
import Journey_map from "../../../../assets/projects/otizi/journeymap.png";
import Competative_View from "../../../../assets/projects/otizi/competative/viewwork.png";
import Competative_Kairn from "../../../../assets/projects/otizi/competative/kairn.png";
import Competative_Airbnb from "../../../../assets/projects/otizi/competative/airbnb.png";
import Userflow_onboarding from "../../../../assets/projects/otizi/userflow/userflownew.png";
import Low_fi from "../../../../assets/projects/otizi/sketches.png";
import Style_typo from "../../../../assets/projects/otizi/styleguide/typography.png";
import Colors_Guide from "../../../../assets/projects/otizi/styleguide/colorsGuide.png";
import Prototype from "../../../../assets/projects/otizi/prototype.png";
import Thanks from "../../../../assets/projects/otizi/thanks.webp";

// library
import {
    abouts,
    plans,
    userflows,
    midfis,
    designs_iteration,
    hifis
} from "./Library"


const otizi = () => {
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
                        <Fade left opposite duration={500}>
                            {/* hero section */}
                            <div className="hero-otizi-container big-container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="row justify-content-around ">
                                                <div className="col-12 colors">
                                                    <img src={Colors_bar} className="mx-auto d-block img-fluid color-bar" alt="Colors" />
                                                </div>
                                            </div>
                                            <div className="row justify-content-around align-items-center hero-otizi">
                                                <div className="col-sm-12 col-lg-4 colors">
                                                    <img src={Hero_img} className="mx-auto d-block img-fluid" alt="Hero image" />
                                                </div>

                                                <div className="col-sm-12 col-lg-7 hero-text">
                                                    <h1>ONBOARDING FOR Otizi.fr</h1>
                                                    <h1>UX/UI CHALLENGE</h1>
                                                    <p className="pt-3">An onboarding where the users(host) enter his B&B infos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Introduction */}
                            <div className="intro-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">Project intruduction</h2>
                                                </div>
                                            </div>
                                            {/* about */}
                                            <div className="row justify-content-between align-item-center details my-2">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">About</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    {abouts.map((about, index) => (
                                                        <div className="row">
                                                            <div className="col-3 col-md-3 col-mg-2">
                                                                <p className="mb-2 sub-title-para">{about.title}</p>
                                                            </div>
                                                            <div className="col-9 col-md-9 col-mg-10">
                                                                <p className="mb-2">{about.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Who is Otizi? */}
                                            <div className="row justify-content-between align-item-center details  my-2">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Who is Otizi?</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row">
                                                        <p className="mb-2">A web site that help B&B owner to manage their booking</p>
                                                        <ul className="">
                                                            <li>Manage your reservations in one place.</li>
                                                            <li>Boost your direct bookings</li>
                                                            <li>Save time with automated tasks</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Goal*/}
                                            <div className="row justify-content-between align-item-center details my-2">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Goal</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row">
                                                        <ul className="">
                                                            <li>The user lands on the onboarding just after signing up. The onboarding will focus on the main flow: enter information, how to make booking, prices, sync with platform booking.
                                                            </li>
                                                            <li>Starting with conducting user research to understand people’s behaviors,  based on the various topics, and ending with creating a prototype for a tool that will motivate them to take action. </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Plan */}
                            <div className="plan-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3 mb-3">
                                            <div className="row mt-4">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">What’s the plan ?</h2>
                                                </div>
                                            </div>

                                            {/* content & objective */}
                                            <div className="row row-cols-3 row-cols-md-6 g-6 mb-4 process-card">
                                                {plans.map((icon, index) => (

                                                    <div className="col">
                                                        <div className="card align-items-center pt-3 mt-4">
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
                            {/* Research */}
                            <div className="research-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">Research</h2>
                                                </div>
                                            </div>

                                            {/* Secondary Research */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Secondary Research</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row">
                                                        <p className="mb-2">Bed & breakfasts in European capitals on average are 25% cheaper than hotels. This appears from figures of Bedandbreakfast.eu, the world’s largest bed & breakfast website.</p>
                                                        <p>In 2014, travellers paid an average € 108,50 for an overnight stay in a hotel in a European capital. The price of an overnight stay including breakfast in a B&B in a European capital on average amounts to € 79,50. A price difference of 25%. The differences are highest in Prague (49%), Athens (44%) and Moscow (33%).</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Who is the Users? */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Who is the Users?</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row">
                                                        <p className="mb-2">The archetype persona of Otizi is a 40~60y lady, not a digital native who is still using phones for business. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Interviews */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Interviews</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9 interview-row">
                                                    <div className="row text-center interview-box ">
                                                        <div className="col-12 interviews mb-2">
                                                            <h5>Stackholder</h5>
                                                            <p className="mb-2">“To make it simple for the hosts. access it everywhere. Make it warmer and friendly than the competitors. The main difference with those websites is that they are focus on hotel/motel with a lot of room. So their models have a lot of complexity. Host can be lost.”</p>
                                                        </div>
                                                        <div className="col-12 interviews">
                                                            <h5>Users </h5>
                                                            <p className="mb-2">“The clients prefer the atmosphere and the service as well as the lower price”</p>
                                                            <p>“the app was easy to use but poorly guided through it so it was hard to put all her info”</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Persona */}
                            <div className="persona-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">Problems</h2>
                                                </div>
                                            </div>

                                            {/* Persona */}
                                            <div className="row justify-content-between align-item-center details my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">User Personas</h3>
                                                    <p>To identify who we designing for User Personas were created. </p>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row">
                                                        <div className="col">
                                                            <img src={Persona} className="img-fluid photos" alt="persona" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Journey map */}
                            <div className="journeymap-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3 mb-3">
                                            {/* Journey map */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Journey map</h3>
                                                    <p>As we follow Françoise</p>
                                                    <p>The Journey Map allow us to understand our personas. It keeps us focus on pain point of user, making an impact and fix the problem areas.  </p>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row">
                                                        <div className="col">
                                                            <img src={Journey_map} className="img-fluid style-photo" alt="persona" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Problem statement */}
                            <div className="problem-statement-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-5 mb-5">
                                            {/* Persona */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Problem Statement</h3>
                                                </div>
                                                <div className="col-xs-10 col-md-9">
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="text-center">“B&B host like Françoise want a channel manager that will friendly guided them during the process in a playful way that helps them discover Otizi app because right now, the process is too technical”.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* visual competative analysis map */}
                            <div className="competative-analy-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-4 mb-4">
                                            {/* Journey map */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Visual competitive analysis</h3>
                                                    <p>We decided to look at visual competitive analyze not the based on business, but the based on onboarding, their visual aspects to strategically build our visual elements for onboarding. In addition, different types of onboarding.  </p>
                                                </div>
                                                {/* carousel */}
                                                <div className="col-xs-12 col-md-9">
                                                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="2000">
                                                                <img src={Competative_View} className="d-block w-100" alt="..." />
                                                                <div className="carousel-caption  d-block competative-heading">
                                                                    {/* <h4 className="">User Guiding, onboarding</h4> */}
                                                                    <p>Viework’s Product Tour, Created with UserGuiding.</p>
                                                                </div>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="2000">
                                                                <img src={Competative_Kairn} className="d-block w-100" alt="..." />
                                                                <div className="carousel-caption d-block competative-heading">
                                                                    {/* <h4>Select with Tag, onboarding</h4> */}
                                                                    <p>Kairn onboarding product, Select with tag/tags.</p>
                                                                </div>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="2000">
                                                                <img src={Competative_Airbnb} className="d-block w-100" alt="..." />
                                                                <div className="carousel-caption d-block competative-heading">
                                                                    {/* <h4>Dropdown Option, onboarding</h4> */}
                                                                    <p>Airbnb onboarding product, Dropdown options.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* User flow Solution */}
                            <div className="userflow-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">Solution</h2>
                                                </div>
                                            </div>

                                            {/* old userflow */}
                                            <div className="row justify-content-between align-item-center details mt-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">User Flow</h3>
                                                    <p>Otizi currently user flow without onboarding. </p>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row justify-content-center align-item-center">
                                                        {userflows.map((userflow, index) => (
                                                            <div className="col-xs-12 col-md-4  mb-3">
                                                                <img src={userflow.image} className="img-fluid photos-userflow" alt="userflow" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* new userflow */}
                                            <div className="row justify-content-between align-item-center details  mt-3 mb-3">
                                                <div className="col-sm-12 col-md-3 mt-3">
                                                    <h3 className="sub-heading-diet">Future user flow for onboarding</h3>
                                                    <p>New flow based on problem statement & google analytics report provided by the client. </p>
                                                </div>
                                                <div className="col-xs-12 col-md-9 mt-3 mb-3">
                                                    <div className="row justify-content-center align-item-center">
                                                        <div className="col-xs-12   mb-3">
                                                            <img src={Userflow_onboarding} className="img-fluid photos" alt="userflow" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* low-fi Solution */}
                            <div className="low-fi-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">Sketches</h2>
                                                </div>
                                            </div>

                                            {/* low-fi*/}
                                            <div className="row justify-content-between align-item-center details  mt-2 mb-2">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Steps</h3>
                                                    <p>After several Sketches and concept testing with stakeholder engagement, Final solution with 3 steps onboarding.</p>
                                                    <ul>
                                                        <li>Step 1 - Mandatory information</li>
                                                        <li>Step 2 - Optional information (boost the engagement)</li>
                                                        <li>Step 3 - Product Tour (Next step)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-12 col-md-9 mt-3 mb-3">
                                                    <div className="row justify-content-center align-item-center">
                                                        <div className="col-xs-12   mb-3">
                                                            <img src={Low_fi} className="img-fluid style-photo" alt="userflow" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* mid-fi */}
                            <div className="mid-fi-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">Mid-fidelity</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-2 mb-2">
                                            {/* Journey map */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <p> This prototype can be used with users for testing purposes before adding all graphics. a consistent layout grid was established to organize the UI elements and keep everything perfectly align across the screens.  </p>
                                                </div>
                                                {/* carousel */}
                                                <div className="col-xs-12 col-md-9">
                                                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            {midfis.map((midfi, index) => (

                                                                <div className={midfi.class} data-bs-interval="1500">
                                                                    <img src={midfi.image} className="d-block w-100" alt="..." />
                                                                    {/* <div className="carousel-caption  d-block competative-heading">
                                                        <h4 className="">{midfi.title}</h4>
                                                        <p>Viework’s Product Tour, Created with UserGuiding.</p>
                                                    </div> */}
                                                                </div>

                                                            ))}
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Style guide */}
                            <div className="style-guide-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">STYLES GUIDE</h2>
                                                </div>
                                            </div>

                                            {/* low-fi*/}
                                            <div className="row justify-content-between align-item-center details mb-2">
                                                <div className="col-sm-12 col-md-3 mt-3">
                                                    <h3 className="sub-heading-diet">STYLES GUIDE</h3>
                                                    <p>For the consistancy between onboarding & site, we keep our Typeface & colors remain same.</p>
                                                </div>
                                                <div className="col-xs-12 col-md-9 mt-3 mb-3">
                                                    <div className="row justify-content-center align-item-center">
                                                        <div className="col-12 mb-3">
                                                            <div className="row">
                                                                <div className="col-xs-12 col-md-6 mb-3">
                                                                    <img src={Style_typo} className="img-fluid style-photo" alt="userflow" />
                                                                </div>
                                                                <div className="col-xs-12 col-md-6">
                                                                    <img src={Colors_Guide} className="img-fluid style-photo" alt="userflow" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* design feedback guide */}
                            <div className="design-feedback-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">FEEDBACK SUMMARY & DESIGN ITERATIONS</h2>
                                                </div>
                                            </div>

                                            {/* design iteration*/}

                                            <div className="row justify-content-between align-item-center mt-2 mb-2">
                                                {designs_iteration.map((design, index) => (
                                                    <div className="col-xs-12 col-md-6 mt-2 mb-2">
                                                        <h3 className="sub-heading-diet">{design.title}</h3>
                                                        <img src={design.image} className="img-fluid photos style-guide" alt="userflow" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* hi-fi */}
                            <div className="hi-fi-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-4 mb-3">
                                            {/* Journey map */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">FINAL DESIGN</h3>
                                                    {/* <p> This prototype can be used with users for testing purposes before adding all graphics. a consistent layout grid was established to organize the UI elements and keep everything perfectly align across the screens.  </p> */}
                                                </div>
                                                {/* carousel */}
                                                <div className="col-xs-12 col-md-9">
                                                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            {hifis.map((hifi, index) => (

                                                                <div className={hifi.class} data-bs-interval="1500">
                                                                    <img src={hifi.image} className="d-block w-100" alt="..." />
                                                                    {/* <div className="carousel-caption  d-block competative-heading">
                                                        <h4 className="">{midfi.title}</h4>
                                                        <p>Viework’s Product Tour, Created with UserGuiding.</p>
                                                    </div> */}
                                                                </div>

                                                            ))}
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* prototype  */}
                            <div className="prototype-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="heading">PROTOTYPE</h2>
                                                </div>
                                            </div>

                                            {/* low-fi*/}
                                            <div className="row justify-content-between align-item-center details mb-3">
                                                <div className="col-sm-12 col-md-3 mt-3">
                                                    <p>Are you want to do desirable testing with our prototype, <a href="https://www.figma.com/proto/sDsEApo9Rbl8cgNbECUOMt/OTIZI?page-id=344%3A5639&node-id=344%3A5640&viewport=418%2C358%2C0.04&scaling=scale-down&starting-point-node-id=344%3A5640">click Me!.</a> or watch Me!</p>
                                                </div>
                                                <div className="col-xs-12 col-md-9 mt-3 mb-3">
                                                    {/* <a href="https://www.figma.com/proto/sDsEApo9Rbl8cgNbECUOMt/OTIZI?page-id=344%3A5639&node-id=344%3A6044&viewport=486%2C289%2C0.02&scaling=scale-down&starting-point-node-id=344%3A5640">
                                                                            <img src={Prototype} className="img-fluid center-block prototype-image" alt="..." />
                                                                        </a> */}
                                                    <div className="ratio ratio-16x9">
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2zEwcaMxeRE?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Conclusion & next steps statement */}
                            <div className="next-steps-conclusion-container-otizi">
                                <div className="container">
                                    <div className="row my-0">
                                        <div className="col-12 mt-3 mb-3">
                                            {/* next steps */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Next Steps</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9 pl-0">
                                                    <div className="row">
                                                        <div className="col">
                                                            <ul className="ml-0 pl-0">
                                                                <li>We would like to do more desirable testing with hi-fi prototype.</li>
                                                                <li>Work on a  3rd step</li>
                                                                <li>work on mobile version</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* conclusion */}
                                            <div className="row justify-content-between align-item-center details  my-3">
                                                <div className="col-sm-12 col-md-3">
                                                    <h3 className="sub-heading-diet">Key Learning</h3>
                                                </div>
                                                <div className="col-xs-12 col-md-9">
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="">It was a great experience working with real life project of the company.  Meeting with client, followup the task and  writing reports. finding the solution not the based on business, but the based on visual analysis.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Thank you*/}
                            <div className="thanks-container-otizi">
                                <div className="container">
                                    {/* image from ecommerce-dir.js*/}
                                    <div className="row d-flex justify-content-center row-cols-1 mb-2">
                                        <div className="col">
                                            <div className="align-items-center  pt-3 mt-3">
                                                <img src={Thanks} className="img-fluid center-block thanks-image-otizi" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Button at end*/}
                            <div className="project-button-container">
                                <div className="container mb-3 mt-3">
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-grid gap-2 d-md-flex justify-content-center">
                                                <a href="/works">
                                                    <button type="button" className="btn btn-outline-success btn-lg project-button p-2 ">
                                                        PROJECTS
                                                    </button>
                                                </a>
                                                <a href="./diet_n_nutrition" >
                                                    <button type="button" className="btn btn-outline-success btn-lg project-button p-2">
                                                        NEXT PROJECT
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

export default otizi