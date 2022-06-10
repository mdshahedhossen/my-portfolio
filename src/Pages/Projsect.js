import React from "react";
import loyal from "../Images/Projects/loyal.png"
import halal from "../Images/Projects/halal.png"
import sbn from "../Images/Projects/sbn.png"
import carService from "../Images/Projects/car-service.png"

const Projsect = () => {
  return (
    <div id="project">
        <div className="mt-14">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 px-12">
      <div class="card lg:max-w-screen-lg bg-base-100 shadow-xl">
        <figure>
          <img
            src={loyal}
            alt="loyal"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Loyal-Parts!
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
           <a href="#"><div class="badge badge-outline">Live Site</div></a>
           <a href="#"> <div class="badge badge-outline">Git Link</div></a>
          </div>
        </div>
      </div>
      <div class="card lg:max-w-screen-lg bg-base-100 shadow-xl">
        <figure>
          <img
            src={halal}
            alt="halal"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Halal Perfumes...
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
           <a href="#"><div class="badge badge-outline">Live Site</div></a>
           <a href="#"> <div class="badge badge-outline">Git Link</div></a>
          </div>
        </div>
      </div>
      <div class="card lg:max-w-screen-lg bg-base-100 shadow-xl">
        <figure>
          <img
            src={sbn}
            alt="SBN"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
          SBN PhotoGraphy...
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
           <a href="#"><div class="badge badge-outline">Fashion</div></a>
           <a href="#"> <div class="badge badge-outline">Products</div></a>
          </div>
        </div>
      </div>
      <div class="card lg:max-w-screen-lg bg-base-100 shadow-xl">
        <figure>
          <img
            src={carService}
            alt="carService"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Car Services
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
           <a href="https://customercarreviews.netlify.app"><div class="badge badge-outline">Live Site</div></a>
           <a href="#"> <div class="badge badge-outline">Git Link</div></a>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
  );
};

export default Projsect;
