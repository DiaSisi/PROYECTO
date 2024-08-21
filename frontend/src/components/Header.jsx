import React, { useState } from "react";
import SerendipityLogo from "../assets/img/logo.png";
import BackgroundImage from "../assets/img/background.png";
import './Header.css'

// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex justify-center items-start w-[100%] p-5 z-[10] px-[10vw] h-[45vh]">

      <div className="flex items-center justify-between text-center px-2 pt-2">
        <img src={SerendipityLogo} alt="Serendipity Logo" className="h-20 " />
        <h4 className="text-2xl font-bold" style={{ fontFamily: "Ribeye Marrow" }}>Serendipity</h4>
      </div>
      <nav
        className={` text-1xl w-[100%]${showMenu ? "left-0" : "left-full"} h-20 
        top-0 xl:static flex-1 flex xl:flex-row items-center justify-end gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="text-white font-bold">
          Home
        </a>
        <a href="#products" className="text-white font-bold">
          Products
        </a>
        <a href="#cart" className="text-white font-bold">
          Cart
        </a>
        <a href="#login" className="text-white font-bold">
          Login
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
