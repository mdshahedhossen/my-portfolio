import React from "react";
import Typical from 'react-typical'
import mongo from "../Images/ServiceLogo/mongo.png";
import node from "../Images/ServiceLogo/node.png";
import react from "../Images/ServiceLogo/react.png";
import tailwind from "../Images/ServiceLogo/tailwind.png";

const MyServices = () => {
  return (
   <section className="mt-28">
    <h2 className="text-slate-800 text-[44px] text-center underline">
        My{" "}
    <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
              "Services...",3000,
              "Skills...",4000,

          ]}
        />
    </h2>
     <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 px-12 mt-20">
      <div class="card lg:max-h-screen bg-slate-700 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={mongo}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-white">MongoDB</h2>
        </div>
      </div>
      <div class="card lg:max-h-screen bg-orange-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={react}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">React & React Native</h2>
        </div>
      </div>
      <div class="card lg:max-h-screen bg-yellow-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={node}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">JS & Node.js</h2>
        </div>
      </div>
      <div class="card lg:max-h-screen bg-slate-600 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={tailwind}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-white">TailWind & daisyUI</h2>
        </div>
      </div>
    </div>

   </section>
  );
};

export default MyServices;
