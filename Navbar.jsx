import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState("User");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "User");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const toggleProfileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNavMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-800 shadow-md">
      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white" onClick={toggleNavMenu}>
        {isNavOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Logo */}
      <img src="./images/logo.png" alt="PrepEdge Logo" className="w-20 h-12 mr-24" />

      {/* Navigation Links */}
      <div
        className={`px-12 absolute md:static top-16 left-0 w-full md:w-auto bg-slate-800 md:bg-transparent shadow-md md:shadow-none transform transition-transform duration-300 z-50 md:flex ${
          isNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">Interview Etiquettes</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">Senior Guidance</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">Resume Builder</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">Companies Info</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">RoadMap</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">Job Preference</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">Coding</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">About us</a>
          <a href="#" className="text-gray-300 hover:text-blue-500 py-2 md:py-0">Contact us</a>
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative flex items-center space-x-2 cursor-pointer p-2 ml-auto" ref={menuRef} onClick={toggleProfileMenu}>
        <img src="./images/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />
        <span className="text-white font-medium">{loggedInUser}</span>

        {isMenuOpen && (
          <div className="absolute right-0 mt-32 w-40 bg-white border rounded shadow-md">
            <button className="w-full text-left px-4 py-2 text-blue-800 hover:bg-gray-100" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
