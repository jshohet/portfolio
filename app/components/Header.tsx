import React from "react";

const Header = () => {
  return (
    <nav className="flex bg-[#0c0d2e] list-none uppercase font-semibold text-[rgba(255,255,255,.8)] flex-row justify-evenly shadow-lg h-24 text-sm sm:text-lg items-center">
      <li className="">
        <a href="#home" className="navLink">
          <h2>Home</h2>
        </a>
      </li>
      <li className="">
        <a href="#about" className="navLink">
          <h2>About</h2>
        </a>
      </li>
      <li className="">
        <a href="#projects" className="navLink">
          <h2>Projects</h2>
        </a>
      </li>
      <li className="">
        <a href="#contact" className="navLink">
          <h2>Contact</h2>
        </a>
      </li>
    </nav>
  );
};

export default Header;
