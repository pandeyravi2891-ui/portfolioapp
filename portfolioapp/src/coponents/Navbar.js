import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FiCode } from "react-icons/fi";

function Navbar(props) {
  let title = props.title;
  let settitle = props.settitle;

  const [show, setshow] = useState(false);

  const handleScroll = (e, sectionId, titleName) => {
    e.preventDefault();
    settitle(titleName || sectionId);
    setshow(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home", name: "home" },
    { id: "about", label: "About", name: "about" },
    { id: "skills", label: "Skills", name: "skills" },
    { id: "projects", label: "Projects", name: "projects" },
    { id: "contact", label: "Contact", name: "contact" },
  ];

  return (
    <div className="h-full w-full flex justify-between items-center px-4 md:px-6 text-white relative">
      {/* Brand Logo */}
      <a href="#home" onClick={(e) => handleScroll(e, "home", "home")}>
        <div className="flex items-center tracking-wider cursor-pointer group">
          <div className="w-9 h-9 font-bold bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-sm shadow-md shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-blue-400/30">
            <FiCode className="text-lg text-white" />
          </div>
          <div className="ml-3 font-bold tracking-widest text-lg md:text-xl flex items-center">
            <span className="text-slate-100 group-hover:text-blue-300 transition duration-200">RAVI</span>
            <span className="ml-1.5 text-blue-400 group-hover:text-blue-300 transition duration-200">PANDEY</span>
          </div>
        </div>
      </a>

      {/* Desktop Navigation Links */}
      <div className="flex items-center gap-1.5 text-sm font-semibold max-[950px]:hidden">
        {navLinks.map((link) => {
          const isActive = title === link.name || (title === "project" && link.name === "projects");
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id, link.name)}
            >
              <div
                className={`transition-all duration-200 cursor-pointer px-4 py-1.5 rounded-full ${
                  isActive
                    ? "bg-blue-600/25 text-blue-400 border border-blue-500/50 shadow-md shadow-blue-500/20 scale-105"
                    : "text-slate-300 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                {link.label}
              </div>
            </a>
          );
        })}

        {/* Hire Me CTA */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact", "contact")}
          className="ml-3"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-blue-400/30">
            Hire Me
          </div>
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <div className="min-[950px]:hidden absolute right-3 flex items-center">
        <button
          onClick={() => setshow((prev) => !prev)}
          className="p-2 text-blue-400 hover:text-white transition duration-200 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <IoIosArrowDropdownCircle
            className={`text-2xl transition duration-300 ${
              show ? "rotate-180 text-blue-400" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          show
            ? "w-64 absolute top-[135%] right-0 flex flex-col justify-center p-3 items-center min-[950px]:hidden backdrop-blur-2xl bg-[#030f26]/95 border border-blue-500/30 z-50 rounded-2xl shadow-2xl shadow-blue-950/60 transition-all duration-300"
            : "opacity-0 hidden transition-all duration-300"
        } `}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleScroll(e, link.id, link.name)}
            className="w-full text-center py-1"
          >
            <div
              className={`transition duration-200 py-2 rounded-xl cursor-pointer hover:bg-white/10 ${
                title === link.name ? "bg-blue-600/20 text-blue-400 font-bold" : "text-slate-200"
              }`}
            >
              {link.label}
            </div>
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact", "contact")}
          className="w-full text-center my-2"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-bold w-full text-center cursor-pointer shadow-lg shadow-blue-500/30">
            Hire Me
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;