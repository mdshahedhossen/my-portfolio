import React from 'react';
import Typical from 'react-typical'
import './Banner.css'
import bg2 from '../../Images/bg2.png'
import resume from '../../Images/Md._Shahed Hossen_Resume.pdf'
import { Link } from 'react-scroll';
import facebook from '../../Images/socialLogo/facebok_icon-icons.com_71203.png'
import git from '../../Images/socialLogo/Github_icon-icons.com_49946.png'
import linkedin from '../../Images/socialLogo/linkedin_black_logo_icon_147114.png'

const Banner = () => {
    return (
        <section>
      <div className="banner-container">
        <div className="personal-details">
          <div className='flex justify-center items-center space-x-4 mb-3 mt-4'>
            <a href="https://www.facebook.com/mdshahedhossendiu"><img className='bg-white rounded-full' src={facebook} alt="" /></a>
            <a href="https://www.linkedin.com/in/md-shahed-hossen-8bb490196/"><img className='bg-white rounded-full' src={linkedin} alt="" /></a>
            <a href="https://github.com/mdshahedhossen"><img className='bg-white rounded-full' src={git} alt="" /></a>
          </div>
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
          <Link activeclassName="active" to="contact" spy={true} smooth={true} offset={50} duration={500}><button className='button button-primary hover:bg-red-500'>Hire Me</button></Link>
          <a href={resume} download="Shahed's Resume"><button className='button button-secondary ml-3' > Get Resume</button></a>
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