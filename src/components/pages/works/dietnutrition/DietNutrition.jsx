import React from 'react';
import "./DietNutrition.css";
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';

import {
    icons_Ecommerce
} from "../ecommerce/Library";

import {
    solutions,
    competators,
    onboardings,
    landings,
    midfi_sites,
    midfi_onboardings,
    styles,
    hifidelity,
    hifidelity_cta
} from "./Library"


import Colors from "../../../../assets/projects/diet&nutrition/colors.png";
import Hero_img from "../../../../assets/projects/diet&nutrition/hero.png";
import Chart from "../../../../assets/projects/diet&nutrition/chart.png";
import Survey from "../../../../assets/projects/diet&nutrition/survey.png";
import Interviews from "../../../../assets/projects/diet&nutrition/interviews.png";
import Persona from "../../../../assets/projects/diet&nutrition/persona.png";
import User_Flow from "../../../../assets/projects/diet&nutrition/userflow.png";
import Lowfi from "../../../../assets/projects/diet&nutrition/lowfi.png";
import Moodboard from "../../../../assets/projects/diet&nutrition/moodboard.png";
import Prototype from "../../../../assets/projects/diet&nutrition/hifi/onboarding/onboarding-page0.png"
import Thanks from "../../../../assets/projects/diet&nutrition/thanks.jpg";

