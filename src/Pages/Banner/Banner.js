import React from 'react';
import Typical from 'react-typical'
import './Banner.css'
import bg2 from '../../Images/bg2.png'

const Banner = () => {
    return (
        <section>
      <div className="banner-container">
        <div className="personal-details">
          <h2 className="profile-details">
            Hello, I'M <span className="name">Shahed</span>
          </h2>
          <div className="typical-role">
          <h1>
          <Typical
          
          steps={[
              "Fullstack Developer",2000, 
              "MERN Stack Dev", 2000,
              "React/React Native Dev", 2000,

          ]}
          loop={Infinity}
          wrapper="p"
        />
          </h1>
          </div>
          <span className="profile-role-tagline">Knack of building applications with front and back end operations.</span>
          <div className="btn-section mt-10">
          <button className='button button-primary hover:bg-red-300'>Hire Me</button>
          <button className='button button-secondary ml-3'> Get Resume</button>
          </div>
        </div>

        <div className="profile-picture">
            <div className="profile-picture-bg">

            </div>
        </div>
      </div>
     <div className='bg-[#28243c]'>
      <img src={bg2} alt="" />
     </div>
    </section>
    );
};

export default Banner;