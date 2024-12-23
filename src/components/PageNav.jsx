import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-white ">
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="h-8 md:h-10" />
      </div>

      <div className="hidden md:flex space-x-8">
        <NavLink
          to="/ACES-MHS/"
          className="font-semibold text-gray-700 hover:text-gray-900"
        >
          Home
        </NavLink>
        <NavLink to="/ACES-MHS/" className="text-gray-600 hover:text-gray-900">
          About
        </NavLink>
        <NavLink to="/ACES-MHS/" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </NavLink>
      </div>

      <div className="flex space-x-4">
        <NavLink
          to="/login"
          className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/register"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Sign Up
        </NavLink>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-5 md:hidden flex flex-col space-y-4 text-center">
          <NavLink
            to="/ACES-MHS/"
            className="font-semibold text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/ACES-MHS/"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/ACES-MHS/"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </NavLink>
          <NavLink
            to="/register"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default PageNav;
