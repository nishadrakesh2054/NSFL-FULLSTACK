import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaTable,
  FaNewspaper,
  FaTv,
} from "react-icons/fa";
import { TrophyIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome className="inline-block mr-2" /> },
    // {
    //   name: "About",
    //   path: "/about",
    //   icon: <FaInfoCircle className="inline-block mr-2" />,
    // },
    {
      name: "Teams",
      path: "/teams",
      icon: <FaUsers className="inline-block mr-2" />,
    },
    {
      name: "Fixture",
      path: "/fixture",
      icon: <FaCalendarAlt className="inline-block mr-2" />,
    },
    {
      name: "Table",
      path: "/table",
      icon: <FaTable className="inline-block mr-2" />,
    },
    {
      name: "News",
      path: "/news",
      icon: <FaNewspaper className="inline-block mr-2" />,
    },
    // {
    //   name: "Contact",
    //   path: "/contact",
    //   icon: <FaEnvelope className="inline-block mr-2" />,
    // },
    {
      name: "Live Match",
      path: "/live-match",
      icon: <FaTv className="inline-block mr-2" />,
    },
  ];

  return (
    <nav className="bg-[#0049be] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center space-x-2 text-3xl font-extrabold text-yellow-600 hover:text-yellow-500 transition"
          >
            <TrophyIcon className="h-8 w-8 text-yellow-500" />
            <span className="tracking-wide text-white">NSFL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-blue-300 transition-colors flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className=" py-2 hover:text-blue-300 transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
