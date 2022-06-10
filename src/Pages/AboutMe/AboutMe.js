import React from "react";
import shahed from "../../Images/shahed.JPG";
import resume from "../../Images/Md._Shahed Hossen_Resume.pdf"
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="mt-24 px-12">
      <div className="heading-container">
        <h1 className="screen-heading">About Me</h1>
        <span className="screen-sub-heading">Why Choose Me?</span>

        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-[400px] h-[100%]" src={shahed} alt="Album" />
          </figure>
          <div className="card-body">
            <p className="card-p">
              I completed BSc In Computer science and engineering from Daffodil
              International University Full stack web developer with background
              knowledge of MERN stacks with redux, along with a knack of
              building applications with utmost efficiency.
            </p>
            <div className="highlight-header">
              <p className="text-[18px] font-bold">
                Here are a Few Highlights:
              </p>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web development</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Interactive Front End as per the design</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>React and React Native</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Managing database</span>
              </div>
            </div>
            <div className="aboutme-btn">
              <div>
                <button className="button button-primary">Hire Me</button>
              </div>
              <div>
              <a href={resume} download="Shahed's Resume"><button className='button button-secondary ml-3' > Get Resume</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
