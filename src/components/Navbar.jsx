import React from "react";

function Navbar() {
  return (
    <nav className="text-blue-950 dark:text-white md:px-16 lg:px-24 pt-3 h-20 sticky top-0 backdrop-blur-sm z-10">
      <div className="container py-2 flex justify-center md:justify-between lg:justify-between">
        <a href="">
          <div className="text-2xl font-bold hidden md:inline">
            <img
              className="w-14 hidden dark:block"
              src="/portfolio/logo2.png"
              alt=""
              draggable="false"
            />

            <img
              className="w-14 block dark:hidden"
              src="/portfolio/logo1.png"
              alt=""
              draggable="false"
            />
          </div>
        </a>
        <div className="space-x-6">
          <a href="#experience" className="hover:text-gray-500">
            Experience
          </a>
          <a href="#skills" className="hover:text-gray-500">
            Tools
          </a>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
