import React from 'react';
import "../home/Home.css";
// import Typed from 'react-typed';

//npm
import Button from 'react-bootstrap/Button';
import AboutMe from '../about/AboutMe';
import Work from "../works/Work";

const Home = () => {



    return (
        <>
            <div className="home-container">
                <div className="main-info">

                    <h1 className="highlight">Hello, I’m Yeshi.</h1>
                    <h2 className="highlight">I’M a UI Designer based in Paris. </h2>
                    <h3 className="highlight">with a web development background</h3>

                    <p>I am Determined to create something meaningful & powerful that people love to use. </p>

                    <div className='icons-box'>

                        <a href="https://www.linkedin.com/in/gangchen-yeshi-tsering-62b8031ba/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i className="fab fa-linkedin icons"></i>
                            </Button>
                        </a>
                        <a href="https://medium.com/@yestsering" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i className="fa fa-medium" aria-hidden="true"></i>
                            </Button>
                        </a>
                        <a href="https://github.com/gangchenyeshi" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i className="fab fa-github-square icons"></i>
                            </Button>
                        </a>
                        <a href="https://drive.google.com/file/d/12j0257Cj5cCBju5xw6MNtHr-HM_yDwZb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i className="fa fa-address-card" aria-hidden="true"></i>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <Work />
            <AboutMe />

        </>
    )
}

export default Home