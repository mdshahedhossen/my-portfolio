import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'
import resume from '../../Images/Md._Shahed Hossen_Resume.pdf'

const Header = () => {
    const manuItems=<>
    <li className='text-white font-bold'><Link activeclassName="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
    <li className='text-white font-bold'><Link activeclassName="active" to="aboutme" spy={true} smooth={true} offset={50} duration={500}>AboutMe</Link></li>
    <li className='text-white font-bold'><a href={resume} download="Shahed's Resume">Resume</a></li>
    {/* <li className='text-white font-bold'><Link activeclassName="active" to="resume" spy={true} smooth={true} offset={50} duration={500}>Resume</Link></li> */}
    <li className='text-white font-bold'><Link activeclassName="active" to="project" spy={true} smooth={true} offset={50} duration={500}>Project</Link></li>
    <li className='text-white font-bold'><Link activeclassName="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>ContactMe</Link></li>
    </>
    return (
        <div className="navbar bg-[#28243c] p-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52 ">
        {manuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case lg:text-[35px] text-white">Md. Shahed Hossen</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {manuItems}
    </ul>
  </div>
</div>
    );
};

export default Header;