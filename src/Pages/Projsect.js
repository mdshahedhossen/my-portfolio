import React from "react";
import loyal from "../Images/Projects/loyal.png";
import halal from "../Images/Projects/halal.png";
import sbn from "../Images/Projects/sbn.png";
import carService from "../Images/Projects/car-service.png";

const Projsect = () => {
  return (
    <div id="project">
      <div className="mt-14">
        <div className="heading-container">
          <h1 className="screen-heading font-bold text-[32px]">My Projects</h1>
          <span className="screen-sub-heading">See My projects</span>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 px-12">
          <div className="card lg:max-w-screen-lg bg-base-100 shadow-xl">
            <figure>
              <img src={loyal} alt="loyal" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Loyal-Parts..</h2>
              <p>
                This is a manufacturer-based website. When I built this project,
                I used some tools like React, Node.js, MongoDB, jWT, daisyUI,
                etc. And in this project, I built the Payment System
              </p>
              <h2 className="font-bold"><span className="font-bold">Tools:</span> React, Express.js, MongoDB, JS, Tailwind, daisyUI</h2>
              <div className="card-actions justify-end">
                <a href="https://loyal-parts-f740c.firebaseapp.com/">
                  <div className="badge badge-outline bg-slate-700 p-4 text-white font-bold hover:bg-orange-500">
                    Live Site
                  </div>
                </a>
                <a href="https://github.com/mdshahedhossen/loyal-parts">
                  {" "}
                  <div className="badge badge-outline bg-orange-500 p-4 text-white font-bold hover:bg-slate-700">
                    Git Link
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:max-w-screen-lg bg-base-100 shadow-xl">
            <figure>
              <img src={halal} alt="halal" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Halal Perfumes...</h2>
              <p>This is a warehouse-management web-based project.</p>
              <h2 className="font-bold"><span className="font-bold">Tools:</span> React, Express.js, MongoDB, JS, Tailwind, daisyUI</h2>
              <div className="card-actions justify-end">
                <a href="https://halal-perfumes.firebaseapp.com/">
                  <div className="badge badge-outline bg-slate-700 p-4 text-white font-bold hover:bg-orange-500">
                    Live Site
                  </div>
                </a>
                <a href="https://github.com/mdshahedhossen/halal-perfumes">
                  {" "}
                  <div className="badge badge-outline bg-orange-500 p-4 text-white font-bold hover:bg-slate-700">
                    Git Link
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:max-w-screen-lg bg-base-100 shadow-xl">
            <figure>
              <img src={sbn} alt="SBN" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">SBN PhotoGraphy...</h2> 
              <p>This is a specific service-provided based project. When I built the project I used email verification systems.</p>
              <h2 className="font-bold"><span className="font-bold">Tools:</span> React, JS, JavaScript ES6, CSS, etc.</h2>
              <div className="card-actions justify-end">
                <a href="https://halal-perfumes.firebaseapp.com/">
                  <div className="badge badge-outline bg-slate-700 p-4 text-white font-bold hover:bg-orange-500">
                    Live Link
                  </div>
                </a>
                <a href="https://github.com/mdshahedhossen/halal-perfumes">
                  {" "}
                  <div className="badge badge-outline bg-orange-500 p-4 text-white font-bold hover:bg-slate-700">
                    Git Link
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="card lg:max-w-screen-lg bg-base-100 shadow-xl">
            <figure>
              <img src={carService} alt="carService" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car Services...</h2>
              <p>This is a car service base Project</p>
              <h2 className="font-bold"><span className="font-bold">Tools:</span> React, JavaScript,CSS</h2>
              <div className="card-actions justify-end">
                <a href="https://customercarreviews.netlify.app">
                  <div className="badge badge-outline bg-slate-700 p-4 text-white font-bold hover:bg-orange-500">
                    Live Site
                  </div>
                </a>
                <a href="https://github.com/mdshahedhossen?tab=repositories">
                  {" "}
                  <div className="badge badge-outline bg-orange-500 p-4 text-white font-bold hover:bg-slate-700">
                    Git Link
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projsect;
