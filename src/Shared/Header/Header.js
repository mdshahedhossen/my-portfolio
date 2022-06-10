import React from 'react';

const Header = () => {
    const manuItems=<>
    <li className='text-white'><a>Home</a></li>
    <li className='text-white'><a>AboutMe</a></li>
    <li className='text-white'><a>Resume</a></li>
    <li className='text-white'><a>Project</a></li>
    <li className='text-white'><a>ContactMe</a></li>
    </>
    return (
        <div className="navbar bg-[#28243c] p-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52 ">
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