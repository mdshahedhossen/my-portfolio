import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-10 bg-[#28243c] text-base-content rounded mb-2">
      <div></div>
      <div>
        <p className="text-white font-bold">Copyright &copy; {date} - All right reserved by Md. Shahed Hossen</p>
      </div>
    </footer>
  );
};

export default Footer;