const Diet_n_Nutrition = () => {
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
                            <div className="hero-container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">

                                            <div className="row justify-content-around ">
                                                <div className="col-12 colors">
                                                    <img src={Colors} className="mx-auto d-block img-fluid" alt="Colors" />
                                                </div>
                                            </div>
                                            <div className="row justify-content-around align-items-center hero">
                                                <div className="col-sm-12 col-lg-4 hero-text colors">
                                                    <img src={Hero_img} className="mx-auto d-block img-fluid" alt="Hero image" />
                                                </div>

                                                <div className="col-sm-12 col-lg-7 hero-text">
                                                    <h1>DayLish Dish App</h1>
                                                    <h1>UX/UI Challenge</h1>
                                                    <p className="p-5">Your one-stop Diet & Nutrition plan with quick recipes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Introduction */}
                            <div className="intro-container">
                                <div className="container">
                                    <div className="row  mt-3">
                                        <div className='col-12 justify-content-around align-items-center'>
                                            <div className="row diet-title align-items-center">
                                                <div className='col-1'>
                                                    <h3 className="backtext">1</h3>
                                                </div>
                                                <div className='col-10 align-items-center' >
                                                    <h2 className="text-center ">PROJECT INTRODUCTION</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* content & objective */}
                                    <div className="row justify-content-between intro">
                                        <div className='col-sm-12 col-lg-6'>
                                            <div className='row justify-content-between'>
                                                <div className='col-12'>
                                                    <h4 className="sub-heading ">Context</h4>
                                                    <p>Daylish diet is a mainly designed for people who have followed strict and casual diet/nutrition plans and want to explore suitable recipes and create a meal plan. App also allows users to track their daily, weekly, and monthly intake, along with calorie counting and macros.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-lg-6'>
                                            <div className='row justify-content-between'>
                                                <div className='col-12'>
                                                    <h4 className="sub-heading ">Goal</h4>
                                                    <p>Create an MVP (Minimum Viable Product) for a wellness app and “pretend” to compete at the Daily Health Conference, starting with conducting user research to understand people’s behaviors, based on the various topics, and ending with creating a prototype for a tool that will motivate them to take action. </p>
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
                                                    <div className="col-3">
                                                        <p>Challenge:</p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>UX/UI challenge. Design a mobile app on “Diet and nutrition”.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-12'>
                                                <div className='row justify-content-between'>
                                                    <div className="col-3">
                                                        <p>Team:</p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>Group project with 3 people</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-12'>
                                                <div className='row justify-content-between'>
                                                    <div className="col-3">
                                                        <p>Role:</p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>UX/UI Designer</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-12'>
                                                <div className='row justify-content-between'>
                                                    <div className="col-3">
                                                        <p>Durations:</p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>10 days</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='row justify-content-between '>
                                                    <div className="col-3">
                                                        <p>Tools:</p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>Figma, Trello, Miro, & PPT</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* process */}
                            <div className="process-container-diet diet-container">
                                <div className="container">
                                    <div className="row mb-2">
                                        <div className='col-12 justify-content-around align-items-center'>
                                            <div className="row diet-title align-items-center mt-3">
                                                <div className='col-1'>
                                                    <h3 className="backtext">2</h3>
                                                </div>
                                                <div className='col-10 align-items-center' >
                                                    <h2 className="text-center ">THE PROCESS</h2>
                                                </div>
                                            </div>

                                            {/* content & objective */}
                                            <div className="row row-cols-3 row-cols-md-6 g-6 mb-5 process-card">
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
                                    <div className="row mb-2">
                                        <div className="col">
                                            <div className="row  mt-3">
                                                <div className='col-12 justify-content-around align-items-center'>
                                                    <div className="row diet-title align-items-center">
                                                        <div className='col-1'>
                                                            <h3 className="backtext">3</h3>
                                                        </div>
                                                        <div className='col-10 align-items-center' >
                                                            <h2 className="text-center ">MARKET RESEARCH</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Secondary Research */}
                                            <div className="row justify-content-between intro mt-3">
                                                <div className='col-sm-12 col-lg-6'>
                                                    <div className='row justify-content-between'>
                                                        <div className='col-12'>
                                                            <h4 className="sub-heading mt-0">Secondary Research</h4>
                                                            <p>The COVID-19 pandemic has boosted public awareness regarding health and sanitation, leading to increase in demand for personalized solutions</p>
                                                            <p>The global personalized nutrition market size is projected to grow from USD 8.2 billion in 2020 to USD 16.4 billion by 2025</p>

                                                            <p>Growing trend of digital solutions for healthcare</p>
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

                                            {/* Who is the User? */}
                                            <div className="row justify-content-md-center mt-2 mb-2">
                                                <div className='col-12'>
                                                    <h5 className="sub-heading ">Who is the User?</h5>
                                                    <p>The user has been identified as anyone who have followed or have used a diet / Nutrition plan.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SURVEY & INTERVIEWS */}
                            <div className="survey-interview-container py-2 mt-2 mb-2">
                                <div className="container mt-2 mb-2">
                                    <div className="col">
                                        <div className="row  mt-3">
                                            <div className='col-12 justify-content-around align-items-center mt-3'>
                                                <div className="row diet-title align-items-center">
                                                    <div className='col-1'>
                                                        <h3 className="backtext">4</h3>
                                                    </div>
                                                    <div className='col-10 align-items-center' >
                                                        <h2 className="text-center ">SURVEY & INTERVIEWS</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* SMU interview */}
                                        <div className="row justify-content-between mb-4">
                                            <div className='col-sm-12'>
                                                <div className='row justify-content-between'>
                                                    <div className='col-12'>
                                                        <h4 className="sub-heading ">SMU Interview</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-lg-6'>
                                                <div className='row justify-content-between'>
                                                    <div className='col-12'>
                                                        <p>Start by asking his clients for certain information, </p>
                                                        <ul>
                                                            <li>Body measurements</li>
                                                            <li>Weight</li>
                                                            <li>Height</li>
                                                            <li>Food likes and dislike</li>
                                                            <li>Health issues. </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-lg-6'>
                                                <div className='row justify-content-between'>
                                                    <div className='col-12'>
                                                        <p>Based on the information</p>
                                                        <ul>
                                                            <li>Sets a weekly plan for his clients.</li>
                                                            <li>Sees the results after the week. </li>
                                                            <li>Based on the results, he adjusts the plan and goals.</li>
                                                            <li>The plan cycle is usually 3 months, then the client can work on his own.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Survey & Interview */}
                                        <div className="row mb-4">
                                            <div className='col-12'>
                                                <div className="row">
                                                    <div className='col-12'>
                                                        <h4 className="sub-heading ">Survey & Interview </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-center survey-card">
                                                <div className="col-xs-6 col-md-3 mb-2">
                                                    <img src={Survey} className="img-fluid" alt="survey" />
                                                </div>
                                                <div className="col-xs-6 col-md-3 mb-2">
                                                    <img src={Interviews} className="img-fluid" alt="interviews" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Persona */}
                            <div className="problem-container">
                                <div className="container mt-2 mb-2">
                                    <div className="col">
                                        <div className="row  mt-3">
                                            <div className='col-12 justify-content-around align-items-center mt-3'>
                                                <div className="row diet-title align-items-center">
                                                    <div className='col-1'>
                                                        <h3 className="backtext">5</h3>
                                                    </div>
                                                    <div className='col-10 align-items-center' >
                                                        <h2 className="text-center ">PROBLEMS</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* content & objective */}
                                        <div className="row justify-content-between align-items-center mb-4">
                                            <div className='col-sm-10 col-lg-6'>
                                                <h4 className="sub-heading ">User Personas</h4>
                                                <p>To Understand users pain points and what there were struggling with the most during their quest to prepare the meal plan. </p>
                                            </div>
                                            <div className='col-sm-10 col-lg-6'>
                                                <img src={Persona} className="img-fluid" alt="chart" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Problem statement */}
                            <div className="problem-statement-container" >
                                <div className="container mb-4">
                                    <div className="row ">
                                        <div className="col">
                                            <hr />
                                            {/* content & objective */}
                                            <div className="row justify-content-between">
                                                <div className='col-sm-12 col-lg-6'>
                                                    <div className='row justify-content-between'>
                                                        <div className='col-12'>
                                                            <h4 className="sub-heading ">User Journey</h4>
                                                            <p>The pain points the persona experiences we decided to focus on:</p>
                                                            <ul>
                                                                <li>Apps consume a lot of time to enter data</li>
                                                                <li>Meal prep and cooking is time consuming and tiring</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-sm-12 col-lg-6'>
                                                    <div className='row justify-content-between'>
                                                        <div className='col-12'>
                                                            <h4 className="sub-heading ">Problem Statement</h4>
                                                            <p>“How can the user find a way to prepare meals fast, because food preparation is long and tiring, especially after a long day at work?”</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Solution */}
                            <div className="solution-container diet-container">
                                <div className="container">
                                    <div className="row mb-5">
                                        <div className="col">
                                            <div className="row  mt-3">
                                                <div className='col-12 justify-content-around align-items-center'>
                                                    <div className="row diet-title align-items-center">
                                                        <div className='col-1'>
                                                            <h3 className="backtext">6</h3>
                                                        </div>
                                                        <div className='col-10 align-items-center' >
                                                            <h2 className="text-center ">SOLUTION</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* content & objective */}

                                            <h4 className="sub-heading my-1">Ideation</h4>
                                            <div className="row row-cols-2 row-cols-md-4 g-6 mb-5 solution-card">

                                                {solutions.map((solution, index) => (

                                                    <div className="col">
                                                        <div className="card align-items-center pt-3 mt-3">
                                                            <img src={solution.image} className="card-img-icon img-fluid" alt="..." />
                                                            <div className="card-body">
                                                                <h6 className="card-title">{solution.title}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Competative analysis */}
                            <div className="compatative-container">
                                <div className="container">
                                    <div className="row mb-1">
                                        <div className="col">
                                            <div className="row justify-content-md-center mt-2 mb-2">
                                                <div className='col-12'>
                                                    <h5 className="sub-heading">Visual competitive analysis</h5>
                                                    <p>We decided to look at the most popular nutrition mobile applications to analyze their visual aspects to strategically build our visual elements for our app. In addition, we verified the features they have, to plan our next steps for our app.</p>
                                                </div>
                                            </div>

                                            {/* content & objective */}
                                            <div className="row  d-flex justify-content-around mt-2">
                                                {competators.map((competator, index) => (
                                                    <div className="col-xs-3 col-md-3 mb-3">
                                                        <img src={competator.image} className="center-block competitor-logo img-fluid" alt="..." />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="row justify-content-md-center mt-2 mb-2">
                                                <div className='col-12'>
                                                    <h6 className="sub-heading6">Key Features</h6>
                                                    <ul>
                                                        <li>Save meal in favorite list</li>
                                                        <li>Add meal in plan for Quick preparation</li>
                                                        <li>Customize their goals</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* user flow */}
                            <div className="userflow-container">
                                <div className="container">
                                    <div className="row mb-3">
                                        <div className="col">
                                            {/* content & objective */}
                                            <hr />
                                            <div className="row justify-content-between align-items-center mt-4 mb-4">
                                                <div className='col-sm-12 col-lg-6'>
                                                    <h4 className="sub-heading ">User Flow</h4>
                                                    <p>The user flow diagram identified key actions within the app and screens to focus on. </p>
                                                </div>
                                                <div className='col-sx-12 col-lg-6'>
                                                    <img src={User_Flow} className="img-fluid" alt="chart" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* lo-fi*/}
                            <div className="lofi-container">
                                <div className="container mb-2">
                                    <div className="col">
                                        {/* content & objective */}
                                        <hr />
                                        <div className="row justify-content-between align-items-center mt-4 mb-4">
                                            <div className='col-sm-12 col-lg-6'>
                                                <h4 className="sub-heading ">Initial Sketches</h4>
                                                <p>Initial sketches using pen and paper were created to visualize our design ideas;</p>
                                            </div>
                                            <div className='col-sx-12 col-lg-6'>
                                                <img src={Lowfi} className="img-fluid" alt="chart" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Concept testing */}
                            <div className="concept-testing-diet-container">
                                <div className="container mb-2">
                                    <div className="col">
                                        {/* content & objective */}
                                        <div className="row justify-content-between align-items-center mt-4 mb-4">
                                            <div className='col-12 '>
                                                <h4 className="sub-heading ">Concept Test</h4>
                                                <p>The Concept Test is done at the earliest stage of the prototype to test the idea at the beginning of the process to test the consumer’s acceptance. We tested the idea with few users and the expert, to make sure our idea is aligned with the nutrition guidelines.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Usability testing*/}
                            <div className="usability-testing-diet-container">
                                <div className="container">
                                    <div className="row  mt-3">
                                        <div className='col-12 justify-content-around align-items-center mt-4'>
                                            <div className="row diet-title align-items-center">
                                                <div className='col-1'>
                                                    <h3 className="backtext">7</h3>
                                                </div>
                                                <div className='col-10 align-items-center' >
                                                    <h2 className="text-center ">USABILITY TESTING</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-md-center mt-2 mb-2">
                                            <div className='col-12'>
                                                <p className="">For the Mid-fi we did usability testing with 6  participants. We asked our participants performance testing for understanding how quickly the users can finish the tasks. Feedback was collected. </p>
                                                <p>These iteration included: </p>
                                            </div>
                                        </div>
                                        {/* Onboarding */}
                                        <div className="row justify-content-md-center mt-0 mb-2">
                                            <div className='col-12'>
                                                <h5 className="sub-heading text-center sub-heading5">Onboarding</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="row justify-content-between align-items-center">
                                                    {onboardings.map((onboarding, index) => (
                                                        <div className='col-sx-12 col-lg-6 mb-2'>
                                                            <img src={onboarding.image} className="img-fluid" alt="onboarding" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Landing */}
                                        <div className="row justify-content-md-center mt-2 mb-2">
                                            <div className='col-12'>
                                                <h5 className="sub-heading text-center sub-heading5">Landing page</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="row justify-content-between align-items-center mb-4">
                                                    {landings.map((landing, index) => (
                                                        <div className='col-sx-12 col-lg-6 mb-2'>
                                                            <img src={landing.image} className="img-fluid" alt="onboarding" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* mid-fi*/}
                            <div className="mid-fi-diet-container">
                                <div className="container">
                                    <div className="row mt-3">
                                        <div className='col-12 justify-content-around align-items-center mt-4'>
                                            <div className="row diet-title align-items-center">
                                                <div className='col-1'>
                                                    <h3 className="backtext">8</h3>
                                                </div>
                                                <div className='col-10 align-items-center' >
                                                    <h2 className="text-center ">MID-FIDELITY</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-md-center mt-2 mb-2">
                                            <div className='col-12'>
                                                <p className="">This was final mid-fi prototype after feetback collected from the usability testing and can be used with users for testing purposes before adding all graphics. </p>

                                            </div>
                                        </div>
                                        {/* mid-fi for onboarding*/}
                                        <div className="row justify-content-md-center mt-2">
                                            <div className='col-12'>
                                                <h3 className="sub-heading text-center sub-heading5">Onboarding</h3>
                                            </div>
                                        </div>
                                        <div className="row row-cols-2 row-cols-md-4  g-6 mb-2">
                                            {midfi_onboardings.map((onboarding, index) => (
                                                <div className="col">
                                                    <div className="align-items-center  pt-1 mb-3">
                                                        <img src={onboarding.image} className="img-fluid center-block" alt="..." />
                                                        <p className="text-center mb-1">{onboarding.title}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* mid-fi for site*/}
                                        <div className="row justify-content-md-center mt-2">
                                            <div className='col-12'>
                                                <h5 className="sub-heading text-center sub-heading5">Main pages </h5>
                                            </div>
                                        </div>
                                        <div className="row row-cols-2 row-cols-md-4  g-6 mb-2">
                                            {midfi_sites.map((site, index) => (
                                                <div className="col">
                                                    <div className="align-items-center  pt-1 mb-3">
                                                        <img src={site.image} className="img-fluid center-block" alt="..." />
                                                        <p className="text-center mb-1">{site.title}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Moodboard */}
                            <div className="moodboard-diet-container">
                                <div className="container mt-2 mb-2">
                                    <div className="col">
                                        <div className="row  mt-3">
                                            <div className='col-12 justify-content-around align-items-center mt-3'>
                                                <div className="row diet-title align-items-center">
                                                    <div className='col-1'>
                                                        <h3 className="backtext">9</h3>
                                                    </div>
                                                    <div className='col-10 align-items-center' >
                                                        <h2 className="text-center ">MOODBOARD</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* content & objective */}
                                        <div className="row justify-content-between align-items-center mb-4">
                                            <div className='col-sm-10 col-lg-6'>
                                                <p>After researching the other apps, we decided to choose “Green” to remain consistent with the market. We also decided to add “Yellow” to bring optimist, self-esteem, and confidence to the user. </p>
                                            </div>
                                            <div className='col-sm-10 col-lg-6'>
                                                <img src={Moodboard} className="img-fluid" alt="chart" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Style guide*/}
                            <div className="styleguide-diet-container">
                                <div className="container">
                                    <div className="row mt-3 pb-5">
                                        <div className='col-12 justify-content-around align-items-center mt-4'>
                                            <div className="row diet-title align-items-center">
                                                <div className='col-1'>
                                                    <h3 className="backtext">9</h3>
                                                </div>
                                                <div className='col-10 align-items-center' >
                                                    <h2 className="text-center ">STYLE GUIDE</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-md-center mt-2 mb-2">
                                            <div className='col-12'>
                                                <p className="">For our main CTA, we decided to go with yellow (Flavescent) as it comes from people and vegetables, it connects with people and nutrition.</p>
                                                <p>For our most used color, I choose Mountain Meadow (green) it gives everyone close to nature and feels fresh.</p>

                                            </div>
                                        </div>
                                        {/* Style guide components*/}
                                        <div className="row  row-cols-1 row-cols-md-2  g-6 mb-2 style-card">
                                            {styles.map((style, index) => (
                                                <div className="col  d-flex justify-content-center">
                                                    <div className="  pt-1 mb-1  ">
                                                        <h4 className="sub-heading sub-heading5">{style.title}</h4>
                                                        {/* <h3 className="text-center mb-1">{style.title}</h3> */}
                                                        <img src={style.image} className="img-fluid style-image center-block" alt="..." />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hi-fidelity*/}
                            <div className="hi-fi-diet-container">
                                <div className="container mb-2">
                                    <div className="col">
                                        <div className="row">
                                            <div className='col-12 justify-content-around align-items-center mt-4'>
                                                <div className="row diet-title align-items-center">
                                                    <div className='col-1'>
                                                        <h3 className="backtext">10</h3>
                                                    </div>
                                                    <div className='col-10 align-items-center' >
                                                        <h2 className="text-center ">HI-FIDELITY</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row justify-content-md-center mt-2 mb-2">
                                                <div className='col-12'>
                                                    <p className="">We did a few user desirability testing; Try to understand what feelings/emotions the user is getting when in front of our design the point is not knowing if the user likes it or not the design. The idea here is to match the desired effect/goal of the brand with the user’s emotion.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* final design */}
                            <div className="final-design-container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="row justify-content-center">
                                                <div className='col-12 title mt-4 mb-2'>
                                                    <h2 className="text-center">FINAL-DESIGN</h2>
                                                </div>
                                            </div>

                                            {/* hi-fi onboading image from componentjs*/}
                                            <div className="row justify-content-md-center">
                                                <div className='col-12'>
                                                    <h3 className="sub-heading text-center sub-heading5 ">Onboarding</h3>
                                                </div>
                                            </div>
                                            <div className="row row-cols-2 row-cols-md-5  g-6">
                                                {hifidelity.map((hifi, index) => (
                                                    <div className="col">
                                                        <div className="align-items-center mb-3">
                                                            <img src={hifi.image} className="img-fluid center-block" alt="..." />
                                                            <p className="text-center mb-1">{hifi.title}</p>

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* hi-fi CTA image from componentjs*/}
                                            <div className="row justify-content-md-center mt-2">
                                                <div className='col-12'>
                                                    <h5 className="sub-heading text-center sub-heading5">Main Pages</h5>
                                                </div>
                                            </div>
                                            <div className="row row-cols-2 row-cols-md-5  g-6 mb-5">
                                                {hifidelity_cta.map((cta, index) => (
                                                    <div className="col">
                                                        <div className="align-items-center mb-3">
                                                            <img src={cta.image} className="img-fluid center-block" alt="..." />
                                                            <p className="text-center mb-1">{cta.title}</p>
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
                                        <div className="col mb-3">
                                            <div className="row justify-content-center  mt-3">
                                                <div className="col-12 title">
                                                    <h2 className="text-center">Prototype</h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-1">
                                            <div className="col-12">
                                                <p className="prototype-text">Are you want to do Usability testing with our prototype, click below! </p>
                                            </div>
                                        </div>

                                        {/* image from ecommerce-dir.js*/}
                                        <div className="row row-cols-1 mb-5">
                                            <div className="col">
                                                <div className="align-items-center  pt-3 mt-2">
                                                    <a href="https://www.figma.com/proto/MzdL5mVLhytyefs6z0H0Uh/Diet-%26-Nutrition?page-id=3%3A1261&node-id=18%3A11959&viewport=3767%2C49%2C0.26&scaling=scale-down&starting-point-node-id=62%3A6160">
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
                                                <div className='col-12 title mt-5'>
                                                    <h2 className="text-center">conclusion</h2>
                                                </div>
                                            </div>

                                            <div className="row mb-1">
                                                <div className='col-12'>
                                                    <h4 className="sub-heading ">Next Steps</h4>
                                                    <ul>
                                                        <li>To implement all the feedback that we got from our design critic</li>
                                                        <li>Upload meals page , criteria filters.</li>
                                                        <li>Finally, doing more usability testing on the final product..</li>
                                                    </ul>
                                                </div>

                                                <div className='col-12'>
                                                    <h4 className="sub-heading ">Key Learning</h4>
                                                    <p>How to overcome our differences as a team and agree on one path to work together towards the same objectives It was a wonderful learning experience to complete this app within 10 days</p>
                                                </div>
                                            </div>
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
                                                <a href="./otizi">
                                                    <button type="button" className="btn btn-outline-success btn-lg project-button p-2 ">
                                                        PREVIOUS PROJECT
                                                    </button>
                                                </a>
                                                <a href="./e-commerce_bottega" >
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

export default Diet_n_Nutrition