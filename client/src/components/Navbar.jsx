import React from "react";
import logo from "../../images/main_logo.png";
import word1 from "../../images/lone.png";
import word2 from "../../images/wolf.png";
import word3 from "../../images/app.png";


const Navbar = () => {

  return (
    <nav className="w-full flex md:justify-left justify-between items-left p-4 blue-glassmorphism">
      <div className="md:flex-[0.5] flex justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        <img src={word1} alt="logo" className="w-32 cursor-pointer" />
        <img src={word2} alt="logo" className="w-32 cursor-pointer" />
        <img src={word3} alt="logo" className="w-20 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
